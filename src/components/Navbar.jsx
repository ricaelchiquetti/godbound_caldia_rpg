import React from 'react';

const navItems = [
  { id: 'intro', label: 'O Compêndio' },
  { id: 'party', label: 'Os Heróis' },
  { id: 'cities', label: 'Nações e Cidades' },
  { id: 'factions', label: 'Facções e Organizações Menores' },
  { id: 'pantheon', label: 'O Panteão' },
  { id: 'rules', label: 'Livro do Jogador' }
];

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="nav-menu">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-btn ${activePage === item.id ? 'active' : ''}`}
          onClick={() => setActivePage(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}