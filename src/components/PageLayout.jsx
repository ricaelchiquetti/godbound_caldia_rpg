import React from 'react';

export default function PageLayout({ title, children }) {
  return (
    <div className="content-container w-[92%] md:max-w-[80%] mx-auto my-4 md:my-8">
      {title && <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>}
      <hr className="tapered-rule" />
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}