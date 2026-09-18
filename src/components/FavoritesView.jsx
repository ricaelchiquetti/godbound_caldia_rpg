import React from 'react';
import WordGiftCard from './WordGiftCard';
import SectionTitle from './SectionTitle';
import PageTitle from './PageTitle';
import { wordsData } from '../data/wordsData';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesView({ setActiveTabId }) {
  const { favorites } = useFavorites();

  const groupedFavorites = {};

  wordsData.forEach((word) => {
    const lesserGifts = (word.gifts?.lesser || []).map(g => ({ ...g, giftTypeCategory: 'Menor' }));
    const greaterGifts = (word.gifts?.greater || []).map(g => ({ ...g, giftTypeCategory: 'Maior' }));
    const allGifts = [...lesserGifts, ...greaterGifts];

    allGifts.forEach((gift) => {
      const giftId = `${word.id}-${gift.name}`;

      if (favorites.includes(giftId)) {
        if (!groupedFavorites[word.id]) {
          groupedFavorites[word.id] = {
            wordName: word.name,
            wordId: word.id,
            lesser: [],
            greater: []
          };
        }

        const giftWithMeta = { ...gift, wordId: word.id };
        if (gift.giftTypeCategory === 'Maior') {
          groupedFavorites[word.id].greater.push(giftWithMeta);
        } else {
          groupedFavorites[word.id].lesser.push(giftWithMeta);
        }
      }
    });
  });

  const wordsWithFavorites = Object.values(groupedFavorites);
  const totalFavoritesCount = wordsWithFavorites.reduce(
    (acc, curr) => acc + curr.lesser.length + curr.greater.length, 
    0
  );

  const renderGiftSection = (title, gifts, categoryKey) => {
    if (gifts.length === 0) return null;

    return (
      <div>
        <SectionTitle>{title}</SectionTitle>
        <div className="space-y-3 mt-2">
          {gifts.map((gift, index) => (
            <WordGiftCard 
              key={`${categoryKey}-${index}`} 
              gift={gift} 
              wordId={gift.wordId} 
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 bg-white/88 border border-[var(--dd-gold)] shadow-md text-[#2c2c2c] leading-relaxed">
      <div>
        <h2 className="text-[var(--dd-red)] m-0 font-bold text-xl mb-4">
          ★ Dádivas Favoritas ({totalFavoritesCount})
        </h2>
        <p className="mb-5 text-sm">
          Aqui estão reunidas todas as Dádivas que você marcou como favoritas para acesso rápido, agrupadas por Palavra.
        </p>

        {wordsWithFavorites.length > 0 ? (
          <div className="space-y-6 mt-5">
            {wordsWithFavorites.map((group) => (
              <div key={group.wordId} className="bg-[#fcf7ee] border border-[var(--dd-gold)]/50 rounded-lg p-5 shadow-xs space-y-4">
                <PageTitle>{group.wordName}</PageTitle>

                <div className="space-y-4">
                  {renderGiftSection('Dádivas Menores', group.lesser, 'lesser')}
                  {renderGiftSection('Dádivas Maiores', group.greater, 'greater')}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 italic text-sm mb-4">
              Você ainda não favoritou nenhuma Dádiva.
            </p>
            {setActiveTabId && (
              <button
                onClick={() => setActiveTabId('words-creation')}
                className="bg-[var(--dd-red)] text-white font-bold py-2 px-4 rounded border-0 cursor-pointer text-sm hover:opacity-90 transition-opacity"
              >
                Explorar Palavras e Dádivas
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}