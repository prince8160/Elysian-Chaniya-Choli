const baseProducts = [
  {
    title: 'Crimson Silk Navratri Chaniya Choli',
    price: 4500,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 124,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80'],
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
    fabric: 'Pure Silk',
    work: 'Zari and Thread Embroidery',
    color: 'Crimson Red',
    description: 'An elegant crimson silk Chaniya Choli perfect for Navratri.'
  },
  {
    title: 'Emerald Green Raw Silk Lehenga',
    price: 5200,
    originalPrice: 6500,
    rating: 4.9,
    reviews: 86,
    images: ['https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80'],
    image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80',
    fabric: 'Raw Silk',
    work: 'Mirror Work',
    color: 'Emerald Green',
    description: 'Stunning emerald green lehenga featuring intricate mirror work.'
  },
  {
    title: 'Royal Blue Velvet Chaniya Choli',
    price: 6000,
    originalPrice: 8500,
    rating: 4.7,
    reviews: 210,
    images: ['https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80'],
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80',
    fabric: 'Premium Velvet',
    work: 'Heavy Zari Embroidery',
    color: 'Royal Blue',
    description: 'A luxurious velvet Chaniya Choli with heavy royal zari work.'
  },
  {
    title: 'Sunburst Yellow Georgette Lehenga',
    price: 3800,
    originalPrice: 4200,
    rating: 4.5,
    reviews: 54,
    images: ['https://images.unsplash.com/photo-1585468274952-66591eb14165?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80'],
    image: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?auto=format&fit=crop&q=80',
    fabric: 'Georgette',
    work: 'Gotapatti',
    color: 'Yellow',
    description: 'Vibrant yellow lehenga ideal for haldi or festive occasions.'
  },
  {
    title: 'Classic Maroon Bridal Lehenga',
    price: 8500,
    originalPrice: 12000,
    rating: 5.0,
    reviews: 312,
    images: ['https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80'],
    image: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80',
    fabric: 'Silk Blend',
    work: 'Zardozi and Stone',
    color: 'Maroon',
    description: 'Intricately designed bridal lehenga for the special day.'
  },
  {
    title: 'Pastel Pink Organza Chaniya Choli',
    price: 4800,
    originalPrice: 6000,
    rating: 4.6,
    reviews: 98,
    images: ['https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1585468274952-66591eb14165?auto=format&fit=crop&q=80'],
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80',
    fabric: 'Organza',
    work: 'Sequin Embellishments',
    color: 'Pastel Pink',
    description: 'A lightweight and modern take on the traditional wear.'
  }
];

export const products = Array.from({ length: 48 }).map((_, i) => ({
  ...baseProducts[i % baseProducts.length],
  id: String(i + 1),
  title: `${baseProducts[i % baseProducts.length].title} ${i > 5 ? `Version ${Math.floor(i / 6) + 1}` : ''}`.trim()
}));
