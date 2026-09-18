import React, { useState } from 'react';
import { cidades } from '../data/worldData';
import PageLayout from '../components/PageLayout';
import NpcCard from '../components/NpcCard';

export default function CityView() {
  const [activeCityId, setActiveCityId] = useState(cidades[0].id);
  const cidadeAtiva = cidades.find(c => c.id === activeCityId);

  return (
    <PageLayout title="Nações e Territórios">
      {/* Menu Reativo de Cidades (Adaptado para Mobile First com flex-wrap) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cidades.map((cidade) => (
          <button 
            key={cidade.id}
            className={`px-4 py-2 font-serif font-bold text-sm border transition-all rounded-sm ${
              activeCityId === cidade.id
                ? 'bg-dd-red text-parchment border-dd-gold shadow-sm'
                : 'bg-parchment-dark text-dd-red border-dd-red-light/40 hover:bg-dd-red/10'
            }`}
            onClick={() => setActiveCityId(cidade.id)}
          >
            {cidade.nome}
          </button>
        ))}
      </div>

      {/* Conteúdo da Cidade Ativa com animação suave */}
      <div className="animate-fadeIn space-y-6 bg-white/40 p-4 md:p-6 border border-dd-gold rounded-sm shadow-md">
        <h3 className="text-2xl font-serif text-dd-red font-bold">
          {cidadeAtiva.nome}
        </h3>
        
        {cidadeAtiva.imagem && (
          <div className="overflow-hidden rounded border-2 border-dd-gold shadow-sm">
            <img 
              src={cidadeAtiva.imagem} 
              alt={cidadeAtiva.nome} 
              className="w-full h-48 md:h-[300px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <p className="text-lg leading-relaxed text-gray-800 text-justify whitespace-pre-line">
          {cidadeAtiva.descricao}
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {cidadeAtiva.detalhes.map((detalhe, idx) => (
            <li key={idx} className="leading-relaxed">
              {detalhe}
            </li>
          ))}
        </ul>

        {/* Renderização Condicional de NPCs */}
        {cidadeAtiva.npcs.length > 0 && (
          <div className="mt-8 pt-6 border-t border-dd-red/30">
            <h3 className="text-xl font-serif text-text-dark font-bold mb-4 border-b border-dd-red pb-2">
              Figuras Notáveis
            </h3>
            <div className="space-y-4">
              {cidadeAtiva.npcs.map((npc, idx) => (
                <NpcCard key={idx} npc={npc} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}