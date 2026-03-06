import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Tu Sorteo Legal Limitada. Cómo recopilamos, usamos y protegemos tus datos personales en el marco del sorteo legal.',
  alternates: {
    canonical: 'https://tusorteolegal.cl/privacidad',
  },
}

export default function Privacidad() {
  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
            Política de Privacidad
          </span>
        </h1>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-8 text-gray-300">

          {/* 1. Responsable */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Responsable del Tratamiento de Datos</h2>
            <div className="space-y-2">
              <p>Razón social: <strong className="text-white">Tu Sorteo Legal Limitada</strong></p>
              <p>RUT: <strong className="text-white">78.114.381-2</strong></p>
              <p>Domicilio legal: <strong className="text-white">Los Adobes 1823, comuna de Maipú, Región Metropolitana, Chile</strong></p>
              <p>Representantes legales:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong className="text-white">Sandra Evelyn Díaz Cifuentes</strong>, RUT 11.605.873-1, domicilio Los Adobes 1823, Maipú, RM</li>
                <li><strong className="text-white">Álvaro Rodrigo Donoso Díaz</strong>, RUT 14.156.552-4, domicilio Los Adobes 1823, Maipú, RM</li>
              </ul>
              <p>Notaría de constitución: <strong className="text-white">Notaría N°42 de Santiago, Notario Álvaro González Salinas</strong></p>
              <p>Giro: <strong className="text-white">Organización de sorteos legales con certificación notarial</strong></p>
              <p>Email: <strong className="text-white">contacto@tusorteolegal.cl</strong></p>
              <p>Teléfono: <strong className="text-white">+569 5669 3126</strong></p>
              <p>Sitio web: <strong className="text-white">https://tusorteolegal.cl</strong></p>
            </div>
          </section>

          {/* 2. Datos recopilados */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Datos Personales que Recopilamos</h2>
            <p className="mb-3">Al comprar un boleto o interactuar con nuestros servicios, recopilamos los siguientes datos:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong className="text-white">Identificación:</strong> nombre completo y RUT (Rol Único Tributario), obligatorios para validar la participación y gestionar la entrega de premios.</li>
              <li><strong className="text-white">Datos de contacto:</strong> dirección de correo electrónico y número de teléfono, para comunicar resultados y gestionar consultas.</li>
              <li><strong className="text-white">Dirección:</strong> domicilio, para cumplimiento notarial y eventual entrega de premios.</li>
              <li><strong className="text-white">Datos de pago:</strong> información de tarjeta de crédito o débito procesada de forma segura a través de MercadoPago; Tu Sorteo Legal Limitada no almacena datos completos de tarjetas.</li>
              <li><strong className="text-white">Número de boleto/pedido:</strong> asignado automáticamente al momento de la compra y vinculado a tus datos para el sorteo.</li>
              <li><strong className="text-white">Datos de navegación:</strong> dirección IP, tipo de navegador y páginas visitadas, recopilados de forma anónima mediante cookies.</li>
            </ul>
          </section>

          {/* 3. Finalidad */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Finalidad del Tratamiento</h2>
            <p className="mb-3">Tus datos personales son tratados para las siguientes finalidades:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Procesar la venta de boletos y emitir comprobantes de compra.</li>
              <li>Gestionar el sorteo legal y asignar números de boleto únicos a cada participante.</li>
              <li>Identificar y contactar a los ganadores dentro de las 48 horas siguientes al sorteo.</li>
              <li>Procesar pagos de forma segura a través de MercadoPago.</li>
              <li>Enviar comunicaciones relacionadas con el sorteo (confirmación de compra, resultados, información de premios).</li>
              <li>Cumplir con obligaciones notariales de certificación del sorteo ante la Notaría N°42 de Santiago.</li>
              <li>Publicar el nombre de los ganadores en el sitio web tusorteolegal.cl y redes sociales, conforme a los Términos y Condiciones aceptados al comprar el boleto.</li>
              <li>Cumplir con obligaciones legales, tributarias y contables aplicables.</li>
              <li>Mejorar la experiencia de usuario en el sitio web.</li>
            </ul>
          </section>

          {/* 4. Base legal */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Base Legal del Tratamiento</h2>
            <p className="mb-3">
              El tratamiento de datos se realiza conforme a la <strong className="text-white">Ley N° 19.628 sobre Protección de la Vida Privada</strong> de la República de Chile y sus modificaciones vigentes.
            </p>
            <p>
              La base de licitud principal es el <strong className="text-white">consentimiento del titular</strong>, otorgado al aceptar los Términos y Condiciones al momento de la compra del boleto. Adicionalmente, el tratamiento es necesario para la ejecución del contrato de participación en el sorteo y para el cumplimiento de obligaciones legales del organizador.
            </p>
          </section>

          {/* 5. WhatsApp */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Comunicaciones por WhatsApp</h2>
            <p className="mb-3">
              Tu Sorteo Legal Limitada puede utilizar <strong className="text-white">WhatsApp</strong> para contactar a los ganadores del sorteo, informar resultados y responder consultas de participantes. El número de contacto es <strong className="text-white">+569 5669 3126</strong>.
            </p>
            <p>
              Las comunicaciones por WhatsApp son de carácter informativo y vinculadas exclusivamente al sorteo. Si no deseas ser contactado por este medio, puedes indicarlo respondiendo al número mencionado o escribiéndonos a <strong className="text-white">contacto@tusorteolegal.cl</strong>.
            </p>
          </section>

          {/* 6. Publicación de ganadores */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Publicación de Datos de Ganadores</h2>
            <p>
              Conforme a los Términos y Condiciones aceptados al momento de la compra, Tu Sorteo Legal Limitada podrá publicar el nombre completo de los ganadores y fotografías o registros audiovisuales de la entrega de premios en el sitio web <strong className="text-white">tusorteolegal.cl</strong> y en redes sociales, con fines de transparencia y difusión del sorteo. El ganador consiente expresamente esta publicación al aceptar los Términos y Condiciones.
            </p>
          </section>

          {/* 7. Compartición con terceros */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Compartición de Datos con Terceros</h2>
            <p className="mb-3">Tu Sorteo Legal Limitada <strong className="text-white">no vende ni comercializa</strong> datos personales. Únicamente los comparte con:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong className="text-white">MercadoPago:</strong> procesador de pago, para gestionar transacciones de forma segura.</li>
              <li><strong className="text-white">Proveedor de hosting:</strong> para alojar el sitio web y garantizar su funcionamiento.</li>
              <li><strong className="text-white">Notario Público (Notaría N°42 de Santiago):</strong> datos necesarios para la certificación legal del sorteo.</li>
              <li><strong className="text-white">Autoridades competentes:</strong> cuando sea requerido por ley, resolución judicial o entidad regulatoria.</li>
            </ul>
          </section>

          {/* 8. Seguridad */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Seguridad de los Datos</h2>
            <p className="mb-3">
              Implementamos medidas técnicas y organizativas para proteger tus datos:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Cifrado SSL en todas las transacciones del sitio web.</li>
              <li>Procesamiento de pagos a través de MercadoPago, que cumple con estándares PCI DSS.</li>
              <li>Acceso restringido a los datos al personal autorizado únicamente.</li>
              <li>Revisión periódica de sistemas y procedimientos de seguridad.</li>
            </ul>
          </section>

          {/* 9. Conservación */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Conservación de los Datos</h2>
            <p>
              Los datos personales se conservarán durante el período del sorteo, sus posibles prórrogas y el tiempo adicional necesario para cumplir con obligaciones tributarias y legales chilenas (generalmente hasta 6 años). Los datos de los ganadores podrán conservarse con fines de transparencia y defensa legal por el período que la normativa exija.
            </p>
          </section>

          {/* 10. Derechos ARCO */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Tus Derechos (ARCO)</h2>
            <p className="mb-3">Conforme a la Ley N° 19.628, tienes derecho a:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong className="text-white">Acceso:</strong> conocer qué datos personales tuyos conservamos y cómo los tratamos.</li>
              <li><strong className="text-white">Rectificación:</strong> solicitar la corrección de datos incorrectos o desactualizados.</li>
              <li><strong className="text-white">Cancelación:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios, salvo que su conservación sea exigida por ley.</li>
              <li><strong className="text-white">Oposición:</strong> oponerte al tratamiento de tus datos para finalidades específicas, como comunicaciones comerciales.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, escríbenos a <strong className="text-white">contacto@tusorteolegal.cl</strong> con tu nombre completo, RUT y la solicitud específica. Responderemos en un plazo máximo de 30 días hábiles.
            </p>
          </section>

          {/* 11. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Cookies y Tecnologías de Seguimiento</h2>
            <p className="mb-3">
              El sitio tusorteolegal.cl utiliza cookies propias y de terceros para mejorar la experiencia de navegación y obtener estadísticas de uso anónimas. Las cookies son pequeños archivos de texto almacenados en tu dispositivo.
            </p>
            <p>
              Puedes configurar tu navegador para rechazar o eliminar las cookies. Ten en cuenta que deshabilitar las cookies puede afectar el funcionamiento del proceso de compra de boletos.
            </p>
          </section>

          {/* 12. Derecho a retracto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Derecho a Retracto</h2>
            <p>
              Conforme a los Términos y Condiciones del sorteo, <strong className="text-white">el derecho a retracto no aplica</strong> a la compra de boletos de sorteo, dada la naturaleza del servicio y el inicio inmediato de la asignación de boletos. Una vez procesado el pago y asignado el número de boleto, la compra no es reversible, salvo en los casos de no realización del sorteo por no alcanzarse el mínimo de boletos vendidos, en cuyo caso se procederá al reembolso total.
            </p>
          </section>

          {/* 13. Modificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Modificaciones a Esta Política</h2>
            <p>
              Tu Sorteo Legal Limitada se reserva el derecho de actualizar esta Política de Privacidad. Las modificaciones serán publicadas en esta página con la fecha de actualización. Te recomendamos revisarla periódicamente. El uso continuado del sitio web tras la publicación de cambios implica la aceptación de la política actualizada.
            </p>
          </section>

          {/* 14. Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Contacto</h2>
            <p className="mb-3">Para consultas o solicitudes relacionadas con esta Política de Privacidad:</p>
            <ul className="space-y-2">
              <li>Email: <strong className="text-white">contacto@tusorteolegal.cl</strong></li>
              <li>WhatsApp: <a href="https://wa.me/56956693126" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:text-orange-400 transition-colors">+569 5669 3126</a></li>
              <li>Sitio web: <strong className="text-white">tusorteolegal.cl</strong></li>
              <li>Domicilio: <strong className="text-white">Los Adobes 1823, Maipú, Región Metropolitana, Chile</strong></li>
            </ul>
          </section>

          {/* Fecha */}
          <section className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm text-center">
              Última actualización: 6 de marzo de 2026
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
