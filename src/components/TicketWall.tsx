const TICKETS = [
  { nombre: 'J*** P***', sorteo: 'Sorteo A', tiempo: 'hace 2 min' },
  { nombre: 'S*** D***', sorteo: 'Sorteo B', tiempo: 'hace 15 min' },
  { nombre: 'M*** G***', sorteo: 'Sorteo C', tiempo: 'hace 1 hora' },
  { nombre: 'C*** R***', sorteo: 'Sorteo D', tiempo: 'hace 2 horas' },
  { nombre: 'A*** M***', sorteo: 'Sorteo A', tiempo: 'hace 3 horas' },
  { nombre: 'P*** V***', sorteo: 'Sorteo B', tiempo: 'hace 4 horas' },
  { nombre: 'R*** L***', sorteo: 'Sorteo C', tiempo: 'hace 5 horas' },
];

export default function TicketWall() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
            Últimos tickets vendidos
          </span>
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {TICKETS.map((t, i) => (
            <div
              key={i}
              className="min-w-[200px] bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 flex-shrink-0 hover:border-primary-orange/50 transition-colors"
            >
              <p className="text-white font-bold mb-1">{t.nombre}</p>
              <p className="text-primary-orange text-sm mb-1">{t.sorteo}</p>
              <p className="text-gray-500 text-xs">{t.tiempo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
