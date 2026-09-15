import React from 'react';

export default function WordCard({ word, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(word.id)}
      className="bg-[#f5efe0]/70 hover:bg-[#f5efe0] border border-[var(--dd-gold)] rounded p-4 cursor-pointer transition-colors shadow-sm"
    >
      <h3 className="text-[var(--dd-red)] text-base font-bold m-0 mb-1.5">
        {word.name}
      </h3>
      <p className="m-0 text-xs text-gray-600 leading-snug">
        {word.shortDesc}
      </p>
    </div>
  );
}