import React from 'react';

export default function NpcCard({ npc }) {
  return (
    <div className="npc-card">
      <img 
        src={`/assets/img/personagens/${npc.img}`} 
        alt={npc.nome} 
      />
      <div>
        <h4 style={{ margin: '0 0 5px 0' }}>{npc.nome}</h4>
        <span style={{ fontSize: '0.9em', color: 'var(--dd-red)', fontWeight: 'bold' }}>
          {npc.funcao}
        </span>
        <p style={{ margin: '5px 0 0 0', fontSize: '0.95em' }}>{npc.desc}</p>
      </div>
    </div>
  );
}