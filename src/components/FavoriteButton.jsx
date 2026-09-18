import React from 'react';
import { Star } from 'lucide-react';

export default function FavoriteButton({ isFavorite, onToggle, variant = 'card' }) {
  const baseStyles = "transition-all duration-200 cursor-pointer border-0 bg-transparent flex items-center justify-center select-none";

  const variants = {
    card: `${baseStyles} p-1 rounded hover:bg-black/5`,
    detail: `${baseStyles} px-3 py-1.5 rounded-md text-sm gap-1.5 border border-[var(--dd-gold)]/60 ${
      isFavorite ? 'bg-[#f0e6d2] text-[#554215]' : 'bg-white/50 text-gray-700 hover:bg-white'
    }`
  };

  const starClasses = isFavorite 
    ? 'fill-amber-500 text-amber-500' 
    : 'fill-transparent text-gray-700 hover:fill-amber-400 hover:text-amber-400'; 

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        if (typeof onToggle === 'function') {
          onToggle();
        }
      }}
      className={variants[variant]}
      title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <Star size={variant === 'detail' ? 16 : 18} className={`transition-colors ${starClasses}`} />
      {variant === 'detail' && (
        <span className="font-semibold">{isFavorite ? 'Favorita' : 'Favoritar'}</span>
      )}
    </button>
  );
}