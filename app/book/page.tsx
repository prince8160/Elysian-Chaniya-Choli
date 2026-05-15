'use client';

import { useState } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { Navbar } from '@/components/Navbar';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function BookAppointment() {
  const { user, loading, openAuthModal } = useAuth();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [purpose, setPurpose] = useState('Bridal Consultation');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'appointments'), {
        userId: user.uid,
        userName: user.displayName || 'Guest',
        userEmail: user.email,
        date,
        time,
        purpose,
        notes,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setSuccess(true);
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 pt-[72px] flex items-center justify-center">
        <div className="text-slate-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-[72px]">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-lg border border-stone-200">
          <h1 className="text-3xl font-serif text-slate-900 mb-2">Book an Appointment</h1>
          <p className="text-slate-600 mb-8">Schedule a visit to our boutique for a personalized styling experience.</p>
          
          {!user ? (
            <div className="text-center py-12 bg-stone-50 rounded-lg border border-stone-200">
              <h2 className="text-xl font-medium text-slate-800 mb-4">Sign in to book an appointment</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">We need your contact information to reserve a time slot and send you updates about your appointment.</p>
              <button 
                onClick={openAuthModal}
                className="px-8 py-3 bg-maroon-800 text-white rounded-md hover:bg-maroon-900 transition-colors font-medium shadow-sm uppercase tracking-wider text-sm"
              >
                Sign in or Create Account
              </button>
            </div>
          ) : success ? (
             <div className="text-center py-12 bg-green-50 rounded-lg border border-green-200">
             <h2 className="text-2xl font-serif text-green-800 mb-4">Request Submitted!</h2>
             <p className="text-green-700 mb-8 max-w-md mx-auto">Thank you for booking with Elysian. We will review your request and confirm your appointment shortly.</p>
             <button 
               onClick={() => {
                 setSuccess(false);
                 setDate('');
                 setTime('');
                 setNotes('');
               }}
               className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors font-medium text-sm"
             >
               Book Another
             </button>
           </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-maroon-800 focus:border-maroon-800 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                  <select 
                    id="time" 
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-maroon-800 focus:border-maroon-800 outline-none transition-all"
                  >
                    <option value="">Select a time</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-slate-700 mb-2">Purpose of Visit</label>
                <select 
                  id="purpose" 
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-maroon-800 focus:border-maroon-800 outline-none transition-all"
                >
                  <option value="Bridal Consultation">Bridal Consultation</option>
                  <option value="Navratri Collection">Navratri Collection</option>
                  <option value="Custom Order/Measurement">Custom Order/Measurement</option>
                  <option value="General Preview">General Preview</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-2">Additional Notes (Optional)</label>
                <textarea 
                  id="notes" 
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-maroon-800 focus:border-maroon-800 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  <p>Booking as: <span className="font-medium text-slate-800">{user.email}</span></p>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-maroon-800 text-white rounded-md hover:bg-maroon-900 transition-colors font-medium shadow-sm disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
