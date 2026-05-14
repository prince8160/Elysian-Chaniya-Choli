'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: "Priya Sharma",
    photo: "/images/products/download (1).jpg",
    text: "The embroidery on my bridal lehenga was breathtaking. Every detail was perfect, and the customer service was exceptional.",
  },
  {
    name: "Aarti Patel",
    photo: "/images/products/download (2).jpg",
    text: "Ordered a custom Navratri Chaniya Choli. The fabric quality is luxurious and the mirror work is simply outstanding.",
  },
  {
    name: "Neha Desai",
    photo: "/images/products/download.jpg",
    text: "Their fitting is impeccable. They arranged a video call to take my measurements and delivered exactly what I envisioned.",
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-stone-200" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 relative">
          <span className="text-gold-500 tracking-[0.2em] uppercase text-sm font-medium mb-3 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Beloved Clients</h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-8" />
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-stone-50 p-10 outline outline-1 outline-stone-200 relative flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6 ring-2 ring-gold-400 ring-offset-2 ring-offset-stone-50">
                <Image src={review.photo} alt={review.name} fill className="object-cover" />
              </div>
              <div className="flex text-gold-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current mx-0.5" />)}
              </div>
              <p className="text-slate-600 font-light italic text-lg leading-relaxed mb-8 flex-grow">&quot;{review.text}&quot;</p>
              
              <div>
                <h4 className="font-serif text-maroon-900 text-lg">{review.name}</h4>
                <span className="text-xs uppercase tracking-widest text-slate-500">Verified Buyer</span>
              </div>
              
              {/* Quote Mark Deco */}
              <span className="absolute top-6 left-8 text-6xl font-serif text-stone-200/50 leading-none select-none">&quot;</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
