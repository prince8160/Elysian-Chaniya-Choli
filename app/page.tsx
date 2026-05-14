import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductSlider } from '@/components/ProductSlider';
import { About } from '@/components/About';
import { Reviews } from '@/components/Reviews';
import { ContactFooter } from '@/components/ContactFooter';
import { FloatingElements } from '@/components/FloatingElements';
import { products } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-maroon-800 selection:text-white pb-10">
      <Navbar />
      <Hero />
      
      <div id="collections" className="mt-6 space-y-6 md:space-y-8 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <ProductSlider 
          title="Trending Chaniya Choli" 
          products={products} 
          bgColor="bg-white rounded-lg shadow-sm"
        />
        <ProductSlider 
          title="New Collection" 
          products={[...products].reverse()} 
          bgColor="bg-white rounded-lg shadow-sm"
        />
        <ProductSlider 
          title="Mirror Work Collection" 
          products={[products[1], products[2], products[4], products[0], products[3]]} 
          bgColor="bg-white rounded-lg shadow-sm"
        />
        <ProductSlider 
          title="Best Sellers" 
          products={[products[0], products[3], products[1], products[2], products[4]]} 
          bgColor="bg-white rounded-lg shadow-sm"
        />
      </div>

      <div className="max-w-[1600px] mx-auto mt-8 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-lg shadow-sm">
          <About />
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          <Reviews />
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          <ContactFooter />
        </div>
      </div>
      <FloatingElements />
    </main>
  );
}
