import { NextResponse } from 'next/server';
import { getProducts } from '@/lib/getProducts';

export async function GET() {
  const products = getProducts();
  return NextResponse.json(products);
}
