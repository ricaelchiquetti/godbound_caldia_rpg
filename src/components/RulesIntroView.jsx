import React from 'react';
import PageLayout from '../components/PageLayout';
import { rulesIntroData } from '../data/rulesIntroData';

export default function RulesIntroView() {
  const data = rulesIntroData;

  return (
    <PageLayout title={`${data.title}`}>
      <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
        
        {/* Introdução Principal */}
        <p className="drop-cap">
          Godbound é um jogo tradicional da velha guarda em muitos aspectos. Leitores experientes reconhecerão rapidamente quase todos os conceitos mecânicos. Uma página de referência rápida está disponível na página 23 para consultas na mesa. Jogadores experientes de sistemas antigos devem ler a seção de combate com atenção redobrada devido ao sistema único de cálculo de dano.
        </p>

        {/* Seções Dinâmicas */}
        {data.sections.map((sec, index) => (
          <div key={index} style={{ marginTop: '30px' }}>
            <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '6px', color: '#554215' }}>
              {sec.heading}
            </h3>
            {sec.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        ))}

      </div>
    </PageLayout>
  );
}