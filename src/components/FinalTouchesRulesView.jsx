import React from 'react';
import PageLayout from '../components/PageLayout';
import { finalTouchesRulesData } from '../data/finalTouchesRulesData';

export default function FinalTouchesRulesView() {
  const data = finalTouchesRulesData;

  return (
    <PageLayout title={`${data.title}`}>
      <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
        
        {/* Introdução dos Toques Finais */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', color: '#554215' }}>
          Toques Finais (Final Touches)
        </h3>
        {data.touchesIntro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* Lista de Atributos Finais */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
          {data.touchesList.map((item, index) => (
            <div key={index} style={{ background: 'rgba(0,0,0,0.02)', padding: '15px', borderLeft: '4px solid var(--dd-gold)' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Escolhendo um Objetivo */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          Escolhendo um Objetivo (Choosing a Goal)
        </h3>
        {data.goalIntro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

      </div>
    </PageLayout>
  );
}