'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h2 className="text-4xl font-serif text-slate-900 mb-4">Not Found</h2>
        <p className="text-slate-600 mb-8">Could not find requested resource</p>
        <Link href="/" className="px-6 py-3 bg-maroon-800 text-white hover:bg-maroon-900 transition-colors uppercase tracking-wide">
          Return Home
        </Link>
      </div>
    </div>
  );
}
