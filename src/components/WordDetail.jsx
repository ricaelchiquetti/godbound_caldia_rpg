import React from 'react';
import WordGiftCard from './WordGiftCard';
import SectionTitle from './SectionTitle';
import PageTitle from './PageTitle';

export default function WordDetail({ word, onBack }) {
  
  const renderGiftSection = (title, gifts) => (
    <div className="py-4">
      <SectionTitle>{title}</SectionTitle>
      {gifts && gifts.length > 0 ? (
        <div className="space-y-4">
          {gifts.map((gift, index) => (
            <WordGiftCard key={index} gift={gift} wordId={word.id}/>
          ))}
        </div>
      ) : (
        <p className="italic text-gray-500 text-sm">
          Nenhuma dádiva cadastrada para esta Palavra ainda. Conforme avançarmos nos textos, preencheremos esta seção!
        </p>
      )}
    </div>
  );

  return (
    <div>
      <button 
        onClick={onBack}
        className="bg-[var(--dd-red)] hover:opacity-90 text-white font-bold py-2 px-4 rounded border-0 cursor-pointer mb-5 shadow transition-opacity text-sm"
      >
        ← Voltar para a Lista de Palavras
      </button>

      <PageTitle>{word.name}</PageTitle>
      
      <p className="mb-6 text-base leading-relaxed whitespace-pre-line">
        {word.description}
      </p>

      {renderGiftSection("Dádivas Menores", word.gifts?.lesser)}
      {renderGiftSection("Dádivas Maiores", word.gifts?.greater)}
    </div>
  );
}