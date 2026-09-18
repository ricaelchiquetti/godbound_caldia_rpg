import GuideLayout from './GuideLayout';

// Mapeamento dos arquivos MD com seus IDs e títulos acentuados
const SECTION_CONFIG = [
  { file: 'intro.md', id: 'visao-geral', label: 'Teurgia e Invocações' },
  { file: 'invocation.md', id: 'invocation', label: 'Invocações Teúrgicas' },
  { file: 'invocation-gate.md', id: 'invocation-gate', label: 'Invocações do Portão' },
  { file: 'invocation-way.md', id: 'invocation-way', label: 'Invocações do Caminho' },
  { file: 'invocation-throne.md', id: 'invocation-throne', label: 'Invocações do Trono' },
];

const modules = import.meta.glob('../content/rules/theurgy-invocations/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const sections = SECTION_CONFIG.map(({ file, id, label }) => {
  const filePath = `../content/rules/theurgy-invocations/${file}`;
  return {
    id,
    label,
    content: modules[filePath] || ''
  };
});

export default function TheurgyInvocationsView() {
  return <GuideLayout sections={sections}/>;
}