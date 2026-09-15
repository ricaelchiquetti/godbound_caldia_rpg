import React from 'react';
import PageLayout from '../components/PageLayout';
import { attributesRulesData } from '../data/attributesRulesData';

export default function AttributesRulesView() {
  const data = attributesRulesData;

  return (
    <PageLayout title={data.title}>
      <div style={{ padding: '30px', background: 'rgba(255,255,255,0.88)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', color: '#2c2c2c', lineHeight: '1.6' }}>
        
        {/* Rolar Atributos */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', color: '#554215' }}>
          Rolar Atributos (Rolling Attributes)
        </h3>
        {data.rollingAttributesIntro.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        {/* Lista dos Seis Atributos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px', marginBottom: '20px' }}>
          {data.attributesList.map((attr, index) => (
            <div key={index} style={{ background: 'rgba(0,0,0,0.02)', padding: '15px', borderLeft: '4px solid var(--dd-gold)' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{attr.name}</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>{attr.desc}</p>
            </div>
          ))}
        </div>

        {/* Métodos de Geração */}
        {data.generationMethods.map((method, idx) => (
          <p key={idx}>{method}</p>
        ))}

        {/* Modificadores de Atributo */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          Modificadores de Atributo (Attribute Modifiers)
        </h3>
        <p>{data.modifierIntro}</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', marginBottom: '25px', background: '#fff' }}>
          <thead>
            <tr style={{ background: 'rgba(212, 175, 55, 0.2)', borderBottom: '2px solid var(--dd-gold)' }}>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>Pontuação do Atributo</th>
              <th style={{ padding: '10px', textAlign: 'left', color: '#554215' }}>Modificador</th>
            </tr>
          </thead>
          <tbody>
            {data.modifierTable.map((row, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>{row.score}</td>
                <td style={{ padding: '10px', color: row.mod.includes('+') ? 'green' : row.mod.includes('-') ? 'crimson' : '#555' }}>{row.mod}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Testes de Atributo */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          Testes de Atributo (Attribute Checks)
        </h3>
        {data.attributeChecks.map((check, idx) => (
          <p key={idx}>{check}</p>
        ))}

        {/* Testes de Resistência */}
        <h3 style={{ borderBottom: '2px solid var(--dd-gold)', paddingBottom: '8px', marginTop: '35px', color: '#554215' }}>
          Testes de Resistência (Saving Throws)
        </h3>
        {data.savingThrowsIntro.map((stIntro, idx) => (
          <p key={idx}>{stIntro}</p>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px', marginBottom: '20px' }}>
          {data.savingThrowsList.map((save, index) => (
            <div key={index} style={{ background: 'rgba(0,0,0,0.02)', padding: '15px', borderLeft: '4px solid #8c7833' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>{save.name}</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>{save.desc}</p>
            </div>
          ))}
        </div>

        <p>{data.savingThrowsOutro}</p>

      </div>
    </PageLayout>
  );
}