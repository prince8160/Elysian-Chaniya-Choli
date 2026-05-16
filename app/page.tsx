import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { ProductCard } from '@/components/ProductCard';
import { ContactFooter } from '@/components/ContactFooter';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { getProducts } from '@/lib/getProducts';
import Link from 'next/link';

export default async function Home(props: { searchParams: Promise<{ page?: string }> }) {
  const resolvedParams = await props.searchParams;
  const page = parseInt(resolvedParams.page || '1', 10);
  const allProducts = getProducts();
  const ITEMS_PER_PAGE = 24;
  
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = allProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-stone-50 pt-[72px]">
      <Navbar />
      
      {currentPage === 1 && <HeroBanner products={allProducts} />}
      
      <main id="collection" className="bg-white py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">Our Collection</h2>
              <p className="text-slate-500">Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, allProducts.length)} of {allProducts.length} Premium Styles</p>
            </div>
            
            <div className="flex items-center gap-4">
              <select className="bg-white border border-stone-200 text-slate-700 py-2 px-4 rounded-md outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          {/* SINGLE PRODUCT GRID - 6 cols desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {currentProducts.map(product => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center pb-8 border-t border-stone-100 pt-8">
              <div className="flex items-center gap-2">
                {currentPage > 1 && (
                  <Link 
                    href={`/?page=${currentPage - 1}#collection`}
                    className="w-10 h-10 flex items-center justify-center rounded border border-stone-200 text-slate-600 hover:bg-stone-100 transition-colors"
                  >
                    &larr;
                  </Link>
                )}
                
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = pageNum === currentPage;
                  return (
                    <Link 
                      key={pageNum}
                      href={`/?page=${pageNum}#collection`}
                      className={`w-10 h-10 flex items-center justify-center rounded border transition-colors ${
                        isActive 
                          ? 'bg-maroon-800 text-white border-maroon-800' 
                          : 'border-stone-200 text-slate-600 hover:bg-stone-100'
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                })}

                {currentPage < totalPages && (
                  <Link 
                    href={`/?page=${currentPage + 1}#collection`}
                    className="w-10 h-10 flex items-center justify-center rounded border border-stone-200 text-slate-600 hover:bg-stone-100 transition-colors"
                  >
                    &rarr;
                  </Link>
                )}
              </div>
            </div>
          )}

        </div>
      </main>
      
      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
}
