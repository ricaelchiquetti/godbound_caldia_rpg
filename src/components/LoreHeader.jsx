import React from 'react';

export default function LoreHeader({ 
  title, 
  category = "Nações & Territórios", 
  image, 
  imageCaption 
}) {
  return (
    <header className="text-center space-y-4 border-b-2 border-dd-gold/60 pb-8">
      <span className="text-xs font-sans tracking-widest uppercase text-dd-red/80 font-bold">
        {category}
      </span>
      
      <h1 className="text-4xl md:text-5xl font-bold text-dd-red tracking-wide">
        {title}
      </h1>
      
      <div className="flex items-center justify-center gap-3 text-dd-gold my-2">
        <span className="h-[1px] w-12 bg-dd-gold/60"></span>
        <span className="text-xs">✦</span>
        <span className="h-[1px] w-12 bg-dd-gold/60"></span>
      </div>

      {image && (
        <div className="relative pt-2 -mx-6 md:-mx-12 my-4 flex flex-col items-center justify-center overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}/assets/img/${image}`} 
            alt={title} 
            className="w-full h-[320px] md:h-[450px] object-cover mix-blend-multiply contrast-125 sepia-[50%] opacity-90"
            style={{
              WebkitMaskImage: `url("${import.meta.env.BASE_URL}assets/img/mask-image.png")`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center center',
              WebkitMaskSize: 'contain',

              maskImage: `url("${import.meta.env.BASE_URL}assets/img/mask-image
              .png")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center center',
              maskSize: 'contain',
            }}
          />
          {imageCaption && (
            <span className="block text-xs italic text-stone-600 mt-2 text-center">
              {imageCaption}
            </span>
          )}
        </div>
      )}
    </header>
  );
}