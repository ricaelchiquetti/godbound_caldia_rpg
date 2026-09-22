import React from 'react';
import NpcCard from './NpcCard'; // Certifique-se de ajustar o caminho para o seu NpcCard

export default function LoreNpcs({ 
  npcs, 
  entityName, 
  title = "Figuras Notáveis", 
  subtitle 
}) {
  if (!npcs || npcs.length === 0) return null;

  const defaultSubtitle = subtitle || `Figuras notáveis e personalidades influentes de ${entityName}`;

  return (
    <section className="mt-8 pt-6 border-t border-dd-red/30">
      <h2 className="text-2xl md:text-3xl font-bold text-dd-red tracking-wider uppercase font-serif">
        {title}
      </h2>
      <p className="text-xs italic text-stone-600 font-serif mb-4">
        {defaultSubtitle}
      </p>

      <div className="space-y-4">
        {npcs.map((npc, idx) => (
          <NpcCard key={npc.id || idx} npc={npc} />
        ))}
      </div>
    </section>
  );
}