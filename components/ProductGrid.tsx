import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string | number;
  title: string;
  price: number;
  image: string;
}

export function ProductGrid({ products, title }: { products: Product[], title: string }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-8 border-b border-stone-200 pb-4 inline-block">{title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group relative block bg-white rounded-lg overflow-hidden border border-stone-100 hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[3/4] w-full relative bg-stone-100 overflow-hidden">
               {product.image ? (
                 <Image 
                   src={product.image} 
                   alt={product.title}
                   fill
                   sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                   className="object-cover object-top"
                   referrerPolicy="no-referrer"
                 />
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center text-stone-400">No Image</div>
               )}
            </div>
            <div className="p-4">
              <h3 className="font-medium text-slate-800 truncate mb-1 text-sm md:text-base">{product.title}</h3>
              <p className="font-semibold text-slate-900">₹{product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
