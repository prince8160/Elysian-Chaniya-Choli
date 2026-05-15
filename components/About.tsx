'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Sparkles, Factory, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-10 md:p-14 lg:p-20 flex flex-col justify-center">
              <span className="text-maroon-800 tracking-widest uppercase text-xs font-bold mb-3 block">About Elysian</span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Authentic Gujarati Elegance</h2>
              
              <p className="text-slate-600 font-light text-base leading-relaxed mb-8">
                Based in Deesa, a cultural hub of Gujarat, Elysian is a premium fashion boutique dedicated exclusively to preserving and elevating authentic Chaniya Cholis. We blend traditional Gujarati artisanal techniques with premium comfortable fabrics.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-50 p-3 rounded-lg text-gold-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Handmade Details</h4>
                    <p className="text-sm text-slate-500 font-light mt-1">Intricate mirror work, Zardosi, and traditional Ahir embroidery crafted by master artisans.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-50 p-3 rounded-lg text-gold-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Premium Fabrics</h4>
                    <p className="text-sm text-slate-500 font-light mt-1">Using the finest pure silk, breathable cotton prints, and luxurious organza.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-50 p-3 rounded-lg text-gold-600">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Deesa Based Boutique</h4>
                    <p className="text-sm text-slate-500 font-light mt-1">Directly sourced and meticulously quality-checked at our advanced facility in Gujarat.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 lg:h-auto min-h-[400px]">
               <Image
                src="/images/products/download (4).jpg"
                alt="Artisan working on Chaniya Choli embroidery"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
