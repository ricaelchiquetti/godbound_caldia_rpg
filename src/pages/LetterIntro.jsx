import React from 'react';
import PageLayout from '../components/PageLayout';

export default function LetterIntro() {
  return (
    <PageLayout title="O Continente de Caldia">
      <div style={{ padding: '30px', background: 'rgba(255,255,255,0.3)', border: '1px solid var(--dd-gold)', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
        <p className="drop-cap">
          Meu estimado colega, escrevo-lhe estas palavras com a urgência que os tempos exigem. Há cerca de 10.000 anos, nosso lar, Caldia, era habitado pelo imponente povo de Allag, uma civilização dotada de conhecimentos que beiravam o divino. Hoje, caminhamos sobre seus ossos. Restam apenas ruínas, anotações e artefatos perdidos pela terra. Tais relíquias concedem um poder inenarrável àqueles que as portam, além de possuírem um valor inestimável nos mercados ocultos do Ducado de Aetergard.
        </p>
        <p style={{ marginTop: '15px' }}>
          O mundo fragmentou-se. Da cordilheira das Espinhas do Mundo até o arquipélago dos Reinos de Ferro, forças se reúnem. Falsos deuses e seus receptáculos caminham entre os mortais. Que este compêndio sirva como seu guia. Confie apenas na lâmina e no conhecimento documentado nestas páginas.
        </p>
        <p style={{ textAlign: 'right', marginTop: '20px', fontStyle: 'italic', color: 'var(--dd-red)' }}>
          - Arquivista Chefe de Aetergard
        </p>
      </div>
    </PageLayout>
  );
}