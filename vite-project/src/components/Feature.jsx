import React from 'react';
import five from "../assets/5.jpeg";
import six from "../assets/6.avif";
import seven from "../assets/7.avif";

const Feature = () => {
  return (
    <>
      {/* Title */}
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Featured</h1>
      </div>

      {/* Full-Width Scrollable Container */}
      <div className="w-full overflow-x-auto">
        {/* Flex container for the cards */}
        <div className="flex gap-6 w-full">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[calc(33.33%-1.5rem)] transform transition-all duration-300 hover:scale-105">
            <img
              src={five}
              alt="Feature 1"
              className="h-[60vh] w-full object-cover rounded-lg"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[calc(33.33%-1.5rem)] transform transition-all duration-300 hover:scale-105">
            <img
              src={six}
              alt="Feature 2"
              className="h-[60vh] w-full object-cover rounded-lg"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[calc(33.33%-1.5rem)] transform transition-all duration-300 hover:scale-105">
            <img
              src={seven}
              alt="Feature 3"
              className="h-[60vh] w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
