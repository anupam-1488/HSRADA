import React from 'react';
import { ShoppingCart, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-amber-900 text-amber-50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="src/Public/Images/HSRADA.webp" alt="logo" className="w-14 h-14 mx-3" />
            <Link to="/" className="text-xl font-semibold">HSRADA</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-amber-200">Home</Link>
            <Link to="/products" className="hover:text-amber-200">Products</Link>
            <Link to="/about" className="hover:text-amber-200">About</Link>
            <Link to="/contact" className="hover:text-amber-200">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="p-2 hover:bg-amber-800 rounded-full">
              <User size={24} />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-amber-800 rounded-full relative">
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className="md:hidden p-2 hover:bg-amber-800 rounded-full">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;