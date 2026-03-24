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

const SORTEOS_PACKS = {
  A: 'Sorteo A - Departamento',
  B: 'Sorteo B - Departamento',
  C: 'Sorteo C - Departamento',
  D: 'Sorteo D - Camioneta',
} as const

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body?.pack_tipo) {
      return NextResponse.json({ error: 'pack_tipo es requerido' }, { status: 400 })
    }

    const pack = PACKS[body.pack_tipo as keyof typeof PACKS]
    const sorteoLabel = SORTEOS_PACKS[body.sorteo as keyof typeof SORTEOS_PACKS]

    if (!pack || !sorteoLabel) {
      return NextResponse.json({ error: 'Pack o sorteo invalido' }, { status: 400 })
    }

    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items: [
          {
            id: `pack-${body.pack_tipo}-${body.sorteo}`,
            title: `${pack.nombre} - ${sorteoLabel}`,
            description: `Boleto sorteo ${sorteoLabel}`,
            quantity: 1,
            unit_price: pack.precio,
            currency_id: 'CLP' as const,
          },
        ],
        metadata: {
          cantidad_tickets: pack.cantidad,
          sorteo: body.sorteo,
          hospital_50: Math.round(pack.precio * 0.5),
        },
        back_urls: {
          success: 'https://tusorteolegal.cl/?status=approved',
          failure: 'https://tusorteolegal.cl/?status=failure',
          pending: 'https://tusorteolegal.cl/?status=pending',
        },
        auto_return: 'approved',
        statement_descriptor: 'TUSORTEOLEGAL',
        external_reference: `pack-${body.pack_tipo}-${body.sorteo}-${Date.now()}`,
      },
    })

    return NextResponse.json({ init_point: result.init_point })
  } catch (error) {
    console.error('Error creating preference:', error)
    return NextResponse.json({ error: 'Error al crear la preferencia de pago' }, { status: 500 })
  }
}
