import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; 2024 Nike, Inc. All rights reserved
        </p>
        <div className="mt-2 space-x-6">
          <a href="#" className="text-gray-600 hover:text-black text-sm">Guides</a>
          <a href="#" className="text-gray-600 hover:text-black text-sm">Terms of Sale</a>
          <a href="#" className="text-gray-600 hover:text-black text-sm">Terms of Use</a>
          <a href="#" className="text-gray-600 hover:text-black text-sm">Nike Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
