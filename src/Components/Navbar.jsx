import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        
        <h1 className="text-2xl font-bold text-blue-600">
          ShopEasy
        </h1>

        
        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Products</li>
          <li className="hover:text-blue-600 cursor-pointer">Cart</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        
        <div className="hidden md:flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Login
          </button>
        </div>

        
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
          <li className="hover:text-blue-600">Home</li>
          <li className="hover:text-blue-600">Products</li>
          <li className="hover:text-blue-600">Cart</li>
          <li className="hover:text-blue-600">Contact</li>
          <button className="bg-blue-600 text-white px-4 py-1 rounded w-full">
            Login
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

 ra