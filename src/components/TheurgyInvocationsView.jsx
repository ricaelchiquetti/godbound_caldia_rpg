import GuideSidebar from '../components/GuideSidebar';
import MarkdownDocView from './MarkdownDocView';

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