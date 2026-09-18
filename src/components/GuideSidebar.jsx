import React, { useState } from 'react';

export default function GuideSidebar({ sections, title = "Navegação do Guia" }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <>
      <div className="md:hidden sticky top-4 z-20 mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-[var(--dd-gold)] shadow-sm rounded text-[#554215] font-bold text-sm"
        >
          <span>{title}</span>
          <span>{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-white p-4 shadow-xl transform transition-transform duration-300 ease-in-out
        md:static md:w-64 md:shrink-0 md:transform-none md:shadow-sm md:p-0 md:bg-transparent
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="md:sticky md:top-6 p-4 bg-white/90 md:bg-white/80 border border-[var(--dd-gold)] shadow-sm rounded h-full md:h-auto overflow-y-auto">
          <div className="flex items-center justify-between mb-3 border-b border-[var(--dd-gold)] pb-2">
            <h4 className="font-bold text-[#554215]">
              {title}
            </h4>
            <button 
              onClick={() => setIsOpen(false)} 
              className="md:hidden text-gray-500 hover:text-black font-bold px-2"
            >
              ✕
            </button>
          </div>
          
          <nav className="flex flex-col gap-1">
            {sections.map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left px-2 py-2 text-sm text-gray-700 hover:text-[#554215] hover:bg-[var(--dd-gold)]/10 rounded transition-colors"
              >
                {index + 1}. {label}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}