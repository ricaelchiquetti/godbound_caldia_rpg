import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import CharacterCreationGuideView from '../components/CharacterCreationGuideView';
import GameRulesView from '../components/GameRulesView';
import DivinePowerView from '../components/DivinePowerView';
import WordsCreationView from '../components/WordsCreationView';
import FavoritesView from '../components/FavoritesView';
import { FavoritesProvider, useFavorites } from '../context/FavoritesContext';

function RulesContent() {
  const [activeTabId, setActiveTabId] = useState('creation');
  const { favorites } = useFavorites(); 

  const RULES_TABS = [
    { id: 'creation', label: 'Criação de Personagem', Component: CharacterCreationGuideView },
    { id: 'rules', label: 'As Regras do Jogo', Component: GameRulesView },
    { id: 'divine-power', label: 'Poderes Divinos', Component: DivinePowerView },
    { id: 'words-creation', label: 'As Palavras da Criação', Component: WordsCreationView },
    { id: 'favorites', label: `★ Dádivas Favoritos (${favorites.length})`, Component: (props) => <FavoritesView {...props} setActiveTabId={setActiveTabId} /> },
  ];

  const currentTab = RULES_TABS.find((tab) => tab.id === activeTabId) || RULES_TABS[0];
  const ActiveComponent = currentTab.Component;

  return (
    <PageLayout title="Godbound - Regras do Jogo">
      <div className="flex gap-2.5 mb-6 pb-3 border-b-2 border-[var(--dd-gold)] overflow-x-auto">
        {RULES_TABS.map((tab) => {
          const isActive = activeTabId === tab.id;
          return (
            <button key={tab.id} onClick={() => setActiveTabId(tab.id)} className={`px-5 py-2.5 rounded border border-[var(--dd-gold)] cursor-pointer font-bold text-base transition-all duration-200 whitespace-nowrap ${isActive ? 'bg-[#554215] text-white shadow-md' : 'bg-white/70 text-gray-800 shadow-none hover:bg-white/90'}`}>
              {tab.label}
            </button>
          );
        })}
      </div>

      <div>
        <ActiveComponent />
      </div>
    </PageLayout>
  );
}

export default function RulesView() {
  return (
    <FavoritesProvider>
      <RulesContent />
    </FavoritesProvider>
  );
}