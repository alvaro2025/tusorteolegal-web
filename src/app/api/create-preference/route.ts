import { MercadoPagoConfig, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

const SORTEOS = {
  A: {
    title: 'Boleto Sorteo A - Propiedad Conchalí',
    unit_price: 5000,
    description: 'Boleto para sorteo de propiedad en Avenida Nueva Central 4588, Conchalí',
  },
  B: {
    title: 'Boleto Sorteo B - Propiedad Quinta Normal',
    unit_price: 5000,
    description: 'Boleto para sorteo de propiedad en Villasana 1451, Quinta Normal',
  },
  C: {
    title: 'Boleto Sorteo C - Propiedad Estación Central',
    unit_price: 5000,
    description: 'Boleto para sorteo de propiedad en Blanco Garces 154, Estación Central',
  },
  D: {
    title: 'Boleto Sorteo D - Camioneta JAC T8 Azul',
    unit_price: 1500,
    description: 'Boleto para sorteo de Camioneta JAC T8 Azul, motor 2.0, 4x2, año 2022',
  },
} as const

type SorteoKey = keyof typeof SORTEOS

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sorteo, quantity } = body as { sorteo: string; quantity: number }

    if (!sorteo || !SORTEOS[sorteo as SorteoKey]) {
      return NextResponse.json({ error: 'Sorteo inválido' }, { status: 400 })
    }

    if (!quantity || quantity < 1 || quantity > 10) {
      return NextResponse.json({ error: 'Cantidad inválida (1-10)' }, { status: 400 })
    }

    const sorteoData = SORTEOS[sorteo as SorteoKey]

    const preference = new Preference(client)

    const result = await preference.create({
      body: {
        items: [
          {
            id: `sorteo-${sorteo}`,
            title: sorteoData.title,
            description: sorteoData.description,
            quantity: quantity,
            unit_price: sorteoData.unit_price,
            currency_id: 'CLP',
          },
        ],
        back_urls: {
          success: 'https://tusorteolegal.cl/?status=approved',
          failure: 'https://tusorteolegal.cl/?status=failure',
          pending: 'https://tusorteolegal.cl/?status=pending',
        },
        auto_return: 'approved',
        statement_descriptor: 'TUSORTEOLEGAL',
      },
    })

    return NextResponse.json({ init_point: result.init_point })
  } catch (error) {
    console.error('Error creating preference:', error)
    return NextResponse.json(
      { error: 'Error al crear la preferencia de pago' },
      { status: 500 }
    )
  }
}
