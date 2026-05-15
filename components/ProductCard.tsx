import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string | number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group flex flex-col bg-white rounded-md overflow-hidden border border-stone-100 hover:shadow-lg transition-all duration-300 h-full">
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
          <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">No Image</div>
        )}
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-slate-800 text-sm md:text-base line-clamp-2 mb-1 group-hover:text-maroon-800 transition-colors">{product.title}</h3>
        <p className="font-bold text-slate-900 mt-auto">₹{product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
