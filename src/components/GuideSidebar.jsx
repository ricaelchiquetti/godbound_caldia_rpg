import React from 'react';

export default function GuideSidebar({ sections, title = "Navegação do Guia" }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-64 shrink-0">
      <div className="sticky top-6 p-4 bg-white/80 border border-[var(--dd-gold)] shadow-sm rounded">
        <h4 className="font-bold text-[#554215] mb-3 border-b border-[var(--dd-gold)] pb-2">
          {title}
        </h4>
        <nav className="flex flex-col gap-1">
          {sections.map(({ id, label }, index) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-left px-2 py-1.5 text-sm text-gray-700 hover:text-[#554215] hover:bg-[var(--dd-gold)]/10 rounded transition-colors"
            >
              {index + 1}. {label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}