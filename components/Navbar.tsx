'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search, MessageCircle, ShoppingCart, Calendar, LogIn, User as UserIcon, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from './AuthProvider';
import { signOut } from '@/lib/auth';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading, openAuthModal } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white/80 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-slate-900 tracking-wide">
            ELYSIAN
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <input 
              type="text" 
              placeholder="Search for authentic styles..." 
              className="w-full pl-10 pr-4 py-2 bg-stone-100 border-none rounded-full text-sm focus:ring-2 focus:ring-maroon-800 outline-none"
            />
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/#collection" className="hidden md:block text-sm font-medium text-slate-600 hover:text-maroon-800 uppercase tracking-wide">
              Shop Now
            </Link>
            <Link href="#" className="hidden sm:block text-slate-600 hover:text-maroon-800">
              <ShoppingCart className="w-5 h-5" />
            </Link>

            <div className="relative">
              {!loading && user ? (
                <div 
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm text-slate-500 font-serif overflow-hidden border border-stone-200">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      (user.displayName || user.email || 'U').charAt(0).toUpperCase()
                    )}
                  </div>
                  {showDropdown && (
                    <div className="absolute right-0 top-12 w-48 bg-white border border-stone-100 shadow-xl rounded-md py-2 z-50">
                      <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-stone-50">
                        <UserIcon className="w-4 h-4" /> Profile & Orders
                      </Link>
                      <button onClick={signOut} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:bg-stone-50 text-left">
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : !loading && (
                <button onClick={openAuthModal} className="flex items-center gap-2 text-slate-600 hover:text-maroon-800 transition-colors">
                  <LogIn className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm font-medium">Sign In</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white pt-20 px-6">
          <button className="absolute top-6 right-6 p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>
             <X className="w-6 h-6" />
          </button>
          
          <div className="relative mb-8">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-3 bg-stone-100 border-none rounded-md text-sm focus:ring-2 focus:ring-maroon-800 outline-none"
            />
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          <div className="flex flex-col gap-6 text-lg font-serif mb-8">
            <Link href="/" className="text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/#collection" className="text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link href="/?page=1#collection" className="text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
