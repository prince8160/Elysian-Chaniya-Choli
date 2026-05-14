import { Navbar } from '@/components/Navbar';
import { ContactFooter } from '@/components/ContactFooter';
import { FloatingElements } from '@/components/FloatingElements';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductDetails } from '@/components/ProductDetails';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-maroon-800 selection:text-white pb-10">
      <Navbar />
      
      <div className="mt-[104px] md:mt-[96px] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetails product={product} />
      </div>

      <div className="max-w-[1400px] mx-auto mt-6 bg-white">
        <ContactFooter />
      </div>
      <FloatingElements />
    </main>
  );
}
