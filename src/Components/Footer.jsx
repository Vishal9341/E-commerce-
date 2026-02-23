import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-blue-400">ShopEasy</h2>
          <p className="mt-2 text-gray-400">
            Your one-stop shop for trendy fashion and accessories.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-400">Email: support@shopeasy.com</p>
          <p className="text-gray-400">Phone: +91 9876543210</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 text-gray-500">
        © 2026 ShopEasy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;