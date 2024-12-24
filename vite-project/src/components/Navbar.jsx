import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-100 px-4 py-1">
        <div className="max-w-7xl mx-auto flex justify-end text-xs">
          <a href="#" className="text-gray-600 hover:text-black">Find a Store</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#" className="text-gray-600 hover:text-black">Help</a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 pr-8">
            <Link to="/" className="text-2xl font-bold text-black">NIKE</Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex flex-1 space-x-8 justify-center items-center">
            <Link to="/new-featured" className="text-gray-600 hover:text-black font-medium">
              New & Featured
            </Link>
            <Link to="/men" className="text-gray-600 hover:text-black font-medium">
              Men
            </Link>
            <Link to="/women" className="text-gray-600 hover:text-black font-medium">
              Women
            </Link>
            <Link to="/kids" className="text-gray-600 hover:text-black font-medium">
              Kids
            </Link>
            <Link to="/sale" className="text-gray-600 hover:text-black font-medium">
              Sale
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none px-2 text-sm"
              />
            </div>
            <a href="#" className="text-gray-600 hover:text-black">
              <User className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <ShoppingBag className="h-6 w-6" />
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-black"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <Link to="/new-featured" className="block px-3 py-2 text-gray-600 hover:text-black font-medium">
              New & Featured
            </Link>
            <Link to="/men" className="block px-3 py-2 text-gray-600 hover:text-black font-medium">
              Men
            </Link>
            <Link to="/women" className="block px-3 py-2 text-gray-600 hover:text-black font-medium">
              Women
            </Link>
            <Link to="/kids" className="block px-3 py-2 text-gray-600 hover:text-black font-medium">
              Kids
            </Link>
            <Link to="/sale" className="block px-3 py-2 text-gray-600 hover:text-black font-medium">
              Sale
            </Link>
            {/* Mobile search */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none px-2 text-sm w-full"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
