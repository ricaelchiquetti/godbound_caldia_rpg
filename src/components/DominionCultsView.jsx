import GuideLayout from './GuideLayout';

const SECTION_CONFIG = [
  { file: '../content/rules/dominion-cults/01-dominion.md', id: 'dominio', label: 'Domínio' },
  { file: '../content/rules/dominion-cults/02-mudando-fatos.md', id: 'mudando-fatos', label: 'Mudando Fatos com Domínio' },
  { file: '../content/rules/dominion-cults/03-influencia.md', id: 'influencia', label: 'Influência' },
  { file: '../content/rules/dominion-cults/03b-culto-resumo.md', id: 'culto', label: 'Cultos de Godbound' },
  { file: '../content/rules/dominion-cults/04-culto-trouble.md', id: 'culto-trouble', label: 'Culto, Trouble e Exemplo Completo' },
];

const modules = import.meta.glob('../content/rules/dominion-cults/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const sections = SECTION_CONFIG.map(({ file, id, label }) => ({
  id,
  label,
  content: modules[file] || ''
}));

export default function DominionCultsView() {
  return <GuideLayout sections={sections} sidebarTitle="Compêndio de Domínios e Cultos" />;
}
