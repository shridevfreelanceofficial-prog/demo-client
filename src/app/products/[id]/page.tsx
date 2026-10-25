import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PRODUCTS } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found | Navyronix',
    };
  }

  return {
    title: `${product.name} - ${product.model} | Navyronix Marine Spares`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Find related products in same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <ProductDetailClient 
      product={product} 
      relatedProducts={relatedProducts} 
    />
  );
}
