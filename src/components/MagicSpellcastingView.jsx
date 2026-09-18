import GuideSidebar from '../components/GuideSidebar';
import MarkdownDocView from './MarkdownDocView';

// Mapeamento dos arquivos MD com seus IDs e títulos acentuados
const SECTION_CONFIG = [
  { file: 'intro.md', id: 'visao-geral', label: 'Magia e Conjuração' },
  { file: 'academy-thought.md', id: 'academy-thought', label: 'A Academia do Pensamento' },
  { file: 'cinnabar-order.md', id: 'cinnabar-order', label: 'A Ordem do Cinábrio' },
  { file: 'curse-eaters.md', id: 'curse-eaters', label: 'Comedores de Maldições' },
  { file: 'empty-way.md', id: 'empty-way', label: 'O Caminho Vazio' },
  { file: 'hedge-magic.md', id: 'hedge-magic', label: 'Magia Caseira' },
  { file: 'merciful-hand.md', id: 'merciful-hand', label: 'A Mão Misericordiosa' },
  { file: 'seers-bright-eye.md', id: 'seers-bright-eye', label: 'Videntes do Olho Brilhante' },
  { file: 'theotechnicians.md', id: 'theotechnicians', label: 'Os Teotécnicos' },
];


const modules = import.meta.glob('../content/rules/magic-spellcasting/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const sections = SECTION_CONFIG.map(({ file, id, label }) => {
  const filePath = `../content/rules/magic-spellcasting/${file}`;
  return {
    id,
    label,
    content: modules[filePath] || ''
  };
});

export default function MagicSpellcastingView() {
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