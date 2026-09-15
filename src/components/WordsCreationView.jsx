import React, { useState } from 'react';
import WordCard from './WordCard';
import WordDetail from './WordDetail';
import { wordsData } from '../data/wordsData';

export default function WordsCreationView() {
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedWord = wordsData.find((w) => w.id === selectedWordId);

  const filteredWords = wordsData.filter((w) =>
    w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-white/88 border border-[var(--dd-gold)] shadow-md text-[#2c2c2c] leading-relaxed">
      {!selectedWord ? (
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-[var(--dd-gold)] pb-3 mb-4">
            <h2 className="text-[var(--dd-red)] m-0 font-bold text-xl">
              As Palavras da Criação
            </h2>

            <input
              type="text"
              placeholder="Pesquisar palavra..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-1.5 border border-[var(--dd-gold)]/80 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[var(--dd-gold)] w-full sm:w-64"
            />
          </div>

          <p className="mb-5 text-sm">
            As Palavras da Criação são os blocos fundamentais de construção da realidade, os fragmentos rugosos e primordiais da própria linguagem com a qual os deuses arquitetaram o mundo. Selecione uma Palavra abaixo para examinar sua natureza e suas dádivas refinadas.
          </p>

          {/* Grid de Palavras */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mt-5">
            {filteredWords.map((word) => (
              <WordCard 
                key={word.id} 
                word={word} 
                onSelect={setSelectedWordId} 
              />
            ))}
          </div>

          {filteredWords.length === 0 && (
            <p className="text-center text-gray-500 mt-8 text-sm italic">
              Nenhuma Palavra encontrada para "{searchTerm}".
            </p>
          )}
        </div>
      ) : (
        <WordDetail 
          word={selectedWord} 
          onBack={() => setSelectedWordId(null)} 
        />
      )}
    </div>
  );
}