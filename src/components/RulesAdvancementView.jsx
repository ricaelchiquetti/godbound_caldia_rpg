import React from 'react';
import { advancementData } from '../data/advancementData';

export default function RulesAdvancementView() {
  const data = advancementData;

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

      {/* Tabela de Níveis e Experiência */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#554215', fontSize: '1.1rem', marginBottom: '10px' }}>Tabela de Progressão de Nível</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--parchment-dark)', border: '1px solid var(--dd-gold)' }}>
          <thead>
            <tr style={{ background: 'var(--dd-red)', color: 'var(--parchment)' }}>
              <th style={{ padding: '8px', border: '1px solid var(--dd-gold)' }}>Nível</th>
              <th style={{ padding: '8px', border: '1px solid var(--dd-gold)' }}>Experiência Necessária</th>
              <th style={{ padding: '8px', border: '1px solid var(--dd-gold)' }}>Domínio Gasto</th>
            </tr>
          </thead>
          <tbody>
            {data.levelTable.map((row) => (
              <tr key={row.level} style={{ textAlign: 'center' }}>
                <td style={{ padding: '6px', border: '1px solid rgba(212, 175, 55, 0.4)', fontWeight: 'bold' }}>{row.level}</td>
                <td style={{ padding: '6px', border: '1px solid rgba(212, 175, 55, 0.4)' }}>{row.exp}</td>
                <td style={{ padding: '6px', border: '1px solid rgba(212, 175, 55, 0.4)' }}>{row.dominion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela de Dádivas de Apoteose */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#554215', fontSize: '1.1rem', marginBottom: '10px' }}>Dádivas de Apoteose por Nível</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--parchment-dark)', border: '1px solid var(--dd-gold)' }}>
          <thead>
            <tr style={{ background: 'var(--dd-red)', color: 'var(--parchment)' }}>
              <th style={{ padding: '8px', border: '1px solid var(--dd-gold)', width: '20%' }}>Nível</th>
              <th style={{ padding: '8px', border: '1px solid var(--dd-gold)', width: '80%' }}>Dádivas de Apoteose</th>
            </tr>
          </thead>
          <tbody>
            {data.apotheosisTable.map((row) => (
              <tr key={row.level} style={{ textAlign: 'center' }}>
                <td style={{ padding: '6px', border: '1px solid rgba(212, 175, 55, 0.4)', fontWeight: 'bold' }}>{row.level}</td>
                <td style={{ padding: '6px', border: '1px solid rgba(212, 175, 55, 0.4)', textAlign: 'left', paddingLeft: '15px' }}>{row.gifts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}