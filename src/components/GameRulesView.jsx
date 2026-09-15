import React from 'react';
import RulesIntroView from './RulesIntroView';
import RulesAttributeChecksView from './RulesAttributeChecksView';
import RulesSavingThrowsView from './RulesSavingThrowsView';
import RulesAdvancementView from './RulesAdvancementView';
import RulesCombatView from './RulesCombatView';

const GAME_SECTIONS = [
  { id: 'visao-geral', label: '1. Visão Geral', Component: RulesIntroView },
  { id: 'atributos', label: '2. Testes de Atributos', Component: RulesAttributeChecksView },
  { id: 'salvamentos', label: '3. Testes de Resistência', Component: RulesSavingThrowsView },
  { id: 'evolucao', label: '4. Evolução', Component: RulesAdvancementView },
  { id: 'combate', label: '5. Combate', Component: RulesCombatView },
];

export default function GameRulesView() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="docs-layout">
      <aside className="docs-sidebar">
        <h1>Navegação do Guia</h1>
        <nav className="flex flex-col gap-1">
          {GAME_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="docs-nav-link text-left"
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="docs-content">
        {GAME_SECTIONS.map(({ id, Component }) => (
          <section key={id} id={id} className="scroll-mt-6">
            <Component />
          </section>
        ))}
      </main>
    </div>
  );
}