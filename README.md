# TuSorteoLegal - Sitio Web de Sorteo

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple)

Sitio web moderno para el sorteo de departamentos y camioneta 0km.

## Características

- 🎨 Diseño oscuro con colores naranja (#F97316) y morado (#7C3AED)
- ✨ Animaciones con Framer Motion
- 💫 Partículas flotantes en el Hero
- 📅 Contador regresivo al 31 de diciembre de 2025
- 🎫 Botón de compra con efecto confeti
- 📱 Integración con MercadoPago (demo)
- ✅ SEO completo (Meta tags, Open Graph, Schema.org)
- 🤖 sitemap.xml y robots.txt

## Tecnologías

- **Framework:** Next.js 14
- **Estilos:** Tailwind CSS 3
- **Animaciones:** Framer Motion
- **Payments:** MercadoPago SDK
- **Deployment:** Vercel

## Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm start
```

## Configuración de MercadoPago

La clave pública de MercadoPago está configurada en:
- `src/components/BuyTicket.tsx` (variable: `MERCADO_PAGO_PUBLIC_KEY`)
- `vercel.json` (variable de entorno)

Para producción, configurar las variables de entorno en Vercel:
- `NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY`

## Despliegue en Vercel

1. Conectar el repositorio a Vercel
2. Las configuraciones de Vercel están en `vercel.json`
3. Deploy automático

### Variables de Entorno (Vercel)

| Variable | Valor |
|----------|-------|
| NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY | APP_USR-6ef629d8-ea6c-4927-8428-3441841dd1d5 |

## Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globales
│   │   ├── layout.tsx       # Layout principal con SEO
│   │   └── page.tsx        # Página principal
│   └── components/
│       ├── Hero.tsx        # Sección Hero con partículas
│       ├── Prize.tsx       # Sección de premios
│       ├── HowItWorks.tsx  # Cómo funciona
│       ├── Countdown.tsx   # Contador regresivo
│       ├── BuyTicket.tsx   # Compra de boletos
│       └── Footer.tsx      # Pie de página
├── public/
│   ├── sitemap.xml         # Sitemap
│   └── robots.txt          # Robots.txt
├── vercel.json            # Configuración Vercel
├── tailwind.config.js     # Configuración Tailwind
└── package.json
```

## Licencia

MIT
