import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function ContactFooter() {
  return (
    <footer className="bg-stone-100 mt-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-8 border-b border-stone-200 pb-4 inline-block">Visit Our Store</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-maroon-800 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Elysian Boutique</h4>
                  <p className="text-slate-600 font-light leading-relaxed">
                    SHOP NO 08, Bhoyan Rd,<br/>
                    near PRITAM NAGAR, opp. APMC MARKET,<br/>
                    Deesa, Gujarat 385535
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-maroon-800 shrink-0" />
                <p className="text-slate-600 font-light">+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-maroon-800 shrink-0" />
                <p className="text-slate-600 font-light">hello@elysian-chaniya-choli.com</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-maroon-800 hover:shadow-md transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-maroon-800 hover:shadow-md transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[400px] bg-stone-200 rounded-lg overflow-hidden border border-stone-300 shadow-sm relative">
            <iframe 
                src="https://maps.google.com/maps?q=SHOP%20NO%2008,%20Bhoyan%20Rd,%20near%20PRITAM%20NAGAR,%20opp.%20APMC%20MARKET,%20Deesa,%20Gujarat%20385535+(Elysian)&t=&z=17&ie=UTF8&iwloc=B&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
            />
          </div>

        </div>
      </div>
      <div className="bg-stone-900 text-stone-400 text-center py-4 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Elysian. All rights reserved.</p>
      </div>
    </footer>
  );
}
