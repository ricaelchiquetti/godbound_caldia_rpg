import React from 'react';

export default function LoreBody({ description }) {
  if (!description) return null;

  return (
    <section className="space-y-6 text-base md:text-lg leading-loose text-justify text-stone-900 font-serif">
      <div className="first-letter:text-6xl first-letter:font-bold first-letter:text-dd-red first-letter:float-left first-letter:mr-3 first-letter:leading-none whitespace-pre-line">
        {description}
      </div>
    </section>
  );
}