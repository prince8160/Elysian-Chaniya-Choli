'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search, MessageCircle, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#collections' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-stone-100 py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-4 lg:gap-8">
            
            {/* Mobile menu button & Logo */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                type="button"
                className="lg:hidden p-2 -ml-2 rounded-md text-slate-800"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>

              <Link href="/" className="flex flex-col items-start group">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-maroon-900 group-hover:text-gold-500 transition-colors">
                  ELYSIAN
                </span>
                <span className="text-[0.5rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-slate-500 font-medium">
                  Chaniya Choli
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-maroon-800 transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Center Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-auto relative group">
              <input 
                type="text" 
                placeholder="Search for Chaniya Choli, mirror work, colors..."
                className="w-full bg-stone-100/80 border border-transparent text-slate-800 text-sm rounded-sm pl-4 pr-12 py-2.5 focus:outline-none focus:border-maroon-200 focus:bg-white transition-all group-hover:bg-white group-hover:border-stone-200 shadow-inner"
              />
              <div className="absolute right-0 top-0 bottom-0 px-4 bg-maroon-50 text-maroon-900 flex items-center justify-center rounded-r-sm cursor-pointer hover:bg-maroon-100 transition-colors">
                <Search className="h-5 w-5" />
              </div>
            </div>

            {/* Right Action */}
            <div className="flex items-center justify-end flex-shrink-0 gap-4">
              <Link href="#" className="hidden sm:flex text-slate-700 hover:text-maroon-800">
                <ShoppingCart className="w-6 h-6" />
              </Link>
              <a 
                href="#"
                className="flex items-center gap-2 px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1ebd5b] transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5 hidden sm:block" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile Search Bar - Shows below header on small screens */}
          <div className="mt-3 md:hidden relative flex">
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full bg-stone-100 border border-transparent text-slate-800 text-sm rounded-l-sm pl-4 pr-3 py-2.5 focus:outline-none focus:bg-white focus:border-stone-200 transition-colors"
            />
            <div className="bg-maroon-50 text-maroon-900 px-4 rounded-r-sm flex items-center justify-center">
              <Search className="h-5 w-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-5 flex justify-between items-center border-b border-stone-100 bg-stone-50">
                <div>
                  <span className="font-serif text-2xl font-bold text-maroon-900 block">ELYSIAN</span>
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-slate-500">Chaniya Choli</span>
                </div>
                <button
                  type="button"
                  className="p-2 bg-white rounded-full text-slate-500 hover:text-slate-800 shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="py-4 px-2 flex flex-col overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-semibold uppercase tracking-wider text-slate-700 hover:text-maroon-800 hover:bg-stone-50 px-4 py-3 rounded-lg mx-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto p-6 bg-stone-50 border-t border-stone-200">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white rounded-lg uppercase tracking-widest text-sm font-bold hover:bg-[#1ebd5b] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Inquiry
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
