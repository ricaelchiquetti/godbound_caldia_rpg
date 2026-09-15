import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import CharacterCreationGuideView from '../components/CharacterCreationGuideView';
import GameRulesView from '../components/GameRulesView';
import DivinePowerView from '../components/DivinePowerView';
import WordsCreationView from '../components/WordsCreationView';

// Futuramente você pode importar outros módulos aqui:
// import CombatRulesView from './CombatRulesView';

export default function RulesView() {
  const [activeMainTab, setActiveMainTab] = useState('creation');

  const mainTabs = [
    { id: 'creation', label: 'Criação de Personagem', component: <CharacterCreationGuideView /> },
    { id: 'rules', label: 'As Regras do Jogo', component: <GameRulesView /> },
    { id: 'divine-power', label: 'Poderes Divinos', component: <DivinePowerView /> },
    { id: 'words-creation', label: 'As Palavras da Criação', component: <WordsCreationView /> },
  ];

  return (
    <PageLayout title="Godbound - Regras do Jogo">
      
      {/* Abas Principais da Seção de Regras */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '25px',
        borderBottom: '2px solid var(--dd-gold)',
        paddingBottom: '12px'
      }}>
        {mainTabs.map((tab) => {
          const isActive = activeMainTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveMainTab(tab.id)}
              style={{
                padding: '10px 20px',
                background: isActive ? '#554215' : 'rgba(255, 255, 255, 0.7)',
                color: isActive ? '#fff' : '#333',
                border: '1px solid var(--dd-gold)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: isActive ? '0 2px 5px rgba(0,0,0,0.2)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Renderiza a aba principal ativa */}
      <div>
        {mainTabs.find(tab => tab.id === activeMainTab)?.component}
      </div>

    </PageLayout>
  );
}