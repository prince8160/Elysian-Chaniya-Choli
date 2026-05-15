'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import { MessageCircle, ShoppingCart, Tag, ShieldCheck, Truck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ContactFooter } from '@/components/ContactFooter';
import { products } from '@/lib/data';

interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  image: string;
  fabric: string;
  work: string;
  color: string;
  description: string;
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find(p => p.id === resolvedParams.id);
  const [activeImage, setActiveImage] = useState<string | null>(product?.image || null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-xl pt-24">Product not found</div>;
  }

  const imagesList = product.images?.length ? product.images : [product.image];

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-10">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-stone-100 p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Image Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
               {/* Thumbnails */}
               <div className="flex md:flex-col gap-2 overflow-x-auto md:w-20 shrink-0">
                  {imagesList.map((img, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-[3/4] w-16 md:w-full border-2 rounded overflow-hidden flex-shrink-0 ${activeImage === img ? 'border-maroon-800' : 'border-transparent'}`}
                    >
                      <Image src={img} alt={`View ${i}`} fill className="object-cover object-top" sizes="100px" referrerPolicy="no-referrer" />
                    </button>
                  ))}
               </div>
               
               {/* Main Image */}
               <div className="relative aspect-[3/4] w-full flex-grow bg-stone-100 rounded-lg overflow-hidden">
                 {activeImage ? (
                    <Image src={activeImage} alt={product.title} fill className="object-cover object-top" priority sizes="(max-width: 768px) 100vw, 50vw" referrerPolicy="no-referrer" />
                 ) : (
                    <div className="absolute inset-0 flex items-center justify-center">No Image</div>
                 )}
               </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">{product.title}</h1>
              <p className="text-3xl font-bold text-slate-900 mb-6 font-serif">₹{product.price.toLocaleString()}</p>
              
              <p className="text-slate-600 font-light mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-3 uppercase tracking-wider text-sm">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button 
                      key={size} 
                      onClick={() => setSelectedSize(size)} 
                      className={`min-w-[3rem] h-10 px-3 flex items-center justify-center rounded border font-medium transition-all ${selectedSize === size ? 'border-maroon-700 text-maroon-800 bg-maroon-50' : 'border-stone-300 text-slate-700 hover:border-slate-400 bg-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button className="flex-1 py-4 bg-maroon-800 text-white uppercase tracking-wider font-bold rounded hover:bg-maroon-900 transition-colors">
                  Add to Cart
                </button>
              </div>
              
              <button className="w-full py-4 mb-8 bg-[#25D366]/10 text-[#25D366] border border-[#25D366] uppercase tracking-wider font-bold rounded hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2">
                 <MessageCircle className="w-5 h-5" /> Inquire on WhatsApp
              </button>

              <div className="border border-stone-200 rounded divide-y divide-stone-200 mb-8">
                 <div className="p-4 grid grid-cols-3 gap-4">
                   <div className="col-span-1 text-slate-500 text-sm">Fabric</div>
                   <div className="col-span-2 text-slate-800 text-sm font-medium">{product.fabric}</div>
                 </div>
                 <div className="p-4 grid grid-cols-3 gap-4">
                   <div className="col-span-1 text-slate-500 text-sm">Work</div>
                   <div className="col-span-2 text-slate-800 text-sm font-medium">{product.work}</div>
                 </div>
                 <div className="p-4 grid grid-cols-3 gap-4">
                   <div className="col-span-1 text-slate-500 text-sm">Color</div>
                   <div className="col-span-2 text-slate-800 text-sm font-medium">{product.color}</div>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded">
                  <ShieldCheck className="w-6 h-6 text-maroon-700" />
                  <span className="text-xs font-semibold uppercase">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded">
                  <Truck className="w-6 h-6 text-maroon-700" />
                  <span className="text-xs font-semibold uppercase">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded">
                  <Tag className="w-6 h-6 text-maroon-700" />
                  <span className="text-xs font-semibold uppercase">100% Original</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <ContactFooter />
    </div>
  );
}
