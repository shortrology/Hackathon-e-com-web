import React from "react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="max-w-2xl mx-auto text-center p-6">
      <h1 className="text-3xl font-bold text-black-600">Thank You!</h1>
      <p className="text-lg text-gray-600 mt-2">Your order has been placed successfully.</p>
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ThankYou;
