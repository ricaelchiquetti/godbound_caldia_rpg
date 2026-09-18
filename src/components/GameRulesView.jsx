import GuideLayout from './GuideLayout';

// Mapeamento dos arquivos MD com seus IDs e títulos acentuados
const SECTION_CONFIG = [
  { file: 'intro.md', id: 'visao-geral', label: 'Visão Geral' },
  { file: 'attribute-checks.md', id: 'atributos', label: 'Testes de Atributos' },
  { file: 'saving-throws.md', id: 'salvamentos', label: 'Testes de Resistência' },
  { file: 'advancement.md', id: 'evolucao', label: 'Evolução' },
  { file: 'combat.md', id: 'combate', label: 'Combate' },
];

const modules = import.meta.glob('../content/rules/game-rules/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const sections = SECTION_CONFIG.map(({ file, id, label }) => {
  const filePath = `../content/rules/game-rules/${file}`;
  return {
    id,
    label,
    content: modules[filePath] || ''
  };
});

export default function GameRulesView() {
  return <GuideLayout sections={sections}/>;
}