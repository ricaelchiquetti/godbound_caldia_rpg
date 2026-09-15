import React from 'react';

export default function CharacterCard({ personagem }) {
  return (
    <div className="character-card">
      <div className="character-header">
        <img 
          src={`${import.meta.env.BASE_URL}/assets/img/personagens/${personagem.img}`} 
          alt={personagem.nome} 
          onError={(e) => e.target.src = 'https://via.placeholder.com/90/58180d/e8d5b5?text=PJ'} 
        />
        <div>
          <h3 style={{ margin: '0 0 5px 0' }}>{personagem.nome}</h3>
          <div style={{ fontSize: '0.9em', color: 'var(--dd-red)', fontWeight: 'bold' }}>
            {personagem.raca} {personagem.classe} (Nív. {personagem.nivel})
          </div>
          <div style={{ fontSize: '0.8em', fontStyle: 'italic', marginTop: '3px' }}>
            Jogador: {personagem.jogador}
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.95em', margin: 0, flexGrow: 1 }}>
        {personagem.historia}
      </p>
    </div>
  );
}