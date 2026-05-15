import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';

export function HeroBanner() {
  const bannerImage = products.length > 0 ? products[0].image : 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80';
  
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] bg-stone-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <Image
        src={bannerImage}
        alt="Elysian Chaniya Choli Collection"
        fill
        className="object-cover object-top opacity-80"
        priority
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">
          The Navratri Edit 2026
        </h1>
        <p className="text-lg md:text-xl text-stone-200 font-light max-w-2xl mb-8 drop-shadow">
          Handcrafted Chaniya Cholis authentic to Gujarat. Embrace the festivity with elegance.
        </p>
        <Link 
          href="#collection" 
          className="px-8 py-3 bg-maroon-800 text-white font-bold tracking-wider uppercase text-sm hover:bg-maroon-900 transition-colors shadow-lg"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  );
}
