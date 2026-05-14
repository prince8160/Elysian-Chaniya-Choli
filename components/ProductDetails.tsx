'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, MessageCircle, ShoppingCart, Heart, Share2, Tag, ShieldCheck, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Product {
  id: string | number;
  title: string;
  originalPrice: string;
  salePrice: string;
  discount: string;
  rating: number;
  reviewsCount: number;
  image: string;
  fabric: string;
  details: string;
  sizes: string[];
  images: string[];
}

export function ProductDetails({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(product.images[0] || product.image);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-md shadow-sm border border-stone-100 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left: Image Gallery */}
        <div className="flex-1 flex flex-col md:flex-row-reverse gap-4">
          <div className="flex-1 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded border border-stone-100 bg-stone-50 group">
            <AnimatePresence mode="wait">
              <motion.div key={activeImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full h-full">
                <Image src={activeImage} alt={product.title} fill className="object-cover transition-opacity duration-300" referrerPolicy="no-referrer" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </motion.div>
            </AnimatePresence>
            <button className="absolute top-4 right-4 p-3 bg-white rounded-full shadow border border-stone-100 text-slate-400 hover:text-red-500 transition-colors z-10"><Heart className="w-5 h-5" /></button>
            <button className="absolute top-16 right-4 p-3 bg-white rounded-full shadow border border-stone-100 text-slate-400 hover:text-slate-800 transition-colors z-10"><Share2 className="w-5 h-5" /></button>
          </div>
          
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 lg:w-24 flex-shrink-0">
            {product.images.map((img, idx) => (
              <button key={idx} onClick={() => setActiveImage(img)} className={`relative w-20 md:w-full aspect-[3/4] rounded border-2 transition-all flex-shrink-0 ${activeImage === img ? 'border-maroon-700 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col pt-2">
          <div className="text-xs text-slate-500 mb-2 flex items-center gap-2">
            <span>Home</span> &gt; <span>Ethnic Weat</span> &gt; <span>Chaniya Choli</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-medium text-slate-900 mb-3">{product.title}</h1>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
              {product.rating} <Star className="w-3.5 h-3.5 ml-1 fill-current" />
            </div>
            <span className="text-slate-500 text-sm font-medium hover:text-maroon-700 hover:underline cursor-pointer">{product.reviewsCount} Ratings & Reviews</span>
          </div>

          <div className="flex items-end gap-3 mb-4">
            <span className="text-3xl font-bold text-slate-900">{product.salePrice}</span>
            <span className="text-lg text-slate-500 line-through mb-1">{product.originalPrice}</span>
            <span className="text-green-600 font-bold mb-1">{product.discount}</span>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button key={size} onClick={() => setSelectedSize(size)} className={`min-w-[3rem] h-10 px-3 flex items-center justify-center rounded border font-medium transition-all ${selectedSize === size ? 'border-maroon-700 text-maroon-800 bg-maroon-50' : 'border-stone-300 text-slate-700 hover:border-slate-400 bg-white'}`}>{size}</button>
              ))}
            </div>
            {!selectedSize && <p className="text-red-500 text-xs mt-2 font-medium">Please select a size</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button className="flex-1 py-4 bg-orange-500 text-white uppercase tracking-wider font-bold rounded shadow-sm hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"><ShoppingCart className="w-5 h-5" /> Add to Cart</button>
            <button className="flex-1 py-4 bg-maroon-800 text-white uppercase tracking-wider font-bold rounded shadow-sm hover:bg-maroon-900 transition-colors flex items-center justify-center gap-2">Buy Now</button>
          </div>

          <button className="w-full py-3 mb-8 bg-[#25D366]/10 text-[#25D366] border border-[#25D366] uppercase tracking-wider font-bold rounded shadow-sm hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> Inquire on WhatsApp</button>

          <div className="border border-stone-200 rounded divide-y divide-stone-200">
             <div className="p-4 grid grid-cols-3 gap-4"><div className="col-span-1 text-slate-500 text-sm">Fabric</div><div className="col-span-2 text-slate-800 text-sm font-medium">{product.fabric}</div></div>
             <div className="p-4 grid grid-cols-3 gap-4"><div className="col-span-1 text-slate-500 text-sm">Description</div><div className="col-span-2 text-slate-800 text-sm leading-relaxed">{product.details}</div></div>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /><span>Authentic Product</span></div>
            <div className="flex items-center gap-2"><Truck className="w-5 h-5 text-blue-600" /><span>Secure Shipping</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
