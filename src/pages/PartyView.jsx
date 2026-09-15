import React from 'react';
import PageLayout from '../components/PageLayout';
import CharacterCard from '../components/CharacterCard';
import { personagensJogadores } from '../data/worldData';

export default function PartyView() {
  return (
    <PageLayout title="O Grupo de Aventureiros">
      <p>Estes são os heróis que atualmente desbravam as ruínas e enfrentam os perigos de Caldia.</p>
      
      <div className="character-grid">
        {personagensJogadores.map((personagem) => (
          <CharacterCard key={personagem.id} personagem={personagem} />
        ))}
      </div>
    </PageLayout>
  );
}