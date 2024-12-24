import React from 'react';

const Simple = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-7xl px-4 mt-6">
      {/* Title "MEN" */}
      <div className="ml-20">
        <h1 className="text-3xl font-bold">MEN</h1>
      </div>

      {/* Center-aligned navigation options */}
      <div className="flex justify-center items-center space-x-8 w-full">
        <h3 className="text-xl font-medium">Shoes</h3>
        <h3 className="text-xl font-medium">Clothing</h3>
        <h3 className="text-xl font-medium">Gear</h3>
      </div>
    </div>
  );
};

export default Simple;
