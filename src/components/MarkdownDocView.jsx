import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PageLayout from './PageLayout';

export default function MarkdownDocView({ title, content }) {
  return (
    <PageLayout title={title}>
      <div className="markdown-content">
        <div className="p-8 bg-white/90 border border-[var(--dd-gold)] shadow-lg text-[#2c2c2c] leading-relaxed rounded-sm">
          <article className="space-y-4 text-justify text-gray-800 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-[#554215] [&_h1]:mb-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#554215] [&_h2]:border-b-2 [&_h2]:border-[var(--dd-gold)] [&_h2]:pb-2 [&_h2]:mt-10 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_hr]:my-8 [&_hr]:border-[var(--dd-gold)]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </PageLayout>
  );
}