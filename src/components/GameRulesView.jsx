import GuideSidebar from '../components/GuideSidebar';
import MarkdownDocView from './MarkdownDocView';

// Mapeamento dos arquivos MD com seus IDs e títulos acentuados
const SECTION_CONFIG = [
  { file: 'intro.md', id: 'visao-geral', label: 'Visão Geral' },
  { file: 'attribute-checks.md', id: 'atributos', label: 'Testes de Atributos' },
  { file: 'saving-throws.md', id: 'salvamentos', label: 'Testes de Resistência' },
  { file: 'advancement.md', id: 'evolucao', label: 'Evolução' },
  { file: 'combat.md', id: 'combate', label: 'Combate' },
];

// Importa todos os arquivos .md da pasta game-rules
const modules = import.meta.glob('../content/rules/game-rules/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

// Associa o conteúdo importado a cada seção da lista
const sections = SECTION_CONFIG.map(({ file, id, label }) => {
  const filePath = `../content/rules/game-rules/${file}`;
  return {
    id,
    label,
    content: modules[filePath] || ''
  };
});

export default function GameRulesView() {
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