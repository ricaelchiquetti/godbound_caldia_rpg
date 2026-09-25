import GuideLayout from './GuideLayout';

const SECTION_CONFIG = [
  { file: 'intro.md', id: 'visao-geral', label: 'Visão Geral' },
  { file: 'creating-faction.md', id: 'criando-faccao', label: 'Criando uma Facção' },
  { file: 'faction-turns.md', id: 'turnos', label: 'Turnos de Facção, Problema e Conflito' },
  { file: 'common-actions.md', id: 'acoes-comuns', label: 'Ações Comuns de Facção' },
  { file: 'faction-goals.md', id: 'objetivos', label: 'Objetivos de Facção' },
  { file: 'example-play.md', id: 'exemplo', label: 'Um Exemplo de Jogo de Facção' },
  { file: 'attribute-examples.md', id: 'atributos', label: 'Exemplos de Atributos de Facção' },
  { file: 'problem-examples.md', id: 'problemas', label: 'Exemplos de Problemas de Facção' },
];

const modules = import.meta.glob('../content/rules/factions/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const sections = SECTION_CONFIG.map(({ file, id, label }) => {
  const filePath = `../content/rules/factions/${file}`;
  return {
    id,
    label,
    content: modules[filePath] || ''
  };
});

export default function FactionsView() {
  return <GuideLayout sections={sections} />;
}
