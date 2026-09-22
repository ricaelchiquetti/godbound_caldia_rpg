import React, { useState } from 'react';

const navItems = [
  { id: 'intro', label: 'O Compêndio' },
  { id: 'cities', label: 'Nações e Territórios' },
  { id: 'factions', label: 'Facções e Organizações' },
  { id: 'pantheon', label: 'O Panteão' },
  { id: 'rules', label: 'Livro do Jogador' }
];

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id) => {
    setActivePage(id);
    setIsOpen(false);
  };

  return (
    <header className="bg-dd-red border-b-2 border-dd-gold sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
        
        {/* Logo / Título do Livro Clicável */}
        <button 
          onClick={() => handleSelect('intro')}
          className="flex items-center gap-2 font-serif text-parchment text-lg md:text-xl font-bold tracking-wider hover:text-dd-gold transition-colors cursor-pointer"
        >
          <span className="text-dd-gold text-xs">✦</span>
          <span className="font-serif-title text-parchment text-xl tracking-wider">
          Compêndio RPG
          </span>
        </button>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          className="md:hidden p-2 text-parchment border border-dd-gold/60 rounded-sm hover:bg-dd-gold/20 transition-colors cursor-pointer"
        >
          <span className="text-lg leading-none block">{isOpen ? '✕' : '☰'}</span>
        </button>

        {/* Menu Desktop — Estilo Abas / Editorial */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-3">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`font-serif text-xs lg:text-sm tracking-widest uppercase transition-all py-2 px-3 lg:px-4 border-b-2 cursor-pointer ${
                  isActive
                    ? 'text-dd-gold border-dd-gold font-bold bg-black/15'
                    : 'text-parchment/80 border-transparent hover:text-dd-gold hover:border-dd-gold/50 hover:bg-black/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Menu Mobile Expandido */}
      {isOpen && (
        <nav className="md:hidden bg-dd-red border-t border-dd-gold/30 border-b-2 border-dd-gold shadow-2xl py-2 px-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`text-left px-4 py-2.5 font-serif text-xs tracking-widest uppercase transition-all border-l-2 cursor-pointer ${
                  isActive
                    ? 'bg-dd-gold/20 text-dd-gold border-dd-gold font-bold'
                    : 'bg-transparent text-parchment/80 border-transparent hover:bg-black/10 hover:text-dd-gold'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}