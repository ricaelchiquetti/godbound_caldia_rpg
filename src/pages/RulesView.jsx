import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import LoreNav from '../components/LoreNav';
import CharacterCreationGuideView from '../components/CharacterCreationGuideView';
import GameRulesView from '../components/GameRulesView';
import DivinePowerView from '../components/DivinePowerView';
import WordsCreationView from '../components/WordsCreationView';
import MagicSpellcastingView from '../components/MagicSpellcastingView';
import TheurgyInvocationsView from '../components/TheurgyInvocationsView';
import ChangingWorldView from '../components/ChangingWorldView';
import CultsView from '../components/CultsView';
import FactionsView from '../components/FactionsView';
import FavoritesView from '../components/FavoritesView';
import { FavoritesProvider, useFavorites } from '../context/FavoritesContext';

function RulesContent() {
  const [activeTabId, setActiveTabId] = useState('creation');
  const { favorites } = useFavorites(); 

  const RULES_TABS = [
    { id: 'creation', name: 'Criação de Personagem', Component: CharacterCreationGuideView },
    { id: 'rules', name: 'As Regras do Jogo', Component: GameRulesView },
    { id: 'divine-power', name: 'Poderes Divinos', Component: DivinePowerView },
    { id: 'words-creation', name: 'As Palavras da Criação', Component: WordsCreationView },
    { id: 'magic-spellcasting', name: 'Magia e Conjuração', Component: MagicSpellcastingView },
    { id: 'theurgy-invocations', name: 'Teurgia e Invocações', Component: TheurgyInvocationsView },
    { id: 'changing-world', name: 'Mudar o Mundo', Component: ChangingWorldView },
    { id: 'cults', name: 'Cultos de Godbound', Component: CultsView },
    { id: 'factions', name: 'Facções, Nações e Organizações', Component: FactionsView },
    { id: 'favorites', name: `★ Dádivas Favoritos (${favorites.length})`, Component: (props) => <FavoritesView {...props} setActiveTabId={setActiveTabId} /> },
  ];

  const currentTab = RULES_TABS.find((tab) => tab.id === activeTabId) || RULES_TABS[0];
  const ActiveComponent = currentTab.Component;

  return (
    <PageLayout title="Godbound - Regras do Jogo">
      <LoreNav 
        data={RULES_TABS} 
        activeId={activeTabId} 
        onSelectItem={setActiveTabId} 
      />

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