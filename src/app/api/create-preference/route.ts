import { MercadoPagoConfig, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

const PACKS = {
  individual: { cantidad: 1, precio: 5000, nombre: '1 Ticket' },
  triple: { cantidad: 3, precio: 14000, nombre: 'Pack 3 Tickets' },
  cinco: { cantidad: 5, precio: 23000, nombre: 'Pack 5 Tickets' },
  decena: { cantidad: 10, precio: 45000, nombre: 'Pack 10 Tickets' },
} as const

const SORTEOS = {
  A: { label: 'Sorteo A - Departamento', precio: 5000 },
  B: { label: 'Sorteo B - Departamento', precio: 5000 },
  C: { label: 'Sorteo C - Departamento', precio: 5000 },
  D: { label: 'Sorteo D - Camioneta', precio: 1500 },
} as const

type ApiItem = { sorteo: keyof typeof SORTEOS; quantity: number }
type Buyer = { nombre?: string; rut?: string; email?: string; telefono?: string }
type MPPaymentItem = {
  id: string
  title: string
  description: string
  quantity: number
  unit_price: number
  currency_id: 'CLP'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const buyer: Buyer = body.buyer || {}

    let items: MPPaymentItem[]
    let totalPrice = 0
    let sorteo = ''

    if (body?.pack_tipo && body?.sorteo) {
      // Rama PACKS: descuentos por cantidad. D bloqueada para packs con descuento.
      const pack = PACKS[body.pack_tipo as keyof typeof PACKS]
      const sorteoData = SORTEOS[body.sorteo as keyof typeof SORTEOS]

      if (!pack || !sorteoData) {
        return NextResponse.json({ error: 'Pack o sorteo invalido' }, { status: 400 })
      }

      if (body.sorteo === 'D' && body.pack_tipo !== 'individual') {
        return NextResponse.json(
          { error: 'Sorteo D solo permite ticket individual de $1.500 CLP' },
          { status: 400 }
        )
      }

      const unitPrice = body.sorteo === 'D' ? sorteoData.precio : pack.precio
      sorteo = body.sorteo

      items = [{
        id: `pack-${body.pack_tipo}-${body.sorteo}`,
        title: `${pack.nombre} - ${sorteoData.label}`,
        description: `Boleto sorteo ${sorteoData.label}`,
        quantity: 1,
        unit_price: unitPrice,
        currency_id: 'CLP' as const,
      }]
      totalPrice = unitPrice
    } else if (body?.items && Array.isArray(body.items) && body.items.length > 0) {
      // Rama items[]: sin packs con descuento. D permite cualquier cantidad a $1.500 c/u.
      items = body.items.map((item: ApiItem) => {
        if (!item.sorteo || !item.quantity) {
          throw new Error('Cada item debe tener sorteo y quantity')
        }
        const sorteoData = SORTEOS[item.sorteo]
        if (!sorteoData) {
          throw new Error(`Sorteo invalido: ${item.sorteo}`)
        }
        totalPrice += sorteoData.precio * item.quantity
        if (!sorteo) sorteo = item.sorteo
        return {
          id: `ticket-${item.sorteo}`,
          title: sorteoData.label,
          description: `Boleto sorteo ${sorteoData.label}`,
          quantity: item.quantity,
          unit_price: sorteoData.precio,
          currency_id: 'CLP' as const,
        }
      })
    } else {
      return NextResponse.json({ error: 'Formato de solicitud no valido' }, { status: 400 })
    }

    const totalTickets = items.reduce((sum, item) => sum + item.quantity, 0)

    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items,
        metadata: {
          cantidad_tickets: totalTickets,
          hospital_50: Math.round(totalPrice * 0.5),
          sorteo,
          comprador: JSON.stringify(buyer),
        },
        back_urls: {
          success: 'https://tusorteolegal.cl/gracias',
          failure: 'https://tusorteolegal.cl/?status=failure',
          pending: 'https://tusorteolegal.cl/?status=pending',
        },
        auto_return: 'approved',
        statement_descriptor: 'TUSORTEOLEGAL',
        external_reference: body.pack_tipo
          ? `pack-${body.pack_tipo}-${sorteo}-${Date.now()}`
          : `tickets-${sorteo}-${Date.now()}`,
      },
    })

    return NextResponse.json({ init_point: result.init_point })
  } catch (error) {
    console.error('Error creating preference:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error al crear la preferencia de pago' }, { status: 500 })
  }
}
