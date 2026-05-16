import fs from 'fs';
import path from 'path';
import { products as baseProducts } from './data';

export function getProducts() {
  let localImages: string[] = [];
  try {
    const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
    if (fs.existsSync(productsDir)) {
      const files = fs.readdirSync(productsDir)
        .filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file));
      if (files.length > 0) {
        localImages = files.sort().map(f => `/images/products/${f}`);
      }
    }
  } catch (e) {
    console.error("Error reading images:", e);
  }

  if (localImages.length === 0) {
    return baseProducts;
  }

  return baseProducts.map((p, index) => {
    const mainImgIndex = index % localImages.length;
    let altImgIndex = (index + 1) % localImages.length;
    if (localImages.length === 1) altImgIndex = 0;

    return {
      ...p,
      image: localImages[mainImgIndex],
      images: [localImages[mainImgIndex], localImages[altImgIndex]]
    };
  });
}
