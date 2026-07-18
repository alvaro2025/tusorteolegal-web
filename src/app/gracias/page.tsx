export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 flex items-center justify-center px-6">
      <section className="w-full max-w-xl rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
        <div className="space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600">
            Pago confirmado
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Gracias por tu compra
          </h1>
          <p className="text-base leading-7 text-zinc-600">
            Te enviamos un correo con la confirmación de tu compra y el número de tu ticket.
          </p>
        </div>
        <div className="mt-8 rounded-2xl bg-white p-5 text-sm leading-6 text-zinc-700 ring-1 ring-zinc-200">
          <p className="font-medium text-zinc-950">Importante</p>
          <p className="mt-2">
            Revisa tu correo, incluyendo la carpeta de spam, para ver la confirmación de tu ticket.
          </p>
        </div>
      </section>
    </main>
  );
}
