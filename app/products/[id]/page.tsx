import ProductDetail from '@/app/components/ProductDetail';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string;
  category: string;
  tags?: string[];
  features?: string[];
  dimensions?: {
    height?: number;
    width?: number;
    depth?: number;
  };
}

// Ensure correct props type
interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params;

  const query = `
    *[_type == "product" && _id == "${id}"][0]{
      _id,
      name,
      price,
      quantity,
      description,
      "imageUrl": image.asset->url,
      "category": category->title,
      tags,
      features,
      dimensions
    }
  `;

  try {
    const product: Product | null = await client.fetch(query);

    if (!product) {
      return notFound();
    }

    return <ProductDetail product={product} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    return notFound();
  }
}

