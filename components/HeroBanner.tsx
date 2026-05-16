import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string | number;
  title: string;
  price: number;
  image: string;
}

interface HeroBannerProps {
  products: Product[];
}

export function HeroBanner({ products }: HeroBannerProps) {
  // Defaulting to a beautiful luxury ethnic fashion image from our available set
  const bannerImage = products.length > 0 ? products[4].image : 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80';
  
  return (
    <div className="w-full bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-6 py-16 lg:py-24 lg:px-16 xl:px-24 flex flex-col justify-center text-center lg:text-left z-10">
            <span className="text-maroon-800 tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
              New Arrivals
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 mb-4 leading-tight">
              <span className="block italic font-light text-slate-700 mb-2">Ethnic</span>
              Lehenga Choli<br/>
              Collection
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Discover unparalleled craftsmanship and timeless elegance tailored for your special moments.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link 
                href="/#collection" 
                className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white font-medium tracking-wide uppercase text-sm hover:bg-maroon-800 transition-all duration-300 shadow hover:shadow-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] min-h-[400px]">
             <div className="absolute inset-0 bg-stone-200/50 mix-blend-multiply z-10 hidden lg:block" />
             <Image
               src={bannerImage}
               alt="Luxury Lehenga Choli Collection"
               fill
               className="object-cover object-center lg:object-top"
               priority
               sizes="(max-width: 1024px) 100vw, 50vw"
               referrerPolicy="no-referrer"
             />
          </div>

        </div>
      </div>
    </div>
  );
}
