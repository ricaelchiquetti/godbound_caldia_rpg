import React, { useState } from 'react';
import { faccoes } from '../data/worldData';
import PageLayout from '../components/PageLayout';
import NpcCard from '../components/NpcCard';

export default function FactionView() {
  const [activeFactionId, setActiveFactionId] = useState(faccoes[0].id);
  const faccaoAtiva = faccoes.find(f => f.id === activeFactionId);

  return (
    <PageLayout title="Facções e Organizações Menores">
      {/* Menu Reativo de Facções */}
      <div className="city-nav">
        {faccoes.map((faccao) => (
          <button 
            key={faccao.id}
            className={`city-tab ${activeFactionId === faccao.id ? 'active' : ''}`}
            onClick={() => setActiveFactionId(faccao.id)}
          >
            {faccao.nome}
          </button>
        ))}
      </div>

      {/* Conteúdo da Facção Ativa */}
      <div className="city-content">
        <h3>{faccaoAtiva.nome}</h3>
        
        {faccaoAtiva.imagem && (
          <img 
            src={faccaoAtiva.imagem} 
            alt={faccaoAtiva.nome}            
          />
        )}
        
        <p style={{ fontSize: '1.1em', marginBottom: '20px', whiteSpace: 'pre-line' }}>
          {faccaoAtiva.descricao}
        </p>
        
        {/* Renderização Condicional de NPCs */}
        {faccaoAtiva.npcs.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#231f20', borderBottom: '1px solid var(--dd-red)' }}>Figuras Notáveis</h3>
            {faccaoAtiva.npcs.map((npc, idx) => (
              <NpcCard key={idx} npc={npc} />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}