import { MercadoPagoConfig, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

const SORTEOS = {
  A: {
    title: 'Boleto Sorteo A - Depto Conchalí',
    unit_price: 5000,
    description: 'Boleto sorteo depto Av. Nueva Central 4588, Conchalí',
  },
  B: {
    title: 'Boleto Sorteo B - Depto Quinta Normal',
    unit_price: 5000,
    description: 'Boleto sorteo depto Villasana 1451, Quinta Normal',
  },
  C: {
    title: 'Boleto Sorteo C - Depto Estación Central',
    unit_price: 5000,
    description: 'Boleto sorteo depto Blanco Garces 154, Estación Central',
  },
  D: {
    title: 'Boleto Sorteo D - Camioneta JAC T8 Azul',
    unit_price: 1500,
    description: 'Boleto sorteo Camioneta JAC T8 azul motor 2.0 4x2 año 2022',
  },
} as const

type SorteoKey = keyof typeof SORTEOS

interface CartItem {
  sorteo: string
  quantity: number
}

interface BuyerData {
  nombre: string
  rut: string
  email: string
  telefono: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, buyer } = body as { items: CartItem[]; buyer: BuyerData }

    // Validate buyer data
    if (!buyer || !buyer.nombre?.trim() || !buyer.rut?.trim() || !buyer.email?.trim() || !buyer.telefono?.trim()) {
      return NextResponse.json({ error: 'Todos los datos del comprador son obligatorios' }, { status: 400 })
    }

    // Validate items
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Selecciona al menos un boleto' }, { status: 400 })
    }

    const preferenceItems = items
      .filter((item) => {
        const key = item.sorteo as SorteoKey
        return SORTEOS[key] && item.quantity > 0 && item.quantity <= 50
      })
      .map((item) => {
        const key = item.sorteo as SorteoKey
        const sorteoData = SORTEOS[key]
        return {
          id: `sorteo-${key}`,
          title: sorteoData.title,
          description: sorteoData.description,
          quantity: item.quantity,
          unit_price: sorteoData.unit_price,
          currency_id: 'CLP' as const,
        }
      })

    if (preferenceItems.length === 0) {
      return NextResponse.json({ error: 'No hay boletos válidos en el carrito' }, { status: 400 })
    }

    const preference = new Preference(client)

    const result = await preference.create({
      body: {
        items: preferenceItems,
        payer: {
          name: buyer.nombre,
          email: buyer.email,
          phone: {
            number: buyer.telefono,
          },
          identification: {
            type: 'RUT',
            number: buyer.rut,
          },
        },
        back_urls: {
          success: 'https://tusorteolegal.cl/?status=approved',
          failure: 'https://tusorteolegal.cl/?status=failure',
          pending: 'https://tusorteolegal.cl/?status=pending',
        },
        auto_return: 'approved',
        statement_descriptor: 'TUSORTEOLEGAL',
        external_reference: `${buyer.rut}-${Date.now()}`,
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
