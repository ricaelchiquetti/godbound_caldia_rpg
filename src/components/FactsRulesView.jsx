import React from 'react';
import PageLayout from '../components/PageLayout';
import { factsRulesData } from '../data/factsRulesData';

export default function FactsRulesView() {
  const data = factsRulesData;

  return (
    <PageLayout title={`${data.title}`}>
      <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
        
        {/* Introdução */}
        {data.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* Lista dos 3 Fatos Obrigatórios */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '30px', color: '#554215' }}>
          Os Três Fatos Essenciais
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          {data.factsList.map((fact, index) => (
            <div key={index} style={{ background: 'rgba(0,0,0,0.02)', padding: '15px', borderLeft: '4px solid var(--dd-gold)' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#8c7833', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {fact.number}
              </span>
              <h4 style={{ margin: '3px 0 8px 0', color: '#333' }}>{fact.title}</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>{fact.desc}</p>
            </div>
          ))}
        </div>

        {/* Despertar e Baixa Magia */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          Despertar e Conhecimentos Especiais
        </h3>
        
        {data.awakeningAndMagic.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

      </div>
    </PageLayout>
  );
}