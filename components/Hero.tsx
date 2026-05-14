'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-stone-900 mt-[104px] md:mt-[76px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/xl-2034maroon-aradhna-original-imaherumkgzckuba.webp"
          alt="Traditional Gujarati Fashion Chaniya Choli"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-left">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="mb-4">
            <span className="text-gold-400 tracking-[0.2em] uppercase text-xs md:text-sm font-bold bg-black/30 px-3 py-1 rounded inline-block">Authentic Gujarati Fashion</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-lg">
            Premium Chaniya Choli Collection
          </h1>

          <p className="text-base md:text-lg text-cream-100/90 font-light mb-8 max-w-xl drop-shadow">
            Explore our curated selection of elegant traditional outfits featuring exquisite mirror work, rich fabrics, and majestic designs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#collections"
              className="px-8 py-3.5 bg-maroon-800 text-white uppercase tracking-wider text-sm font-semibold hover:bg-maroon-700 transition-colors rounded-md shadow-lg shadow-maroon-900/30 w-full sm:w-auto text-center"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-maroon-900 transition-all rounded-md w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
