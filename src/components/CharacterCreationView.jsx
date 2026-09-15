import React from 'react';
import PageLayout from '../components/PageLayout';
import { characterCreationData } from '../data/characterCreationData';

export default function CharacterCreationView() {
  const data = characterCreationData;

  return (
    <PageLayout title={`${data.title}`}>
      <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
        
        {/* Introdução / Parágrafos */}
        {data.introParagraphs && data.introParagraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}

        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '30px', color: '#554215' }}>
          Passo a Passo para Criar seu Herói
        </h3>
        
        <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#555' }}>
          {data.stepsIntro}
        </p>

        {/* Lista de Passos Formatada */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          {data.steps && data.steps.map((step) => (
            <div key={step.number} style={{ display: 'flex', gap: '15px', background: 'rgba(0,0,0,0.02)', padding: '15px', borderLeft: '4px solid var(--dd-gold)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8c7833', minWidth: '35px', textAlign: 'center' }}>
                {step.number}
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{step.title}</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}