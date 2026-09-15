import React, { useState } from 'react';
import { cidades } from '../data/worldData';
import PageLayout from '../components/PageLayout';
import NpcCard from '../components/NpcCard';

export default function CityView() {
  const [activeCityId, setActiveCityId] = useState(cidades[0].id);
  const cidadeAtiva = cidades.find(c => c.id === activeCityId);

  return (
    <PageLayout title="Nações e Territórios">
      {/* Menu Reativo de Cidades */}
      <div className="city-nav">
        {cidades.map((cidade) => (
          <button 
            key={cidade.id}
            className={`city-tab ${activeCityId === cidade.id ? 'active' : ''}`}
            onClick={() => setActiveCityId(cidade.id)}
          >
            {cidade.nome}
          </button>
        ))}
      </div>

      {/* Conteúdo da Cidade Ativa */}
      <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
        <h3>{cidadeAtiva.nome}</h3>
        
        {cidadeAtiva.imagem && (
          <img 
            src={cidadeAtiva.imagem} 
            alt={cidadeAtiva.nome} 
            style={{ width: '100%', height: '300px', objectFit: 'cover', border: '2px solid var(--dd-gold)', marginBottom: '20px' }}
          />
        )}
        
        <p style={{ fontSize: '1.1em', marginBottom: '20px', whiteSpace: 'pre-line' }}>
          {cidadeAtiva.descricao}
        </p>
        
        <ul>
          {cidadeAtiva.detalhes.map((detalhe, idx) => (
            <li key={idx} style={{ marginBottom: '10px' }}>{detalhe}</li>
          ))}
        </ul>

        {/* Renderização Condicional de NPCs */}
        {cidadeAtiva.npcs.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#231f20', borderBottom: '1px solid var(--dd-red)' }}>Figuras Notáveis</h3>
            {cidadeAtiva.npcs.map((npc, idx) => (
              <NpcCard key={idx} npc={npc} />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}