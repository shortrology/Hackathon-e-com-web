"use client"; 

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { useRouter } from "next/navigation"; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      quantity: 1,
      image: "/images/Product Image.png",
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 85,
      quantity: 1,
      image: "/images/Product Image 2.png",
    },
  ]);

  const router = useRouter();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    router.push("/goTocheckout");
  };

  return (
    <>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {/* Product Section */}
          <div className="border-2 p-4">
            <h1 className="text-lg font-semibold">Product</h1>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start justify-between mt-8">
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg font-medium">{item.name}</h1>
                    <p className="text-sm mt-2">{item.description}</p>
                    <p className="mt-2 text-base font-semibold">£{item.price}</p>
                  </div>
                </div>
                {/* Quantity Section */}
                <div className="flex flex-col items-center">
                  <h1 className="text-sm font-semibold sm:hidden lg:block">Quantity</h1>
                  <p className="mt-2 text-lg font-medium">{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section (Hidden on Small Screens) */}
          <div className="border-2 p-4 sm:hidden lg:block">
            <h1 className="text-lg font-semibold">Total</h1>
            <p className="mt-10 text-lg font-medium">£{calculateSubtotal()}</p>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
          <h1 className="inline text-xl sm:text-2xl font-semibold">£{calculateSubtotal()}</h1>
          <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
          <button
            className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-black "
             
            onClick={handleCheckout} 
          >
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;




