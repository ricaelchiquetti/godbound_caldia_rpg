import React from 'react';

export default function LoreDetails({ title = "Informações Gerais", details }) {
  if (!details) return null;

  let items = [];

  // 1. Se for Array de Strings ou Objetos
  if (Array.isArray(details)) {
    items = details
      .filter(item => Boolean(item) && String(item).trim().length > 0)
      .map(item => {
        if (typeof item === 'string') {
          const temChave = item.includes(':');
          if (temChave) {
            const [label, ...resto] = item.split(':');
            return { label: label.trim(), value: resto.join(':').trim() };
          }
          return { label: null, value: item.trim() };
        }
        return item;
      });
  } 
  // 2. Se for um Objeto { "Líder": "Fulano", ... }
  else if (typeof details === 'object') {
    items = Object.entries(details)
      .filter(([_, value]) => Boolean(value))
      .map(([label, value]) => ({ label, value }));
  }

  // Se não houver NENHUM item válido, cancela a renderização completamente
  if (items.length === 0) return null;

  return (
    <aside className="my-6 p-5 bg-parchment-dark/40 border-l-4 border-dd-red border-y border-r border-dd-gold/50 rounded-r font-serif space-y-3">
      <h3 className="text-xs font-sans tracking-widest uppercase font-bold text-dd-red border-b border-dd-gold/40 pb-2">
        {title}
      </h3>

      <ul className="space-y-2 text-sm md:text-base text-stone-800">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 leading-relaxed">
            <span className="text-dd-red font-bold text-xs mt-1">◆</span>
            {item.label ? (
              <span>
                <strong className="text-stone-900 font-bold">{item.label}: </strong>
                <span className="text-stone-800">{item.value}</span>
              </span>
            ) : (
              <span>{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}