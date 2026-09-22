import React from 'react';

export default function LoreNav({ data, activeId, onSelectItem }) {
  if (!data || data.length === 0) return null;

  return (
    <nav className="flex justify-center flex-wrap gap-3 md:gap-6 mb-10 border-b border-dd-gold/40 pb-4">
      {data.map((item) => (
        <button 
          key={item.id}
          onClick={() => onSelectItem(item.id)}
          className={`font-serif text-xs md:text-sm tracking-widest uppercase transition-all py-1 px-3 border-b-2 ${
            activeId === item.id
              ? 'text-dd-red border-dd-red font-bold scale-105'
              : 'text-gray-600 border-transparent hover:text-dd-red hover:border-dd-gold/50'
          }`}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}