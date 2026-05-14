import type {Metadata} from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Elysian | Premium Chaniya Choli & Ethnic Wear',
  description: 'Premium luxury fashion e-commerce website for traditional Chaniya Choli and ethnic wear.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-800 bg-stone-50 selection:bg-amber-700 selection:text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
