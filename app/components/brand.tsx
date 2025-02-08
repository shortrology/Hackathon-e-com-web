import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const features = [
  {
    icon: <TbTruckDelivery size={40} className="text-[#2A254B] mx-auto" />,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard."
  },
  {
    icon: <IoIosCheckmarkCircleOutline size={40} className="text-[#2A254B] mx-auto" />,
    title: "Made by true artisans",
    description: "Hand-crafted goods made with real passion and craftsmanship."
  },
  {
    icon: <MdOutlinePriceChange size={40} className="text-[#2A254B] mx-auto" />,
    title: "Unbeatable prices",
    description: "For our material and quality, you won’t find better prices anywhere."
  },
  {
    icon: <LuSprout size={40} className="text-[#2A254B] mx-auto" />,
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable."
  }
];

const Brand = () => {
  return (
    <section className="py-12 px-4 md:px-8 text-[#2A254B] mt-12">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl font-semibold">
        What makes our brand different
      </h1>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            {feature.icon}
            <p className="py-4 font-semibold text-lg">{feature.title}</p>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
