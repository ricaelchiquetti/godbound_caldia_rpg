import React, { useState } from 'react';
// Certifique-se de importar do arquivo JSON correto
import cities from '../data/cities.json'; 
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
            {cidade.name} {/* nome -> name */}
          </button>
        ))}
      </div>

      {/* Conteúdo da Cidade Ativa */}
      <div className="animate-fadeIn space-y-6 bg-white/40 p-4 md:p-6 border border-dd-gold rounded-sm shadow-md">
        <h3 className="text-2xl font-serif text-dd-red font-bold">
          {cidadeAtiva.name} {/* nome -> name */}
        </h3>
        
        {cidadeAtiva.image && ( /* imagem -> image */
          <div className="overflow-hidden rounded border-2 border-dd-gold shadow-sm">
            <img 
              src={cidadeAtiva.image} 
              alt={cidadeAtiva.name} 
              className="w-full h-48 md:h-[300px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <p className="text-lg leading-relaxed text-gray-800 text-justify whitespace-pre-line">
          {cidadeAtiva.description} {/* descricao -> description */}
        </p>
        
        {/* detalhes -> details com verificação condicional */}
        {cidadeAtiva.details && cidadeAtiva.details.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {cidadeAtiva.details.map((detalhe, idx) => (
              <li key={idx} className="leading-relaxed">
                {detalhe}
              </li>
            ))}
          </ul>
        )}

        {/* Renderização Condicional de NPCs */}
        {cidadeAtiva.npcs && cidadeAtiva.npcs.length > 0 && (
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