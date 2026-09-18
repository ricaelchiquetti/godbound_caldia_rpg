import React, { useState } from 'react';

export default function GodCard({ deus }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-parchment-dark border-2 border-dd-gold rounded cursor-pointer overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02] shadow-md"
      >
        <div className="w-full relative overflow-hidden mb-[-30px] bg-transparent z-10">
          <img 
            src={`${import.meta.env.BASE_URL}/assets/img/panteao/${deus.img}`} 
            alt={deus.nome} 
            className="w-full h-125 object-cover object-top transition-transform duration-400 hover:scale-105"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        <div className="px-5 pb-5 pt-4 flex-1 flex flex-col justify-between relative z-0">
          <div>
            <h3 className="font-serif-title font-bold text-xl text-dd-red mb-1">
              {deus.nome}
            </h3>
            <span className="italic text-dd-red text-sm font-medium block">
              {deus.dominio}
            </span>
            <p className="mt-3 text-sm text-gray-800 leading-relaxed text-justify">
              {deus.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Habilidades */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-parchment-dark border-3 border-dd-gold p-4 md:p-6 w-full max-w-2xl max-h-[90vh] flex flex-col relative shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-4 bg-transparent border-none text-2xl font-bold cursor-pointer text-dd-red hover:text-black transition-colors z-10"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            
            <h1 className="font-serif-title text-2xl md:text-3xl font-bold text-dd-red mb-4 pr-8">
              Habilidades de {deus.nome}
            </h1>
            
            <div className="w-full overflow-auto border rounded border-dd-gold/40 shadow-inner bg-white/50 flex-grow">
              <img 
                src={`${import.meta.env.BASE_URL}/assets/img/panteao/habilidades/${deus.img}`} 
                alt={`Habilidades de ${deus.nome}`} 
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}