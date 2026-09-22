import React from 'react';

export default function LoreFooter({ entityName, text }) {
  if (!entityName && !text) return null;

  const footerText = text || `— Fim do registro de ${entityName} —`;

  return (
    <footer className="pt-8 border-t border-dd-gold/40 text-center text-xs text-stone-500 italic font-serif">
      {footerText}
    </footer>
  );
}