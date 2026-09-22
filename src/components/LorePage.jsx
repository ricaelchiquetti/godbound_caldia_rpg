import React, { useState } from 'react';
import PageLayout from './PageLayout';
import LoreNav from './LoreNav';
import LoreHeader from './LoreHeader';
import LoreBody from './LoreBody';
import LoreDetails from './LoreDetails';
import LoreNpcs from './LoreNpcs';
import LoreFooter from './LoreFooter';

export default function LorePage({ 
  pageTitle, 
  category, 
  items = [], 
  getImageCaption 
}) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const activeItem = items.find(item => item.id === activeId);

  if (!activeItem) return null;

  const defaultCaption = `Vista de ${activeItem.name} e seus domínios.`;
  const caption = getImageCaption ? getImageCaption(activeItem) : defaultCaption;

  return (
    <PageLayout title={pageTitle}>
      <LoreNav
        data={items} 
        activeId={activeId} 
        onSelectItem={setActiveId} 
      />

      <article className="bg-white/40 max-w-3xl mx-auto bg-parchment/70 p-6 md:p-12 border border-dd-gold/60 shadow-xl rounded-sm font-serif text-stone-900 space-y-10">
        <LoreHeader 
          category={category}
          title={activeItem.name}
          image={activeItem.image}
          imageCaption={caption}
        />

        <LoreBody 
          description={activeItem.description} 
        />

        <LoreDetails 
          details={activeItem.details} 
        />

        <LoreNpcs 
          npcs={activeItem.npcs} 
          entityName={activeItem.name} 
        />

        <LoreFooter 
          entityName={activeItem.name} 
        />
      </article>
    </PageLayout>
  );
}