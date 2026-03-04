import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones completos del sorteo organizado por Tu Sorteo Legal Limitada, RUT 78.114.381-2.',
  alternates: {
    canonical: 'https://tusorteolegal.cl/terminos',
  },
}

export default function Terminos() {
  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
            Términos y Condiciones
          </span>
        </h1>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-8 text-gray-300">

          {/* 1. Identificación */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Identificación de la Empresa Organizadora</h2>
            <div className="space-y-2">
              <p>Razón social: <strong className="text-white">Tu Sorteo Legal Limitada</strong></p>
              <p>RUT: <strong className="text-white">78.114.381-2</strong></p>
              <p>Domicilio: <strong className="text-white">Los Adobes 1823, Maipú, Región Metropolitana</strong></p>
              <p>Representantes legales:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong className="text-white">Sandra Evelyn Díaz Cifuentes</strong>, RUT <strong className="text-white">11.605.873-1</strong></li>
                <li><strong className="text-white">Álvaro Rodrigo Donoso Díaz</strong>, RUT <strong className="text-white">14.156.552-4</strong></li>
              </ul>
            </div>
          </section>

          {/* 2. Objeto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Objeto del Sorteo</h2>
            <p>
              Los presentes términos y condiciones regulan la participación en el sorteo organizado por Tu Sorteo Legal Limitada,
              el cual tiene por objeto rifar los premios detallados a continuación mediante la venta de boletos a través del sitio
              web <strong className="text-white">tusorteolegal.cl</strong>.
            </p>
          </section>

          {/* 3. Premios */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Descripción de los Premios</h2>
            <p className="mb-4">Se sortearán los siguientes premios, cada uno de forma independiente:</p>

            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <h3 className="text-primary-orange font-bold mb-1">Premio A &mdash; Departamento en Conchalí</h3>
                <p>Ubicación: <strong className="text-white">Av. Nueva Central 4588, depto 805, Conchalí, Región Metropolitana</strong></p>
                <p>Valor del boleto: <strong className="text-white">$5.000 CLP</strong></p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4">
                <h3 className="text-primary-orange font-bold mb-1">Premio B &mdash; Departamento en Quinta Normal</h3>
                <p>Ubicación: <strong className="text-white">Villasana 1451, depto 906 torre B, Quinta Normal, Región Metropolitana</strong></p>
                <p>Valor del boleto: <strong className="text-white">$5.000 CLP</strong></p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4">
                <h3 className="text-primary-orange font-bold mb-1">Premio C &mdash; Departamento en Estación Central</h3>
                <p>Ubicación: <strong className="text-white">Blanco Garces 154, depto 3102 torre A, Estación Central, Región Metropolitana</strong></p>
                <p>Valor del boleto: <strong className="text-white">$5.000 CLP</strong></p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4">
                <h3 className="text-primary-orange font-bold mb-1">Premio D &mdash; Camioneta JAC T8 Azul</h3>
                <p>Vehículo: <strong className="text-white">Camioneta JAC T8 azul, motor 2.0, tracción 4x2, año 2022</strong></p>
                <p>Valor del boleto: <strong className="text-white">$1.500 CLP</strong></p>
              </div>
            </div>
          </section>

          {/* 4. Fecha y lugar */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Fecha, Hora y Lugar del Sorteo</h2>
            <p>
              El sorteo se realizará el día <strong className="text-white">19 de abril de 2026</strong>,
              a las <strong className="text-white">12:00 horas</strong>, ante la <strong className="text-white">Notaría N°42 de Santiago</strong>.
            </p>
            <p className="mt-2">
              En caso de no alcanzar el número mínimo de boletos vendidos establecido en estas bases,
              la empresa se reserva el derecho de prorrogar la fecha del sorteo hasta el
              <strong className="text-white"> 19 de junio de 2026</strong>, previa comunicación a los participantes.
            </p>
          </section>

          {/* 5. Mínimo de boletos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Mínimo de Boletos para Realización del Sorteo</h2>
            <p>
              Para que el sorteo de cada premio se lleve a cabo, se requiere la venta mínima de
              <strong className="text-white"> 50.000 (cincuenta mil) boletos</strong> por sorteo.
            </p>
            <p className="mt-2">
              Si al momento de la fecha del sorteo (o de su prórroga) no se hubiere alcanzado dicho mínimo,
              Tu Sorteo Legal Limitada procederá al <strong className="text-white">reembolso del 100% del valor</strong> de
              los boletos comprados, en un plazo máximo de 30 días hábiles contados desde la fecha en que se
              comunique la no realización del sorteo.
            </p>
          </section>

          {/* 6. Requisitos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Requisitos para Participar</h2>
            <p className="mb-3">Podrán participar en el sorteo las personas que cumplan con todos los siguientes requisitos:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Ser persona natural, mayor de 18 años de edad.</li>
              <li>Residir en territorio de la República de Chile.</li>
              <li>Adquirir uno o más boletos exclusivamente a través del sitio web oficial <strong className="text-white">tusorteolegal.cl</strong>.</li>
              <li>Proporcionar datos personales verídicos y completos al momento de la compra:
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-gray-400">
                  <li>Nombre completo</li>
                  <li>RUT (Rol Único Tributario)</li>
                  <li>Correo electrónico válido</li>
                  <li>Número de teléfono de contacto</li>
                </ul>
              </li>
              <li>No estar afecto a inhabilidades legales para participar en sorteos o concursos.</li>
            </ol>
          </section>

          {/* 7. Mecánica */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Mecánica del Sorteo</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Cada boleto adquirido tiene asignado un <strong className="text-white">número único e irrepetible</strong>, generado automáticamente por el sistema al momento de la compra.</li>
              <li>El participante puede comprar boletos para uno o más sorteos simultáneamente.</li>
              <li>El sorteo se realizará mediante <strong className="text-white">sistema de selección aleatoria certificado</strong> ante el notario público designado.</li>
              <li>Se extraerá un número ganador por cada premio, totalizando <strong className="text-white">4 ganadores</strong> (uno por cada premio).</li>
              <li>Un mismo boleto solo puede ganar un premio. Un participante puede ganar más de un premio si posee boletos distintos para sorteos diferentes.</li>
              <li>Los resultados serán publicados en <strong className="text-white">tusorteolegal.cl</strong> y comunicados directamente al ganador por correo electrónico y WhatsApp.</li>
            </ol>
          </section>

          {/* 8. Compra de boletos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Forma de Compra y Pago</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Los boletos se adquieren exclusivamente a través del sitio web <strong className="text-white">tusorteolegal.cl</strong>.</li>
              <li>El pago se procesa de forma segura a través de la plataforma <strong className="text-white">MercadoPago</strong>.</li>
              <li>Se aceptan tarjetas de crédito, tarjetas de débito y transferencia bancaria.</li>
              <li>Una vez realizado el pago, el participante recibirá un comprobante de compra en su correo electrónico con el(los) número(s) de boleto(s) asignado(s).</li>
              <li>No se aceptan devoluciones de boletos salvo en los casos expresamente señalados en estos términos.</li>
            </ol>
          </section>

          {/* 9. Entrega de premios */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Entrega de Premios</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Los ganadores serán contactados dentro de las <strong className="text-white">48 horas</strong> siguientes a la realización del sorteo.</li>
              <li>El ganador deberá acreditar su identidad presentando su cédula de identidad vigente.</li>
              <li>La entrega de los departamentos (Premios A, B y C) se realizará mediante <strong className="text-white">escritura pública de compraventa</strong> ante notario, dentro de los <strong className="text-white">60 días hábiles</strong> siguientes al sorteo.</li>
              <li>La Camioneta JAC T8 (Premio D) será entregada en las dependencias de Tu Sorteo Legal Limitada.</li>
              <li>Los gastos notariales, de inscripción en el Conservador de Bienes Raíces, impuestos de transferencia, contribuciones, seguros, patentes y todo trámite legal asociado a la transferencia de los inmuebles y del vehículo serán de <strong className="text-white">exclusivo cargo del ganador</strong>.</li>
              <li>Si el ganador no se presenta a retirar su premio dentro de los <strong className="text-white">90 días corridos</strong> siguientes a la fecha del sorteo, se entenderá que renuncia al mismo.</li>
            </ol>
          </section>

          {/* 10. Responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Limitación de Responsabilidad</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Tu Sorteo Legal Limitada no será responsable por problemas técnicos en el sitio web, interrupciones del servicio de pago o errores en las comunicaciones que escapen de su control.</li>
              <li>La empresa no se hace responsable por datos incorrectos o falsos proporcionados por los participantes.</li>
              <li>Los premios se entregarán en el estado en que se encuentren al momento del sorteo.</li>
            </ol>
          </section>

          {/* 11. Datos personales */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Protección de Datos Personales</h2>
            <p>
              Los datos personales proporcionados por los participantes serán tratados conforme a la
              <strong className="text-white"> Ley N° 19.628</strong> sobre Protección de la Vida Privada y se utilizarán
              exclusivamente para:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Gestión del sorteo y asignación de boletos.</li>
              <li>Comunicación de resultados.</li>
              <li>Entrega de premios.</li>
              <li>Cumplimiento de obligaciones legales y tributarias.</li>
            </ul>
            <p className="mt-2">
              Tu Sorteo Legal Limitada se compromete a no vender, ceder ni compartir los datos
              personales de los participantes con terceros no relacionados con el sorteo.
            </p>
          </section>

          {/* 12. Propiedad intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Propiedad Intelectual</h2>
            <p>
              Todo el contenido del sitio web tusorteolegal.cl, incluyendo textos, imágenes, logotipos, diseño
              y código fuente, es propiedad de Tu Sorteo Legal Limitada y está protegido por las leyes
              de propiedad intelectual vigentes en Chile. Queda prohibida su reproducción total o parcial
              sin autorización previa y por escrito.
            </p>
          </section>

          {/* 13. Modificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Modificaciones</h2>
            <p>
              Tu Sorteo Legal Limitada se reserva el derecho de modificar los presentes términos y condiciones
              en cualquier momento, previa comunicación a los participantes a través del sitio web y/o correo
              electrónico. Las modificaciones entrarán en vigencia desde su publicación.
            </p>
          </section>

          {/* 14. Aceptación */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Aceptación</h2>
            <p>
              La compra de uno o más boletos implica la <strong className="text-white">aceptación íntegra e incondicional</strong> de
              los presentes términos y condiciones, así como de las bases legales publicadas en
              la sección correspondiente del sitio web.
            </p>
          </section>

          {/* 15. Legislación aplicable */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Los presentes términos y condiciones se rigen por las leyes de la República de Chile.
              Cualquier controversia que surja en relación con el sorteo será sometida a la jurisdicción
              de los tribunales ordinarios de justicia de la ciudad de Santiago.
            </p>
          </section>

          {/* 16. Resolución de controversias */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Resolución de Controversias</h2>
            <p>
              Cualquier situación no prevista en los presentes términos y condiciones será resuelta por
              Tu Sorteo Legal Limitada en conjunto con el notario público certificador del sorteo,
              cuya decisión será inapelable.
            </p>
          </section>

          {/* 17. Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Contacto</h2>
            <p className="mb-3">
              Para consultas, reclamos o solicitudes relacionadas con el sorteo o estos términos
              y condiciones, los participantes pueden comunicarse a través de:
            </p>
            <ul className="space-y-2">
              <li>Email: <strong className="text-white">contacto@tusorteolegal.cl</strong></li>
              <li>WhatsApp: <a href="https://wa.me/56956693126" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:text-orange-400 transition-colors">+569 5669 3126</a></li>
              <li>Sitio web: <strong className="text-white">tusorteolegal.cl</strong></li>
              <li>Domicilio: <strong className="text-white">Los Adobes 1823, Maipú, Región Metropolitana</strong></li>
            </ul>
          </section>

          {/* Fecha */}
          <section className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm text-center">
              Última actualización: Marzo de 2026
            </p>
            <div className="mt-4 text-center">
              <Link
                href="/bases-legales"
                className="text-primary-orange hover:text-orange-400 transition-colors font-medium"
              >
                Ver también: Bases Legales del Sorteo &rarr;
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
