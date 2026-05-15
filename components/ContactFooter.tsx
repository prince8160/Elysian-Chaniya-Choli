'use client';

import { MapPin, Phone, MessageCircle, Instagram } from 'lucide-react';
import Link from 'next/link';

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 relative">
            <span className="text-gold-500 tracking-[0.2em] uppercase text-sm font-medium mb-3 block">Get in Touch</span>
            <h2 className="text-4xl font-serif text-slate-900 mb-4">Contact Us</h2>
            <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-8" />
          </div>

          <div className="bg-white shadow-xl flex flex-col lg:flex-row overflow-hidden border border-stone-200">
            
            {/* Contact Details */}
            <div className="flex-1 bg-white p-10 lg:p-14">
              <h3 className="text-2xl font-serif text-slate-900 mb-8">Boutique Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      SHOP NO 08, Bhoyan Rd,<br/>
                      near PRITAM NAGAR, opp. APMC MARKET,<br/>
                      Deesa, Gujarat 385535
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600 font-light text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-[#25D366] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-slate-900 mb-1">WhatsApp</h4>
                    <p className="text-slate-600 font-light text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-stone-100">
                 <h4 className="font-serif text-lg text-slate-900 mb-4">Send an Inquiry</h4>
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm transition-colors" />
                    <input type="tel" placeholder="Mobile Number" className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm transition-colors" />
                    <textarea rows={3} placeholder="Message" className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm transition-colors resize-none"></textarea>
                    <button className="px-8 py-3 bg-slate-900 text-white uppercase tracking-widest text-xs font-semibold hover:bg-gold-500 transition-colors w-full">
                      Submit request
                    </button>
                 </form>
              </div>
            </div>

            {/* Google Map */}
            <div className="flex-[1.2] bg-stone-200 min-h-[400px] lg:min-h-auto relative grayscale opacity-90 contrast-125 transition-all hover:grayscale-0 hover:opacity-100 duration-500">
               <iframe 
                 src="https://maps.google.com/maps?q=SHOP%20NO%2008,%20Bhoyan%20Rd,%20near%20PRITAM%20NAGAR,%20opp.%20APMC%20MARKET,%20Deesa,%20Gujarat%20385535+(Elysian)&t=&z=17&ie=UTF8&iwloc=B&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 w-full h-full"
               ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            
            <Link href="#" className="flex flex-col items-center md:items-start group">
              <span className="font-serif text-3xl font-medium tracking-wider text-white">
                ELYSIAN
              </span>
              <span className="text-[0.6rem] tracking-[0.3em] uppercase mt-1 text-slate-500">
                Ethnic Couture
              </span>
            </Link>

            <div className="flex gap-8 text-sm font-light uppercase tracking-wider text-slate-400">
               <a href="#" className="hover:text-gold-400 transition-colors">Home</a>
               <a href="#collection" className="hover:text-gold-400 transition-colors">Collection</a>
               <a href="#about" className="hover:text-gold-400 transition-colors">About</a>
               <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-slate-900 hover:border-gold-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

          </div>

          <div className="border-t border-slate-800/50 pt-8 flex text-center justify-center text-slate-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Elysian Ethnic Couture. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
