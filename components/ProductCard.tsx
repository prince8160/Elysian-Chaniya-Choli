'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';

interface Product {
  id: string | number;
  title: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Link href={`/product/${product.id}`} className="group flex flex-col bg-white overflow-hidden hover:shadow-lg transition-all duration-300 h-full relative">
      <div className="aspect-[3/4] w-full relative bg-stone-50 overflow-hidden">
        {product.image ? (
          <Image 
            src={product.image} 
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">No Image</div>
        )}
        
        {/* Badges */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
            {discount}% OFF
          </div>
        )}
        
        {/* Wishlist Button */}
        <button 
          className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-rose-500 hover:bg-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Wishlist logic would go here
          }}
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-slate-800 text-sm md:text-base line-clamp-2 mb-1 group-hover:text-maroon-800 transition-colors uppercase tracking-wide leading-tight">{product.title}</h3>
        
        {/* Ratings */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className={`w-3.5 h-3.5 ${star <= (product.rating || 5) ? 'fill-amber-400' : 'fill-stone-200 text-stone-200'}`} />
            ))}
          </div>
          <span className="text-xs text-slate-500">({product.reviews || Math.floor(Math.random() * 100) + 10})</span>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <p className="font-bold text-slate-900 text-sm md:text-base">₹{product.price.toLocaleString()}</p>
          {product.originalPrice && (
            <p className="text-xs md:text-sm text-slate-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
