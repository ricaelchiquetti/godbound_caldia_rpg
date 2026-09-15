import React from 'react';
import CharacterCreationView from '../components/CharacterCreationView';
import AttributesRulesView from '../components/AttributesRulesView';
import FactsRulesView from '../components/FactsRulesView';
import WordsAndGiftsRulesView from '../components/WordsAndGiftsRulesView';
import WealthAndEquipmentRulesView from '../components/WealthAndEquipmentRulesView';
import FinalTouchesRulesView from '../components/FinalTouchesRulesView';

export default function CharacterCreationGuideView() {
  const tableOfContents = [
    { id: 'visao-geral', label: '1. Visão Geral' },
    { id: 'atributos', label: '2. Atributos, Mods e Salvamentos' },
    { id: 'fatos', label: '3. Determinando Fatos' },
    { id: 'palavras', label: '4. Escolhendo Palavras e Dádivas' },
    { id: 'riqueza', label: '5. Riqueza e Equipamentos' },
    { id: 'toques-finais', label: '6. Toques Finais' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="docs-layout">
      
      {/* SIDEBAR FIXO (Índice Lateral) */}
      <aside className="docs-sidebar">
        <h4>Navegação do Guia</h4>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {tableOfContents.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="docs-nav-link"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* CONTEÚDO PRINCIPAL DO GUIA */}
      <main className="docs-content">
        <div id="visao-geral"><CharacterCreationView /></div>
        <div id="atributos"><AttributesRulesView /></div>
        <div id="fatos"><FactsRulesView /></div>
        <div id="palavras"><WordsAndGiftsRulesView /></div>
        <div id="riqueza"><WealthAndEquipmentRulesView /></div>
        <div id="toques-finais"><FinalTouchesRulesView /></div>
      </main>

    </div>
  );
}