'use client';

import { ProductCard } from './ProductCard';

interface Product {
  id: string | number;
  title: string;
  price: number;
  image: string;
}

interface ProductSliderProps {
  title: string;
  products: Product[];
}

export function ProductSlider({ title, products }: ProductSliderProps) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-serif text-slate-900">{title}</h2>
          <button className="text-sm font-semibold text-maroon-800 hover:underline uppercase tracking-wider">
            View All
          </button>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {products.map((product) => (
            <div key={product.id} className="min-w-[160px] md:min-w-[220px] lg:min-w-[260px] max-w-[260px] flex-shrink-0 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
