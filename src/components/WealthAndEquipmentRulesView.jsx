import React from 'react';
import PageLayout from '../components/PageLayout';
import { wealthAndEquipmentRulesData } from '../data/wealthAndEquipmentRulesData';

export default function WealthAndEquipmentRulesView() {
  const data = wealthAndEquipmentRulesData;

  return (
    <PageLayout title={`${data.title}`}>
      <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
        
        {/* Riqueza e Equipamentos */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', color: '#554215' }}>
          Riqueza e Equipamentos (Wealth and Equipment)
        </h3>
        {data.wealthIntro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* Armadura */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          Armadura (Armor)
        </h3>
        {data.armorIntro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', marginBottom: '20px', background: '#fff' }}>
          <thead>
            <tr style={{ background: 'rgba(212, 175, 55, 0.2)', borderBottom: '2px solid var(--dd-gold)' }}>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>Tipo (Type)</th>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>AC Base</th>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>Descrição / Efeito</th>
            </tr>
          </thead>
          <tbody>
            {data.armorTable.map((row, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>{row.type}</td>
                <td style={{ padding: '10px', color: '#8c7833', fontWeight: 'bold' }}>{row.ac}</td>
                <td style={{ padding: '10px', color: '#555' }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Armas */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          Armas (Weapons)
        </h3>
        {data.weaponsIntro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', marginBottom: '15px', background: '#fff' }}>
          <thead>
            <tr style={{ background: 'rgba(212, 175, 55, 0.2)', borderBottom: '2px solid var(--dd-gold)' }}>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>Tipo de Arma</th>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>Dano</th>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>Atributo</th>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>Exemplos</th>
            </tr>
          </thead>
          <tbody>
            {data.weaponsTable.map((row, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>{row.type}</td>
                <td style={{ padding: '10px', color: '#8c7833', fontWeight: 'bold' }}>{row.damage}</td>
                <td style={{ padding: '10px' }}>{row.attr}</td>
                <td style={{ padding: '10px', color: '#555' }}>{row.examples}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Notas de Regras de Armas */}
        <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '15px', border: '1px solid var(--dd-gold)', marginTop: '15px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#8c7833' }}>Detalhes Adicionais de Combate e Alcance</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#444' }}>
            {data.weaponsRulesNotes.map((note, index) => (
              <li key={index} style={{ marginBottom: '5px', fontSize: '0.95rem' }}>{note}</li>
            ))}
          </ul>
        </div>

      </div>
    </PageLayout>
  );
}