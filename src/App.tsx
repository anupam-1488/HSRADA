import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import { CartProvider } from './context/CartContext';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-amber-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        <footer className="bg-amber-900 text-amber-50 py-8 mt-16">
  <div className="container mx-auto px-4 flex items-center justify-center space-x-4">
    <img src="src/Public/Images/HSRADA.webp" alt="logo" className="w-24 h-24" />
    
    <div className="text-center">
      <p>© 2024 HSRADA Chocolates. All rights reserved.</p>
      <p className="mt-2">Made with love in India 🇮🇳</p>
    </div>
  </div>
</footer>


      </div>
    </CartProvider>
  );
}

export default App;
