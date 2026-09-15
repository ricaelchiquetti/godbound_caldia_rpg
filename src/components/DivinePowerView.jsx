import MarkdownDocView from '../components/MarkdownDocView';
import content from '../content/rules/divine-power/intro.md?raw'


export default function DivinePowerView () {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto p-6">
      <MarkdownDocView content={content} />
    </div>
  );
}