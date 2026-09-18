import React from 'react';

export default function PageTitle({ children }) {
  return (
    <h2 className="border-b-2 border-[var(--dd-gold)] pb-2 text-[var(--dd-red)] mt-0 font-bold text-xl">
      {children}
    </h2>
  );
}