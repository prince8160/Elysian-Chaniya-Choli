'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { Navbar } from '@/components/Navbar';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 pt-[72px] flex items-center justify-center">
        <div className="text-slate-500">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-stone-50 pt-[72px] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-serif text-slate-800 mb-4">Please log in</h1>
        <p className="text-slate-600 mb-6">You need to be logged in to view your profile.</p>
        <Link href="/" className="px-6 py-2 bg-maroon-800 text-white rounded-md hover:bg-maroon-900 transition-colors">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-[72px]">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white p-8 shadow-sm rounded-lg border border-stone-200 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-3xl text-slate-500 font-serif overflow-hidden border border-stone-200">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                (user.displayName || user.email || 'U').charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <h1 className="text-2xl font-serif text-slate-900">{user.displayName || 'Customer'}</h1>
              <p className="text-slate-500">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 shadow-sm rounded-lg border border-stone-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-serif text-slate-900 border-b border-stone-200 pb-2 inline-block">Your Orders</h2>
          </div>
          
          <div className="text-center py-12 text-slate-500">
            <p>You have no recent orders.</p>
            <Link href="/" className="inline-block mt-4 px-6 py-2 bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
