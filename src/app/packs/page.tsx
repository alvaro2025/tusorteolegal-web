'use client';

import { useState } from 'react';

const PACKS = [
  { id: 'individual', nombre: '1 Ticket', precio: 5000, precioTachado: null, ahorro: null, porTicket: '$5.000 c/u', hospital: '$2.500', popular: false },
  { id: 'triple', nombre: 'Pack 3 Tickets', precio: 14000, precioTachado: 15000, ahorro: '$1.000', porTicket: '$4.667 c/u', hospital: '$7.000', popular: false },
  { id: 'cinco', nombre: 'Pack 5 Tickets', precio: 23000, precioTachado: 25000, ahorro: '$2.000', porTicket: '$4.600 c/u', hospital: '$11.500', popular: true },
  { id: 'decena', nombre: 'Pack 10 Tickets', precio: 45000, precioTachado: 50000, ahorro: '$5.000', porTicket: '$4.500 c/u', hospital: '$22.500', popular: false },
];

const SORTEOS = [
  { id: 'A', label: 'Sorteo A - Departamento' },
  { id: 'B', label: 'Sorteo B - Departamento' },
  { id: 'C', label: 'Sorteo C - Departamento' },
  { id: 'D', label: 'Sorteo D - Camioneta' },
];

export default function PacksPage() {
  const [sorteoSeleccionado, setSorteoSeleccionado] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleComprar = async (packId: string) => {
    if (!sorteoSeleccionado) return;
    setLoading(true);
    try {
      const res = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pack_tipo: packId, sorteo: sorteoSeleccionado }),
      });
      const data = await res.json();
      if (data.init_point) window.location.href = data.init_point;
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  return (
    <main style={{ backgroundColor: '#1A1A1A', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#D4AF37', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Elige tu Pack</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Mientras mas tickets, mas chances de ganar</p>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#fff', marginBottom: '12px', fontWeight: 'bold' }}>En que sorteo quieres participar?</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {SORTEOS.map((s) => (
              <button key={s.id} onClick={() => setSorteoSeleccionado(s.id)} style={{ padding: '10px 20px', borderRadius: '8px', border: sorteoSeleccionado === s.id ? '2px solid #D4AF37' : '2px solid #444', backgroundColor: sorteoSeleccionado === s.id ? '#D4AF37' : '#2A2A2A', color: sorteoSeleccionado === s.id ? '#1A1A1A' : '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {PACKS.map((pack) => (
            <div key={pack.id} style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', border: pack.popular ? '2px solid #D4AF37' : '1px solid #3A3A3A', padding: '28px 24px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {pack.popular && <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#D4AF37', color: '#1A1A1A', fontWeight: 'bold', fontSize: '0.75rem', padding: '4px 16px', borderRadius: '99px' }}>MAS POPULAR</div>}
              <h2 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 'bold' }}>{pack.nombre}</h2>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '2rem', fontWeight: 'bold' }}>${pack.precio.toLocaleString('es-CL')}</span>
                {pack.precioTachado && <span style={{ color: '#888', textDecoration: 'line-through', marginLeft: '8px' }}>${pack.precioTachado.toLocaleString('es-CL')}</span>}
              </div>
              {pack.ahorro && <span style={{ backgroundColor: '#2d4a2d', color: '#4CAF50', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 'bold', width: 'fit-content' }}>Ahorras {pack.ahorro}</span>}
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{pack.porTicket}</p>
              <span style={{ backgroundColor: '#1a2a3a', color: '#60a5fa', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem', width: 'fit-content' }}>50% al Hospital ({pack.hospital})</span>
              <button onClick={() => handleComprar(pack.id)} disabled={loading || !sorteoSeleccionado} style={{ marginTop: 'auto', backgroundColor: sorteoSeleccionado ? '#D4AF37' : '#555', color: '#1A1A1A', fontWeight: 'bold', padding: '12px', borderRadius: '8px', border: 'none', cursor: sorteoSeleccionado ? 'pointer' : 'not-allowed', fontSize: '1rem' }}>
                {sorteoSeleccionado ? (pack.id === 'individual' ? 'Comprar' : 'Comprar Pack') : 'Selecciona un sorteo'}
              </button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', color: '#aaa' }}>
          <p style={{ marginBottom: '8px' }}>El 50% de cada ticket va directo al Hospital de Mascotas</p>
          <p style={{ marginBottom: '8px' }}><a href="https://chag.cl" target="_blank" style={{ color: '#D4AF37' }}>Conoce el hospital - chag.cl</a></p>
          <p>El sorteo se realiza al completar 50.000 tickets</p>
        </div>
      </div>
    </main>
  );
}