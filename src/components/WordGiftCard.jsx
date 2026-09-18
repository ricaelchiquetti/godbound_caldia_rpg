import React from 'react';
import FavoriteButton from './FavoriteButton';
import { useFavorites } from '../context/FavoritesContext';

export default function WordGiftCard({ gift, wordId }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const giftId = `${wordId}-${gift.name}`;
  const favorited = isFavorite(giftId);
  console.log(giftId);

  return (
    <div className="bg-[#fcfaf7] border border-[var(--dd-gold)]/40 border-l-4 border-l-[var(--dd-red)] rounded-r-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--dd-gold)]/20 pb-2 mb-2.5">
        <div className="flex items-center gap-2">
          <h4 className="text-[var(--dd-red)] text-base font-bold m-0 flex items-center gap-2">
            {gift.name}
          </h4>

          <FavoriteButton 
            isFavorite={favorited} 
            onToggle={() => toggleFavorite(giftId)} 
            variant="card"
          />
        </div>
        <span className="px-4 py-1 rounded-full text-xs font-semibold bg-[#f0e6d2] text-[#554215] border border-[var(--dd-gold)]/50 shadow-xs">
          {gift.type}
        </span>

      </div>
      <p className="m-0 text-sm text-gray-800 leading-relaxed">
        {gift.content}
      </p>
    </div>
  );
}