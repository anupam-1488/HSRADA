import React, { useState } from 'react';
import { ShoppingCart, Menu, User, Package, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import OrderTrackingPopup from '../context/OrderTrackingPopup';

const Navbar = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  const { hasActiveOrders } = useOrders();
  const [showTrackingPopup, setShowTrackingPopup] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const user = localStorage.getItem('userName');

  const handleLogout = () => {
    navigate('/');
    setShowUserMenu(false);
    localStorage.clear();
  };

  return (
    <>
      <nav className="bg-amber-900 text-amber-50 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="/src/Public/Images/HSRADA.webp"
                alt="LOGO"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  marginRight: '10px',
                }}
              />
              <Link to="/" className="text-xl font-semibold">
                HSRADA
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-amber-200">Home</Link>
              <Link to="/products" className="hover:text-amber-200">Products</Link>
              <Link to="/about" className="hover:text-amber-200">About</Link>
              <Link to="/contact" className="hover:text-amber-200">Contact</Link>
              {user && user !== 'ADMIN' && (
                <button
                  onClick={() => setShowTrackingPopup(true)}
                  className="hover:text-amber-200 flex items-center gap-2"
                >
                  <Package size={20} />
                  Track Orders
                  {hasActiveOrders && (
                    <span className="bg-amber-500 text-amber-900 px-2 py-0.5 rounded-full text-xs">
                      Active
                    </span>
                  )}
                </button>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="p-2 hover:bg-amber-800 rounded-full flex items-center gap-2"
                >
                  <User size={24} />
                  {user && (
                    <span className="hidden md:inline text-sm">
                      {user}
                    </span>
                  )}
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-amber-700 hover:bg-amber-50 rounded-md shadow-lg py-1 z-50">
                    {user ? (
                      <>
                        <div className="px-4 py-2 text-sm text-amber-900 border-b border-gray-100">
                          Signed in as
                          <br />
                          <span className="font-medium">{user}</span>
                        </div>
                        {user === 'ADMIN' && (
                          <Link
                            to="/admin/dashboard"
                            className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50"
                            onClick={() => setShowUserMenu(false)}
                          >
                            Dashboard
                          </Link>
                        )}
                        {user !== 'ADMIN' && (
                          <Link
                            to="/orders"
                            className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50"
                            onClick={() => setShowUserMenu(false)}
                          >
                            My Orders
                          </Link>
                        )}
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                        >
                          <LogOut size={16} />
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/signup"
                          className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Create Account
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              <Link to="/cart" className="p-2 hover:bg-amber-800 rounded-full relative">
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden p-2 hover:bg-amber-800 rounded-full"
                onClick={() => setShowMobileMenu(!showMobileMenu)} // Toggle mobile menu
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Dropdown style */}
      {showMobileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <Link
            to="/"
            className="block px-4 py-2 text-sm hover:bg-amber-800"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block px-4 py-2 text-sm hover:bg-amber-800"
            onClick={() => setShowMobileMenu(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-sm hover:bg-amber-800"
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-sm hover:bg-amber-800"
            onClick={() => setShowMobileMenu(false)}
          >
            Contact
          </Link>
          {user && user !== 'ADMIN' && (
            <button
              onClick={() => {
                setShowTrackingPopup(true);
                setShowMobileMenu(false);
              }}
              className="block px-4 py-2 text-sm text-amber-200 hover:bg-amber-800 flex items-center gap-2"
            >
              <Package size={20} />
              Track Orders
              {hasActiveOrders && (
                <span className="bg-amber-500 text-amber-900 px-2 py-0.5 rounded-full text-xs">
                  Active
                </span>
              )}
            </button>
          )}
        </div>
      )}

      {showTrackingPopup && (
        <OrderTrackingPopup onClose={() => setShowTrackingPopup(false)} />
      )}
    </>
  );
};

export default Navbar;
