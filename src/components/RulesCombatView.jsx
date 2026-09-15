import React from 'react';
import { combatData } from '../data/combatData';

export default function RulesCombatView() {
  const data = combatData;

  return (
    <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
      
      {/* Título Principal */}
      <h2 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', color: 'var(--dd-red)', marginTop: 0 }}>
        {data.title}
      </h2>

      {/* Introdução */}
      <p style={{ marginBottom: '20px' }}>
        {data.intro}
      </p>

      {/* Seções com Título e Texto Corrido */}
      {data.sections.map((sec, index) => (
        <div key={index} style={{ marginBottom: '25px' }}>
          <h3 style={{ color: '#554215', fontSize: '1.2rem', marginBottom: '8px', borderBottom: '1px solid rgba(212, 175, 55, 0.4)', paddingBottom: '4px' }}>
            {sec.heading}
          </h3>
          <p style={{ margin: 0, marginBottom: sec.hasTable ? '12px' : '0' }}>
            {sec.content}
          </p>

          {/* Renderização condicional da Tabela */}
          {sec.hasTable && (
            <div style={{ margin: '15px 0', maxWidth: '400px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--dd-gold)', background: 'rgba(245, 239, 224, 0.6)' }}>
                <thead>
                  <tr style={{ background: 'var(--dd-red)', color: 'var(--parchment, #fff)' }}>
                    <th style={{ padding: '6px 10px', border: '1px solid var(--dd-gold)', textAlign: 'left' }}>Damage Roll</th>
                    <th style={{ padding: '6px 10px', border: '1px solid var(--dd-gold)', textAlign: 'left' }}>Damage Taken</th>
                  </tr>
                </thead>
                <tbody>
                  {sec.tableData.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td style={{ padding: '6px 10px', border: '1px solid rgba(212, 175, 55, 0.4)' }}>{row.roll}</td>
                      <td style={{ padding: '6px 10px', border: '1px solid rgba(212, 175, 55, 0.4)' }}>{row.damage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Conteúdo extra após a tabela, se houver */}
          {sec.extraContent && (
            <p style={{ margin: 0, marginTop: '12px' }}>
              {sec.extraContent}
            </p>
          )}
        </div>
      ))}

    </div>
  );
}