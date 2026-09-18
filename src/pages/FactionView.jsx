import React, { useState } from 'react';
import { faccoes } from '../data/worldData';
import PageLayout from '../components/PageLayout';
import NpcCard from '../components/NpcCard';

export default function FactionView() {
  const [activeFactionId, setActiveFactionId] = useState(faccoes[0].id);
  const faccaoAtiva = faccoes.find(f => f.id === activeFactionId);

  return (
    <PageLayout title="Facções e Organizações Menores">
      {/* Menu Reativo de Facções (Responsivo com flex-wrap) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {faccoes.map((faccao) => (
          <button 
            key={faccao.id}
            className={`px-4 py-2 font-serif font-bold text-sm border transition-all rounded-sm ${
              activeFactionId === faccao.id
                ? 'bg-dd-red text-parchment border-dd-gold shadow-sm'
                : 'bg-parchment-dark text-dd-red border-dd-red-light/40 hover:bg-dd-red/10'
            }`}
            onClick={() => setActiveFactionId(faccao.id)}
          >
            {faccao.nome}
          </button>
        ))}
      </div>

      {/* Conteúdo da Facção Ativa */}
      <div className="animate-fadeIn space-y-6 bg-white/40 p-4 md:p-6 border border-dd-gold rounded-sm shadow-md">
        <h3 className="text-2xl font-serif text-dd-red font-bold">
          {faccaoAtiva.nome}
        </h3>
        
        {faccaoAtiva.imagem && (
          <div className="overflow-hidden rounded border-2 border-dd-gold shadow-sm">
            <img 
              src={faccaoAtiva.imagem} 
              alt={faccaoAtiva.nome}
              className="w-full h-48 md:h-[300px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <p className="text-lg leading-relaxed text-gray-800 text-justify whitespace-pre-line">
          {faccaoAtiva.descricao}
        </p>
        
        {/* Renderização Condicional de NPCs */}
        {faccaoAtiva.npcs && faccaoAtiva.npcs.length > 0 && (
          <div className="mt-8 pt-6 border-t border-dd-red/30">
            <h3 className="text-xl font-serif text-text-dark font-bold mb-4 border-b border-dd-red pb-2">
              Figuras Notáveis
            </h3>
            <div className="space-y-4">
              {faccaoAtiva.npcs.map((npc, idx) => (
                <NpcCard key={idx} npc={npc} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}