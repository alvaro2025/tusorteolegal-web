import { MercadoPagoConfig, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

const SORTEOS_PACKS = {
  A: 'Sorteo A - Departamento',
  B: 'Sorteo B - Departamento',
  C: 'Sorteo C - Departamento',
  D: 'Sorteo D - Camioneta',
} as const

const PACKS = {
  individual: { cantidad: 1, precio: 5000, nombre: '1 Ticket' },
  triple: { cantidad: 3, precio: 14000, nombre: 'Pack 3 Tickets' },
  cinco: { cantidad: 5, precio: 23000, nombre: 'Pack 5 Tickets' },
  decena: { cantidad: 10, precio: 45000, nombre: 'Pack 10 Tickets' },
} as const

type ApiItem = { sorteo: string; quantity: number }
type Buyer = { nombre?: string; rut?: string; email?: string; telefono?: string }
type MPPaymentItem = { id: string; title: string; description: string; quantity: number; unit_price: number; currency_id: 'CLP' }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const buyer: Buyer = body.buyer || {}

    let items: MPPaymentItem[]
    let totalPrice = 0
    let sorteo = ''

    if (body?.pack_tipo && body?.sorteo) {
      const pack = PACKS[body.pack_tipo as keyof typeof PACKS]
      const sorteoLabel = SORTEOS_PACKS[body.sorteo as keyof typeof SORTEOS_PACKS]

      if (!pack || !sorteoLabel) {
        return NextResponse.json({ error: 'Pack o sorteo invalido' }, { status: 400 })
      }
      sorteo = body.sorteo

      items = [{
        id: `pack-${body.pack_tipo}-${body.sorteo}`,
        title: `${pack.nombre} - ${sorteoLabel}`,
        description: `Boleto sorteo ${sorteoLabel}`,
        quantity: 1,
        unit_price: pack.precio,
        currency_id: 'CLP' as const,
      }]
      totalPrice = pack.precio
    } else if (body?.items && Array.isArray(body.items) && body.items.length > 0) {
      items = body.items.map((item: ApiItem) => {
        if (!item.sorteo || !item.quantity) {
          throw new Error('Cada item debe tener sorteo y quantity')
        }
        const sorteoLabel = SORTEOS_PACKS[item.sorteo as keyof typeof SORTEOS_PACKS]
        if (!sorteoLabel) {
          throw new Error(`Sorteo invalido: ${item.sorteo}`)
        }
        totalPrice += 5000 * item.quantity
        if (!sorteo) sorteo = item.sorteo
        return {
          id: `ticket-${item.sorteo}`,
          title: sorteoLabel,
          description: `Boleto sorteo ${sorteoLabel}`,
          quantity: item.quantity,
          unit_price: 5000,
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
          success: 'https://tusorteolegal.cl/?status=approved',
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