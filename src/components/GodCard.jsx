import { useState } from 'react';

export default function GodCard({ deus }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="god-card" onClick={() => setIsModalOpen(true)}>
        <div className="god-card-img-container">
          <img 
            src={`/assets/img/panteao/${deus.img}`} 
            alt={deus.nome} 
          />
        </div>
        <div className="god-card-content">
          <h3 style={{ margin: '0 0 5px 0' }}>{deus.nome}</h3>
          <span style={{ fontStyle: 'italic', color: 'var(--dd-red)', fontSize: '0.9em' }}>
            {deus.dominio}
          </span>
          <p style={{ marginTop: '15px', fontSize: '0.9em' }}>{deus.desc}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="god-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="god-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="god-modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <h1>Habilidades de {deus.nome}</h1>
            <div className="god-modal-img-wrapper">
              <img 
                src={`/assets/img/panteao/habilidades/${deus.img}`} 
                alt={`Habilidades de ${deus.nome}`} 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}