"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; 
import React, { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ProductListing = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = () => {
    const product: Product = {
      id: "dandy-chair",
      name: "The Dandy Chair",
      price: 250,
      quantity: quantity,
      image: "/images/Image Left.png",
    };

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, product];
      }
    });

    alert(`${quantity} item(s) added to cart!`);
    router.push("/cart"); 
  };

  return (
    <section>
      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-auto">
            <Image
              src={"/images/Image Left.png"}
              height={800}
              width={800}
              alt="chair"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
            <div>
              <p className="text-xl md:text-2xl font-semibold">The Dandy Chair</p>
              <p className="py-2 text-lg md:text-xl">$250</p>
            </div>
            <div className="text-[#505977] text-sm md:text-base">
              <h1 className="font-semibold">Description</h1>
              <p className="my-4 md:my-6">
                A timeless design, with premium materials features as one of our most popular and iconic pieces.
                The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
              </p>
              <ul className="list-disc space-y-1 ml-4">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>

              {/* Dimensions */}
              <div className="my-8">
                <h1 className="font-semibold">Dimensions</h1>
              </div>
              <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                <div>
                  <h1>Height</h1>
                  <p>110cm</p>
                </div>
                <div>
                  <h1>Width</h1>
                  <p>75cm</p>
                </div>
                <div>
                  <h1>Depth</h1>
                  <p>50cm</p>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-wrap justify-between items-center mt-8">
                <div className="flex items-center gap-4">
                  <h1>Amount:</h1>
                  <button
                    className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2"
                    onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                  >
                    <span>-</span> {quantity} <span>+</span>
                  </button>
                </div>
                <button
                  onClick={addToCart}
                  className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;


