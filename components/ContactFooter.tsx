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
                      123 Elysian Way, Textile Market Road,<br/>
                      Surat, Gujarat 395002, India
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
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709444315!2d72.74109923831818!3d21.159462705193498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
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
