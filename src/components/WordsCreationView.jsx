import React, { useState } from 'react';
import { wordsData } from '../data/wordsData';

export default function WordsCreationView() {
  const [selectedWordId, setSelectedWordId] = useState(null);

  // Encontra a palavra selecionada atualmente, se houver
  const selectedWord = wordsData.find((w) => w.id === selectedWordId);

  return (
    <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
      
      {/* Se nenhuma palavra estiver selecionada, exibe a lista/catálogo */}
      {!selectedWord ? (
        <div>
          <h2 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', color: 'var(--dd-red)', marginTop: 0 }}>
            As Palavras da Criação
          </h2>
          <p style={{ marginBottom: '20px' }}>
            As Palavras da Criação são os blocos fundamentais de construção da realidade, os fragmentos rugosos e primordiais da própria linguagem com a qual os deuses arquitetaram o mundo. Selecione uma Palavra abaixo para examinar sua natureza e suas dádivas refinadas.
          </p>

          {/* Grade de Palavras */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginTop: '20px' }}>
            {wordsData.map((word) => (
              <div 
                key={word.id} 
                onClick={() => setSelectedWordId(word.id)}
                style={{
                  background: 'rgba(245, 239, 224, 0.7)',
                  border: '1px solid var(--dd-gold)',
                  borderRadius: '4px',
                  padding: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245, 239, 224, 1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(245, 239, 224, 0.7)'}
              >
                <h3 style={{ color: 'var(--dd-red)', fontSize: '1.1rem', margin: '0 0 6px 0' }}>
                  {word.name}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
                  {word.shortDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Se uma palavra estiver selecionada, exibe os detalhes dela e seus Gifts */
        <div>
          {/* Botão de Voltar */}
          <button 
            onClick={() => setSelectedWordId(null)}
            style={{
              background: 'var(--dd-red)',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginBottom: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}
          >
            ← Voltar para a Lista de Palavras
          </button>

          {/* Título e Descrição da Palavra */}
          <h2 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', color: 'var(--dd-red)', marginTop: 0 }}>
            {selectedWord.name}
          </h2>
          <p style={{ marginBottom: '25px', fontSize: '1.05rem' }}>
            {selectedWord.description}
          </p>

          <h3 style={{ color: '#554215', fontSize: '1.2rem', marginBottom: '15px', borderBottom: '1px solid rgba(212, 175, 55, 0.4)', paddingBottom: '4px' }}>
            Dádivas da Palavra
          </h3>

          {/* Lista de Dádivas */}
          {selectedWord.gifts && selectedWord.gifts.length > 0 ? (
            <div>
              {selectedWord.gifts.map((gift, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: 'var(--dd-red)', fontSize: '1rem', margin: '0 0 6px 0' }}>
                    {gift.name} <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'normal' }}>({gift.type})</span>
                  </h4>
                  <p style={{ margin: 0 }}>
                    {gift.content}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontStyle: 'italic', color: '#666' }}>
              Nenhuma dádiva cadastrada para esta Palavra ainda. Conforme avançarmos nos textos, preencheremos esta seção!
            </p>
          )}
        </div>
      )}

    </div>
  );
}