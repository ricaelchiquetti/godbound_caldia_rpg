// src/components/GuideLayout.jsx
import React from 'react';
import GuideSidebar from './GuideSidebar';
import MarkdownDocView from './MarkdownDocView';

export default function GuideLayout({ sections, sidebarTitle }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-4 md:p-6">
      <GuideSidebar sections={sections} title={sidebarTitle} />
      
      <main className="flex-1 space-y-6 md:space-y-10 min-w-0">
        {sections.map(({ id, content, title }) => (
          <section key={id} id={id}>
            <MarkdownDocView title={title} content={content} />
          </section>
        ))}
      </main>
    </div>
  );
}