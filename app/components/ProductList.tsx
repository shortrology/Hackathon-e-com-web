"use client"; 

import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          name,
          price,
          quantity,
          description,
          "imageUrl": image.asset->url,
          "category": category->title
        }`;
        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart Function
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item._id === product._id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from Cart Function
  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  // Checkout Function
  const handleCheckout = () => {
    router.push("/checkout"); 
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 shadow-lg rounded-xl border">
              <Link href={`/products/${product._id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto"
                />
                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                <p className="text-gray-600">
                  Category: <span className="font-medium">{product.category}</span>
                </p>
                <p className="text-gray-800 font-bold mt-2">${product.price}</p>
                <p className="text-gray-600">Stock: {product.quantity}</p>
                <p className="text-gray-700 mt-2">{product.description}</p>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      {/* Cart Summary with Product Image */}
      {cart.length > 0 && (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Cart Summary</h2>
          <ul className="mt-4 space-y-4">
            {cart.map((item) => (
              <li key={item._id} className="flex items-center justify-between border-b py-2">
                {/* Product Image */}
                <Image src={item.imageUrl} alt={item.name} width={50} height={50} className="rounded-md" />

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <p className="text-lg font-medium">{item.name} (x{item.quantity})</p>
                  <p className="text-gray-600">${item.price * item.quantity}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveFromCart(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  cancel
                </button>
              </li>
            ))}
          </ul>

          {/*Checkout Button with Routing */}
          <button
            onClick={handleCheckout}
            className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 text-lg font-bold"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;

