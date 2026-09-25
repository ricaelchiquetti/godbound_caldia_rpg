import MarkdownDocView from '../components/MarkdownDocView';
import content from '../content/rules/cults/intro.md?raw'


export default function CultsView () {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto p-6">
      <MarkdownDocView content={content} />
    </div>
  );
}