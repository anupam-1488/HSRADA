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
import AdminDashboard from './pages/admin/Dashboard';
import Orders from './pages/Orders';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <ProductProvider>
          <CartProvider>
            <div className="min-h-screen bg-amber-50">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
              
              <footer className="bg-amber-900 text-amber-50 py-8 mt-16">
                <div className="container mx-auto px-4 text-center">
                  
                  <p>© 2024 HSRADA Chocolates. All rights reserved.</p>
                  <p className="mt-2">Made with love in India 🇮🇳</p>
                </div>
              </footer>
            </div>
          </CartProvider>
        </ProductProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;