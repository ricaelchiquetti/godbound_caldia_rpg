import React from 'react';
import RulesIntroView from './RulesIntroView';
import RulesAttributeChecksView from './RulesAttributeChecksView';
import RulesSavingThrowsView from './RulesSavingThrowsView';
import RulesAdvancementView from './RulesAdvancementView';
import RulesCombatView from './RulesCombatView';

export default function GameRulesView() {
  const tableOfContents = [
    { id: 'visao-geral', label: '1. Visão Geral' },
    { id: 'atributos', label: '2. Testes de Atributos' },
    { id: 'savamentos', label: '3. Testes de Resistência' },
    { id: 'evolucao', label: '4. Evolução' },
    { id: 'combate', label: '5. Combate' },
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
        <div id="visao-geral"><RulesIntroView /></div>
        <div id="atributos"><RulesAttributeChecksView /></div>
        <div id="savamentos"><RulesSavingThrowsView /></div>
        <div id="evolucao"><RulesAdvancementView /></div>
        <div id="combate"><RulesCombatView /></div>
      </main>

    </div>
  );
}