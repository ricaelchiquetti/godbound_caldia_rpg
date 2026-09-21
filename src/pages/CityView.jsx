import React, { useState } from 'react';
import { cities } from '../data/worldData'; 
import PageLayout from '../components/PageLayout';
import NpcCard from '../components/NpcCard';

export default function CityView() {
  const [activeCityId, setActiveCityId] = useState(cities[0]?.id);
  const cidadeAtiva = cities.find(c => c.id === activeCityId);

  if (!cidadeAtiva) return null;

  return (
    <PageLayout title="Nações e Territórios">
      {/* Menu Reativo de Cidades */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cities.map((cidade) => (
          <button 
            key={cidade.id}
            className={`px-4 py-2 font-serif font-bold text-sm border transition-all rounded-sm ${
              activeCityId === cidade.id
                ? 'bg-dd-red text-parchment border-dd-gold shadow-sm'
                : 'bg-parchment-dark text-dd-red border-dd-red-light/40 hover:bg-dd-red/10'
            }`}
            onClick={() => setActiveCityId(cidade.id)}
          >
            {cidade.name}
          </button>
        ))}
      </div>

      {/* Container Principal */}
      <div className="animate-fadeIn space-y-8 bg-white/60 p-4 md:p-8 border border-dd-gold rounded-sm shadow-md">
        
        {/* Banner com Título e Imagem */}
        <div>
          <h3 className="text-3xl md:text-4xl font-serif text-dd-red font-bold mb-4 border-b-2 border-dd-gold pb-2 tracking-wide">
            {cidadeAtiva.name}
          </h3>
          
          {cidadeAtiva.image && (
            <div className="overflow-hidden rounded border-2 border-dd-gold shadow-sm">
              <img 
                src={cidadeAtiva.image} 
                alt={cidadeAtiva.name} 
                className="w-full h-56 md:h-[340px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>

        {/* 1. História / Lore (Largura Total) */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 border-b border-dd-red/30 pb-1">
            <h4 className="text-xl font-serif text-dd-red font-bold">
              Visão Geral & História
            </h4>
          </div>
          <div className="text-base md:text-lg leading-relaxed text-gray-800 text-justify whitespace-pre-line">
            {cidadeAtiva.description}
          </div>
        </section>

        {/* 2. Painel de Fatos & Registros (Estilo Box de Suplemento) */}
        {cidadeAtiva.details && cidadeAtiva.details.length > 0 && (
          <section className="bg-parchment/50 border-2 border-dd-gold/60 p-5 md:p-6 rounded-sm shadow-inner space-y-4">
            <div className="flex items-center gap-2 border-b border-dd-gold pb-2">
              {/* Adicione seu ícone de Registros/Fatos aqui se desejar */}
              <h4 className="text-lg font-serif text-dd-red font-bold uppercase tracking-wider">
                Pontos de Destaque & Registros
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {cidadeAtiva.details.map((detalhe, idx) => {
                const temChave = detalhe.includes(':');
                const [titulo, ...resto] = temChave ? detalhe.split(':') : ['', detalhe];
                const conteudo = temChave ? resto.join(':') : detalhe;

                return (
                  <div key={idx} className="flex flex-col border-l-2 border-dd-red/40 pl-3 py-0.5">
                    {temChave ? (
                      <>
                        <span className="font-serif font-bold text-dd-red uppercase text-xs tracking-wider mb-0.5">
                          {titulo.trim()}
                        </span>
                        <span className="text-sm text-gray-800 leading-relaxed">
                          {conteudo.trim()}
                        </span>
                      </>
                    ) : (
                      <span className="text-sm text-gray-800 leading-relaxed">
                        {detalhe}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 3. Figuras Notáveis (Largura Total) */}
        {cidadeAtiva.npcs && cidadeAtiva.npcs.length > 0 && (
          <section className="pt-4 border-t-2 border-dd-gold/40 space-y-4">
            <div className="flex items-center gap-2">
              <h4 className="text-2xl font-serif text-dd-red font-bold">
                Figuras Notáveis
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cidadeAtiva.npcs.map((npc, idx) => (
                <NpcCard key={idx} npc={npc} />
              ))}
            </div>
          </section>
        )}

      </div>
    </PageLayout>
  );
}