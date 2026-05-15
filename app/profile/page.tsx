'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { Navbar } from '@/components/Navbar';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

interface Appointment {
  id: string;
  date: string;
  time: string;
  purpose: string;
  status: string;
  createdAt: any;
}

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      if (!user) return;
      
      try {
        const q = query(
          collection(db, 'appointments'),
          where('userId', '==', user.uid)
        );
        
        const querySnapshot = await getDocs(q);
        const fetched = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Appointment[];
        
        fetched.sort((a, b) => {
          const dateA = a.createdAt?.toMillis?.() || 0;
          const dateB = b.createdAt?.toMillis?.() || 0;
          return dateB - dateA;
        });
        
        setAppointments(fetched);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setFetching(false);
      }
    }

    if (!loading) {
      if (user) {
        fetchBookings();
      } else {
        setFetching(false);
      }
    }
  }, [user, loading]);

  if (loading || fetching) {
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
            <h2 className="text-xl font-serif text-slate-900 border-b border-stone-200 pb-2 inline-block">Your Appointments</h2>
            <Link href="/book" className="text-sm font-medium text-maroon-800 hover:underline">
              Book New
            </Link>
          </div>
          
          {appointments.length > 0 ? (
            <div className="space-y-4">
              {appointments.map(appt => (
                <div key={appt.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-stone-100 rounded-md bg-stone-50/50">
                  <div className="mb-4 sm:mb-0">
                    <p className="font-medium text-slate-800 text-lg">{appt.purpose}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {appt.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {appt.time}</span>
                    </div>
                  </div>
                  <div>
                    <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full ${
                      appt.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      appt.status === 'cancelled' ? 'bg-rose-100 text-rose-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {appt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              <p>You have no appointments yet.</p>
              <Link href="/book" className="inline-block mt-4 px-6 py-2 bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors">
                Book an Appointment
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
