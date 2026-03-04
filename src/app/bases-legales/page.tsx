import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bases Legales',
  description: 'Términos, condiciones y bases legales del sorteo de Tu Sorteo Legal Limitada. RUT 78.114.381-2.',
  alternates: {
    canonical: 'https://tusorteolegal.cl/bases-legales',
  },
}

export default function BasesLegales() {
  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
            Bases Legales del Sorteo
          </span>
        </h1>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-8 text-gray-300">
          {/* 1. Empresa organizadora */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Empresa Organizadora</h2>
            <div className="space-y-2">
              <p>
                El presente sorteo es organizado por <strong className="text-white">Tu Sorteo Legal Limitada</strong>,
                RUT <strong className="text-white">78.114.381-2</strong>, con domicilio en
                <strong className="text-white"> Los Adobes 1823, Maipú, Región Metropolitana</strong>.
              </p>
              <p>Representantes legales:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong className="text-white">Sandra Evelyn Díaz Cifuentes</strong>, RUT <strong className="text-white">11.605.873-1</strong></li>
                <li><strong className="text-white">Álvaro Rodrigo Donoso Díaz</strong>, RUT <strong className="text-white">14.156.552-4</strong></li>
              </ul>
            </div>
          </section>

          {/* 2. Premios */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Premios</h2>
            <p className="mb-4">Se sortearán los siguientes premios:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary-orange font-bold">A.</span>
                <div>
                  <strong className="text-white">Departamento en Av. Nueva Central 4588, depto 805, Conchalí</strong>
                  <br />Valor boleto: $5.000 CLP
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-orange font-bold">B.</span>
                <div>
                  <strong className="text-white">Departamento en Villasana 1451, depto 906 torre B, Quinta Normal</strong>
                  <br />Valor boleto: $5.000 CLP
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-orange font-bold">C.</span>
                <div>
                  <strong className="text-white">Departamento en Blanco Garces 154, depto 3102 torre A, Estación Central</strong>
                  <br />Valor boleto: $5.000 CLP
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-orange font-bold">D.</span>
                <div>
                  <strong className="text-white">Camioneta JAC T8 Azul</strong> — Motor 2.0, tracción 4x2, año 2022
                  <br />Valor boleto: $1.500 CLP
                </div>
              </li>
            </ul>
          </section>

          {/* 3. Fecha del sorteo */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Fecha y Lugar del Sorteo</h2>
            <p>
              El sorteo se realizará el día <strong className="text-white">19 de abril de 2026 a las 12:00 horas</strong>,
              ante la <strong className="text-white">Notaría N°42 de Santiago</strong>.
            </p>
            <p className="mt-2">
              En caso de no alcanzar el mínimo de boletos vendidos, el sorteo podrá prorrogarse hasta el
              <strong className="text-white"> 19 de junio de 2026</strong>.
            </p>
          </section>

          {/* 4. Requisitos mínimos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Requisitos Mínimos</h2>
            <p>
              Para la realización de cada sorteo se requiere un mínimo de <strong className="text-white">50.000 boletos vendidos</strong>.
              Si no se alcanza este mínimo en la fecha prevista, la empresa se reserva el derecho de prorrogar el sorteo
              según lo indicado en el punto anterior, o de reembolsar el 100% del valor de los boletos comprados.
            </p>
          </section>

          {/* 5. Requisitos para participar */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Requisitos para Participar</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ser mayor de 18 años.</li>
              <li>Residir en territorio chileno.</li>
              <li>Adquirir uno o más boletos a través de los canales oficiales de venta (sitio web tusorteolegal.cl).</li>
              <li>Proporcionar datos verídicos al momento de la compra (nombre completo, RUT, correo electrónico, teléfono).</li>
            </ul>
          </section>

          {/* 6. Mecánica del sorteo */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Mecánica del Sorteo</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Cada boleto adquirido tiene un número único asignado automáticamente.</li>
              <li>El sorteo se realizará mediante sistema aleatorio certificado ante notario público.</li>
              <li>Se extraerá un número ganador por cada premio (4 en total).</li>
              <li>Un mismo boleto solo puede ganar un premio.</li>
              <li>Los resultados serán publicados en tusorteolegal.cl y comunicados por correo electrónico y WhatsApp al ganador.</li>
            </ol>
          </section>

          {/* 7. Entrega de premios */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Entrega de Premios</h2>
            <p>
              Los ganadores serán contactados dentro de las 48 horas siguientes al sorteo.
              La entrega de las propiedades se realizará mediante escritura pública de compraventa
              ante notario, dentro de los 60 días hábiles siguientes al sorteo.
              La camioneta será entregada en las oficinas de Tu Sorteo Legal Limitada.
            </p>
            <p className="mt-2">
              Los gastos de transferencia, inscripción, contribuciones y trámites legales asociados
              a la transferencia de las propiedades y vehículo serán de cargo del ganador.
            </p>
          </section>

          {/* 8. Tratamiento de datos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Protección de Datos Personales</h2>
            <p>
              Los datos personales proporcionados por los participantes serán utilizados exclusivamente
              para la gestión del sorteo y la comunicación de resultados. Tu Sorteo Legal Limitada se
              compromete a resguardar la confidencialidad de los datos conforme a la Ley N° 19.628 sobre
              Protección de la Vida Privada.
            </p>
          </section>

          {/* 9. Aceptación */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Aceptación de las Bases</h2>
            <p>
              La compra de un boleto implica la aceptación íntegra de estas bases legales.
              Cualquier situación no prevista será resuelta por Tu Sorteo Legal Limitada en
              conjunto con el notario certificador.
            </p>
          </section>

          {/* 10. Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
            <p>
              Para consultas relacionadas con el sorteo, los participantes pueden comunicarse a:
            </p>
            <ul className="mt-2 space-y-1">
              <li>Email: <strong className="text-white">contacto@tusorteolegal.cl</strong></li>
              <li>WhatsApp: <a href="https://wa.me/56956693126" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:text-orange-400 transition-colors">+569 5669 3126</a></li>
              <li>Sitio web: <strong className="text-white">tusorteolegal.cl</strong></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
