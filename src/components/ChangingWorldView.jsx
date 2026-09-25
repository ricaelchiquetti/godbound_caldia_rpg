import GuideLayout from './GuideLayout';

// Mapeamento dos arquivos MD com seus IDs e títulos acentuados
const SECTION_CONFIG = [
  { file: 'intro.md', id: 'visao-geral', label: 'Visão Geral' },
  { file: 'formas-de-mudanca.md', id: 'formas-de-mudanca', label: 'Formas de Mudar as Coisas' },
  { file: 'dons-e-acoes.md', id: 'dons-e-acoes', label: 'Mudar Fatos com Dons e Ações' },
  { file: 'influencia.md', id: 'influencia', label: 'Mudar Fatos com Influência' },
  { file: 'dominio.md', id: 'dominio', label: 'Mudar Fatos com Domínio' },
  { file: 'custo.md', id: 'custo', label: 'Determinando o Custo' },
  { file: 'usando-influencia-dominio.md', id: 'usando-influencia-dominio', label: 'Usando Influência e Domínio' },
  { file: 'opondo-se.md', id: 'opondo-se', label: 'Opondo-se a Mudanças' },
  { file: 'expandindo-mudancas.md', id: 'expandindo-mudancas', label: 'Expandindo Mudanças' },
  { file: 'feitos-grandiosos.md', id: 'feitos-grandiosos', label: 'Feitos Grandiosos e Grandes Aventuras' },
  { file: 'construindo.md', id: 'construindo', label: 'Construindo Edificações, Magia e Tecnologia' },
  { file: 'sociedades-governos.md', id: 'sociedades-governos', label: 'Alterando Sociedades e Governos' },
  { file: 'riqueza-como-influencia.md', id: 'riqueza-como-influencia', label: 'Usando Riqueza como Influência' },
];

const modules = import.meta.glob('../content/rules/changing-world/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const sections = SECTION_CONFIG.map(({ file, id, label }) => {
  const filePath = `../content/rules/changing-world/${file}`;
  return {
    id,
    label,
    content: modules[filePath] || ''
  };
});

export default function ChangingWorldView() {
  return <GuideLayout sections={sections}/>;
}