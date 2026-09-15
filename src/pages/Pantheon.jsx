import React from 'react';
import { deusesIniciais } from '../data/worldData';
import PageLayout from '../components/PageLayout';
import GodCard from '../components/GodCard';

export default function Pantheon() {
  return (
    <PageLayout title="O Panteão">
      <p>Abaixo estão registradas as entidades que os mortais ousam chamar de deuses e seus domínios neste mundo despedaçado.</p>
      
      <div className="god-grid">
        {deusesIniciais.map((deus, idx) => (
          <GodCard key={idx} deus={deus} />
        ))}
      </div>
    </PageLayout>
  );
}