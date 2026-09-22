import React from 'react';
import { cities } from '../data/worldData';
import LorePage from '../components/LorePage';

export default function CityView() {
  return (
    <LorePage 
      pageTitle="Nações e Territórios"
      category="Nações & Territórios"
      items={cities}
    />
  );
}