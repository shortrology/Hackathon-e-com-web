// "use client";

// import Image from 'next/image';

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   description: string;
//   imageUrl: string;
//   category: string;
//   tags?: string[];
//   features?: string[];
//   dimensions?: {
//     height?: number;
//     width?: number;
//     depth?: number;
//   };
// }

// export default function ProductDetail({ product }: { product: Product }) {
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">{product.name}</h1>
//       <div className="bg-white p-4 shadow-lg rounded-xl border">
//         <Image
//           src={product.imageUrl}
//           alt={product.name}
//           width={300}
//           height={300}
//           className="rounded-lg mx-auto"
//         />
//         <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
//         <p className="text-gray-600">Category: <span className="font-medium">{product.category}</span></p>
//         <p className="text-gray-800 font-bold mt-2">${product.price}</p>
//         <p className="text-gray-600">Stock: {product.quantity}</p>
//         <p className="text-gray-700 mt-2">{product.description}</p>
//         <p className="text-sm text-gray-500">Tags: {product.tags?.join(', ') || "N/A"}</p>
//         <p className="text-sm text-gray-500">Features: {product.features?.join(', ') || "N/A"}</p>
//         <p className="text-sm text-gray-500">
//           Dimensions: {product.dimensions?.height || "N/A"} x {product.dimensions?.width || "N/A"} x {product.dimensions?.depth || "N/A"}
//         </p>
//       </div>
//     </div>
//   );
// }  

"use client"; 

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';

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

interface ProductDetailPageProps {
  params: {
    id: string;
  };
  product: Product;
}

export default function ProductDetail({ product, params }: ProductDetailPageProps) {
  const { id } = params; // Accessing 'id' from params

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{product.name}</h1>
      <div className="bg-white p-4 shadow-lg rounded-xl border">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg mx-auto"
        />
        <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
        <p className="text-gray-600">Category: <span className="font-medium">{product.category}</span></p>
        <p className="text-gray-800 font-bold mt-2">${product.price}</p>
        <p className="text-gray-600">Stock: {product.quantity}</p>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-sm text-gray-500">Tags: {product.tags?.join(', ') || "N/A"}</p>
        <p className="text-sm text-gray-500">Features: {product.features?.join(', ') || "N/A"}</p>
        <p className="text-sm text-gray-500">
          Dimensions: {product.dimensions?.height || "N/A"} x {product.dimensions?.width || "N/A"} x {product.dimensions?.depth || "N/A"}
        </p>
      </div>
    </div>
  );
}
