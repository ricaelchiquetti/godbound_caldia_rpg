import React from 'react';
import { factions } from '../data/worldData';
import LorePage from '../components/LorePage';

export default function FactionView() {
  return (
    <LorePage 
      pageTitle="Facções e Organizações Menores"
      category="Facções e Organizações"
      items={factions}
      getImageCaption={(faction) => `Escore e estandarte de ${faction.name}.`}
    />
  );
}