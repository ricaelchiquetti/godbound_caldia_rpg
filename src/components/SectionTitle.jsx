import React from 'react';

export default function SectionTitle({ children }) {
  return (
    <h3 className="text-[#554215] text-lg mb-4 border-b border-[var(--dd-gold)]/40 pb-1 font-semibold">
      {children}
    </h3>
  );
}