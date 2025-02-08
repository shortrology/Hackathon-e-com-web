"use client"; 

import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation"; 


const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const router = useRouter(); 

  const handlePaymentMethodChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    if (paymentMethod === "") {
      alert("Please select a payment method.");
    } else {
      alert(`Processing payment with ${paymentMethod}`);
      router.push("/goTocheckout/Confirmation"); 
    }
  };

  return (
    
      
      <div className="bg-gray-100 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-3xl font-semibold text-center lg:text-left">Checkout</h1>
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Choose Payment Method</h2>
          
          {/* Payment Method Selection */}
          <div className="mt-4">
            <label className="block text-sm">Choose a payment method:</label>
            <select
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-purple"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="">Select Payment Method</option>
              <option value="cod">Cash on Delivery (COD)</option> 
              <option value="bankTransfer">Bank Transfer</option> 
              <option value="easypaisa">Easypaisa</option> 
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-10 flex justify-center">
            <button
              className="bg-custom-purple text-white py-3 px-6 w-full sm:w-56 rounded-md text-lg"
              onClick={handleSubmit}
            >
              Complete order
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Checkout;




