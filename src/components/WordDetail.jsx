import React from 'react';

export default function WordDetail({ word, onBack }) {
  return (
    <div>
      <button 
        onClick={onBack}
        className="bg-[var(--dd-red)] hover:opacity-90 text-white font-bold py-2 px-4 rounded border-0 cursor-pointer mb-5 shadow transition-opacity text-sm"
      >
        ← Voltar para a Lista de Palavras
      </button>

      <h2 className="border-b-2 border-[var(--dd-gold)] pb-2 text-[var(--dd-red)] mt-0 font-bold text-xl">
        {word.name}
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        {word.description}
      </p>

      <h3 className="text-[#554215] text-lg mb-4 border-b border-[var(--dd-gold)]/40 pb-1 font-semibold">
        Dádivas da Palavra
      </h3>

      {word.gifts && word.gifts.length > 0 ? (
        <div className="space-y-4">
            {word.gifts.map((gift, index) => (
            <div 
                key={index} 
                className="bg-[#fcfaf7] border border-[var(--dd-gold)]/40 border-l-4 border-l-[var(--dd-red)] rounded-r-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--dd-gold)]/20 pb-2 mb-2.5">
                    <h4 className="text-[var(--dd-red)] text-base font-bold m-0 flex items-center gap-2">{gift.name}</h4>
                    <span className="px-4 py-1 rounded-full text-xs font-semibold bg-[#f0e6d2] text-[#554215] border border-[var(--dd-gold)]/50 shadow-xs">
                        {gift.type}
                    </span>
                </div>
                <p className="m-0 text-sm text-gray-800 leading-relaxed">
                    {gift.content}
                </p>
            </div>
            ))}
        </div>
      ) : (
        <p className="italic text-gray-500 text-sm">
          Nenhuma dádiva cadastrada para esta Palavra ainda. Conforme avançarmos nos textos, preencheremos esta seção!
        </p>
      )}
    </div>
  );
}