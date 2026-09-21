import React from 'react';

export default function NpcCard({ npc }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white/40 border border-dd-gold rounded shadow-sm transition-all hover:bg-white/60">
      <img 
        src={`${import.meta.env.BASE_URL}/assets/img/personagens/${npc.image}`} 
        alt={npc.name} 
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dd-red object-cover shrink-0 shadow-sm"
      />
      <div className="flex-1 text-center sm:text-left">
        <h4 className="font-serif-title font-bold text-lg text-dd-red mb-1">
          {npc.name}
        </h4>
        <span className="inline-block text-xs uppercase tracking-wider font-bold text-dd-red bg-dd-gold/20 px-2 py-0.5 rounded mb-2">
          {npc.role}
        </span>
        <p className="text-sm text-gray-800 leading-relaxed">
          {npc.description}
        </p>
      </div>
    </div>
  );
}