import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { ProductSlider } from '@/components/ProductSlider';
import { ContactFooter } from '@/components/ContactFooter';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { products } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 pt-[72px]">
      <Navbar />
      
      <HeroBanner />
      
      <div id="collection" className="bg-stone-50 py-4">
        <ProductSlider title="Trending Now" products={products.slice(0, 6)} />
        <ProductSlider title="New Arrivals" products={products.slice(0, 4).reverse()} />
        <ProductSlider title="Bridal Collection" products={products.slice(2, 6)} />
      </div>
      
      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
}
