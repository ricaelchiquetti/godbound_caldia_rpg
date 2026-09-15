import React from 'react';
import GuideSidebar from '../components/GuideSidebar';
import MarkdownDocView from '../components/MarkdownDocView';

// Mapeamento explícito com o nome do arquivo, ID de rolagem e Título correto (com acentos)
const SECTION_CONFIG = [
  { file: 'intro.md', id: 'visao-geral', label: 'Visão Geral' },
  { file: 'attributes.md', id: 'atributos', label: 'Atributos, Mods e Salvamentos' },
  { file: 'facts.md', id: 'fatos', label: 'Determinando Fatos' },
  { file: 'words-gifts.md', id: 'palavras', label: 'Escolhendo Palavras e Dádivas' },
  { file: 'wealth-equipment.md', id: 'riqueza', label: 'Riqueza e Equipamentos' },
  { file: 'final-touches.md', id: 'toques-finais', label: 'Toques Finais' },
];

// Importa todos os arquivos .md da pasta
const modules = import.meta.glob('../content/rules/character-creation/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

// Relaciona a configuração com o conteúdo importado
const sections = SECTION_CONFIG.map(({ file, id, label }) => {
  const filePath = `../content/rules/character-creation/${file}`;
  return {
    id,
    label,
    content: modules[filePath] || ''
  };
});

export default function CharacterCreationGuideView() {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto p-6">
      <GuideSidebar sections={sections} />
      <main className="flex-1 space-y-10">
        {sections.map(({ id, content }) => (
          <section
            key={id}
            id={id}
          >
            <MarkdownDocView content={content} />
          </section>
        ))}
      </main>
    </div>
  );
}