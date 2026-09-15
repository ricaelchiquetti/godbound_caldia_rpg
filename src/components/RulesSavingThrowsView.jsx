import React from 'react';
import { savingThrowsData } from '../data/savingThrowsData';

export default function RulesSavingThrowsView() {
  const data = savingThrowsData;

  return (
    <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
      
      {/* Título da Seção */}
      <h2 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', color: 'var(--dd-red)', marginTop: 0 }}>
        {data.title}
      </h2>
      <p style={{ fontStyle: 'italic', color: '#554215', marginBottom: '20px' }}>
        {data.subtitle}
      </p>

      {/* Introdução com Letra Capitular */}
      <p className="drop-cap">
        {data.intro}
      </p>

      {/* Seções Dinâmicas */}
      {data.sections.map((sec, index) => (
        <div key={index} style={{ marginTop: '25px' }}>
          <h3 style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.5)', paddingBottom: '6px', color: '#554215', fontSize: '1.15rem' }}>
            {sec.heading}
          </h3>
          {sec.content.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
        </div>
      ))}

    </div>
  );
}