'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Heart, Eye, Star } from 'lucide-react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string | number;
  title: string;
  originalPrice: string;
  salePrice: string;
  discount: string;
  rating: number;
  reviewsCount: number;
  image: string;
  imageHover: string;
  fabric: string;
  sizes: string[];
}

interface ProductSliderProps {
  title: string;
  products: Product[];
  bgColor?: string;
}

export function ProductSlider({ title, products, bgColor = 'bg-white' }: ProductSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className={`pt-4 pb-6 px-4 md:px-6 relative ${bgColor}`}>
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-800">{title}</h2>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-8 h-8 rounded bg-white shadow-sm border border-stone-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-8 h-8 rounded bg-white shadow-sm border border-stone-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar items-stretch py-2 pl-1 pr-4 -ml-1"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {products.map((product) => (
              <div 
                key={product.id}
                className="w-[200px] sm:w-[220px] md:w-[240px] h-full flex-shrink-0 snap-start group bg-white rounded shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgb(0,0,0,0.08)] transition-shadow duration-200 border border-stone-100 overflow-hidden flex flex-col relative"
              >
                <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-stone-50 flex-shrink-0">
                  <div className="absolute top-2 left-2 z-20 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {product.discount}
                  </div>
                  
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, 240px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>

                <div className="p-3 md:p-4 flex-grow flex flex-col justify-between">
                  <Link href={`/product/${product.id}`} className="block">
                    <h3 className="text-[13px] md:text-sm text-slate-800 font-medium leading-tight mb-1 truncate hover:text-maroon-700 transition-colors" title={product.title}>
                      {product.title}
                    </h3>
                    <p className="text-slate-500 text-[11px] md:text-xs truncate mb-2">{product.fabric}</p>
                    
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded text-[10px] font-bold">
                        {product.rating} <Star className="w-2.5 h-2.5 ml-0.5 fill-current" />
                      </div>
                      <span className="text-slate-400 text-[11px] md:text-xs font-light">({product.reviewsCount})</span>
                    </div>

                    <div className="flex items-baseline gap-1.5">
                      <span className="text-slate-900 font-bold text-sm md:text-base">{product.salePrice}</span>
                      <span className="text-slate-400 text-[11px] md:text-xs line-through">{product.originalPrice}</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
