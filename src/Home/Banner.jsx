import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px]" id="home">
      
      {/* Background Image */}
      <img
        src={"/hero-children-D6Cdhjs5.jpg"}
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        
        {/* Top small text */}
        <p className="text-white tracking-[4px] text-xs md:text-sm mb-4">
          NURTURING YOUNG MINDS SINCE 1998
        </p>

        {/* Heading */}
        <h1 className="text-white font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Where Curiosity
        </h1>

        <h2 className="text-orange-400 font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          Meets Purpose
        </h2>

        {/* Description */}
        <p className="text-gray-200 max-w-2xl text-sm md:text-lg mb-8">
          Tagore Academy provides a holistic K-8 education rooted in creativity,
          critical thinking, and compassion.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          <button className="bg-[#eea02b] text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
            Explore Our Programs
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Learn More
          </button>

        </div>
      </div>
    </div>
  );
};

export default Banner;