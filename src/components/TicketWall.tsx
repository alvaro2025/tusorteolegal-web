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
    <section style={{ backgroundColor: '#111', padding: '40px 16px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          🎟️ Últimos tickets vendidos
        </h2>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '12px' }}>
          {TICKETS.map((t, i) => (
            <div key={i} style={{ minWidth: '200px', backgroundColor: '#2A2A2A', border: '1px solid #3A3A3A', borderRadius: '12px', padding: '16px', flexShrink: 0 }}>
              <p style={{ color: '#fff', fontWeight: 'bold', marginBottom: '4px' }}>{t.nombre}</p>
              <p style={{ color: '#D4AF37', fontSize: '0.85rem', marginBottom: '4px' }}>{t.sorteo}</p>
              <p style={{ color: '#888', fontSize: '0.8rem' }}>{t.tiempo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
