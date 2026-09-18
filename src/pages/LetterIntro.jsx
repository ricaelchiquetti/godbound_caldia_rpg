import React from 'react';
import PageLayout from '../components/PageLayout';

export default function LetterIntro() {
  return (
    <PageLayout title="O Continente de Caldia">
      <div className="p-4 md:p-8 bg-white/40 border border-dd-gold shadow-md rounded-sm">
        <p className="drop-cap text-justify leading-relaxed text-gray-800">
          Meu estimado colega, escrevo-lhe estas palavras com a urgência que os tempos exigem. Há cerca de 10.000 anos, nosso lar, Caldia, era habitado pelo imponente povo de Allag, uma civilização dotada de conhecimentos que beiravam o divino. Hoje, caminhamos sobre seus ossos. Restam apenas ruínas, anotações e artefatos perdidos pela terra. Tais relíquias concedem um poder inenarrável àqueles que as portam, além de possuírem um valor inestimável nos mercados ocultos do Ducado de Aetergard.
        </p>
        
        <p className="mt-4 text-justify leading-relaxed text-gray-800">
          O mundo fragmentou-se. Da cordilheira das Espinhas do Mundo até o arquipélago dos Reinos de Ferro, forças se reúnem. Falsos deuses e seus receptáculos caminham entre os mortais. Que este compêndio sirva como seu guia. Confie apenas na lâmina e no conhecimento documentado nestas páginas.
        </p>
        
        <p className="text-right mt-6 italic text-dd-red font-serif">
          - Arquivista Chefe de Aetergard
        </p>
      </div>
    </PageLayout>
  );
}