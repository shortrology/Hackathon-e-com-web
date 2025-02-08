"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const Checkout: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [])
  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle Place Order 
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart"); 
    setCart([]); 
    router.push("/thank-you"); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      {cart.length > 0 ? (
        <div>
          {/* Cart Items List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            <ul className="divide-y">
              {cart.map((item) => (
                <li key={item._id} className="flex items-center justify-between py-4">
                  <Image src={item.imageUrl} alt={item.name} width={60} height={60} className="rounded-md" />
                  <p className="flex-1 ml-4 text-lg">{item.name} (x{item.quantity})</p>
                  <p className="font-semibold text-gray-800">${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handlePlaceOrder} className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Billing Details</h2>
            <label className="block mb-2 font-medium">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 mb-4 border rounded" />
            
            <label className="block mb-2 font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 mb-4 border rounded" />
            
            <label className="block mb-2 font-medium">Address</label>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} required className="w-full p-2 mb-4 border rounded"></textarea>
            
            <label className="block mb-2 font-medium">Payment Method</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full p-2 mb-4 border rounded">
              <option value="credit_card">Credit Card</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="easypaisa">EasyPaisa</option>
              <option value="jazzcash">JazzCash</option>
            </select>
            
            {/* Order Summary */}
            <h2 className="text-xl font-bold mt-4">Order Summary</h2>
            <p className="text-lg mt-2">Total: <span className="font-semibold">${totalPrice}</span></p>
            <button
              type="submit"
              className="mt-4 w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 text-lg font-bold"
            >
              Place Order
            </button>
          </form>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Checkout;

