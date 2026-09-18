import React, { useState } from 'react';

const navItems = [
  { id: 'intro', label: 'O Compêndio' },
  { id: 'cities', label: 'Nações e Cidades' },
  { id: 'factions', label: 'Facções' },
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
    <header className="bg-dd-red border-b-2 border-dd-gold sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <span className="font-serif-title text-parchment text-xl tracking-wider">
          Compêndio RPG
        </span>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-parchment border border-dd-gold rounded hover:bg-dd-gold/20 transition-colors"
        >
          <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-4 py-2 border font-serif text-sm transition-all ${
                activePage === item.id
                  ? 'bg-dd-gold text-dd-red border-dd-gold font-bold shadow-inner'
                  : 'bg-transparent text-parchment border-dd-gold/60 hover:bg-dd-gold hover:text-dd-red'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Menu Mobile Expandido */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dd-red border-b-2 border-dd-gold shadow-lg py-3 px-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`text-left px-3 py-2.5 font-serif text-sm border transition-all ${
                activePage === item.id
                  ? 'bg-dd-gold text-dd-red border-dd-gold font-bold'
                  : 'bg-transparent text-parchment border-dd-gold/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}