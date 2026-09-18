import React from 'react';
import { deusesIniciais } from '../data/worldData';
import PageLayout from '../components/PageLayout';
import GodCard from '../components/GodCard';

export default function Pantheon() {
  return (
    <PageLayout title="O Panteão">
      <p className="text-lg text-gray-800 leading-relaxed mb-6">
        Abaixo estão registradas as entidades que os mortais ousam chamar de deuses e seus domínios neste mundo despedaçado.
      </p>
      
      {/* Grid responsivo adaptado para Mobile First */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {deusesIniciais.map((deus, idx) => (
          <GodCard key={idx} deus={deus} />
        ))}
      </div>
    </PageLayout>
  );
}