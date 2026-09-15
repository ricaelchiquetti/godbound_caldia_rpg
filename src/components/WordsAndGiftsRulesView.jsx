import React from 'react';
import PageLayout from '../components/PageLayout';
import { wordsAndGiftsRulesData } from '../data/wordsAndGiftsRulesData';

export default function WordsAndGiftsRulesView() {
  const data = wordsAndGiftsRulesData;

  return (
    <PageLayout title={`${data.title}`}>
      <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
        
        {/* Introdução das Palavras */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', color: '#554215' }}>
          Escolhendo Palavras (Choosing Words)
        </h3>
        {data.wordsIntro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* Introdução das Dádivas */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          Escolhendo Dádivas (Choosing Gifts)
        </h3>
        {data.giftsIntro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* Lista de Palavras de Criação */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          As Palavras de Criação (The Words of Creation)
        </h3>
        <p style={{ fontStyle: 'italic', color: '#555' }}>
          Lista de portfólios divinos disponíveis para escolha:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginTop: '20px' }}>
          {data.wordsList.map((word, index) => (
            <div key={index} style={{ background: 'rgba(0,0,0,0.02)', padding: '15px', borderLeft: '4px solid var(--dd-gold)' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{word.name}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{word.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}