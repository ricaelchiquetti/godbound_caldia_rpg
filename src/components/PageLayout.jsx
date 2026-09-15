import React from 'react';

export default function PageLayout({ title, children }) {
  return (
    <div className="content-container">
      {title && <h1>{title}</h1>}
      <hr className="tapered-rule" />
      {children}
    </div>
  );
}