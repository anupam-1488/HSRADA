import React, { useState } from 'react';
import { Trash2, Plus, Minus, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
 
interface AddressFormData {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}
 
function Cart() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const  user  = localStorage.getItem("userName");
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressData, setAddressData] = useState<AddressFormData>({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });
 
  const handleProceedToCheckout = () => {
    if (!user) {
      // Redirect to login if not authenticated
      navigate('/login');
      return;
    }
    setShowAddressForm(true);
  };
 

  const handleCheckout = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your internet connection.");
      return;
    }
   
    const options = {
      key: "rzp_test_kSO4Ka6YzeAKJS", // Use your Razorpay Test Key
      amount: 100, // ₹1 in paise (100 paise = ₹1)
      currency: "INR",
      name: "HSRADA",
      description: "Chocolate Purchase",
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#f59e0b",
      },
      payment_capture: 1, // Auto-capture payment
      method: {
        netbanking: false,
        card: false,
        wallet: false,
        upi: true, // Enable UPI Payments
      },
      handler: (response) => {
        console.log("Payment Success:", response);
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful!',
          text: `Payment ID: ${response.razorpay_payment_id}`,
        });
      },
      
      modal: {
        ondismiss: () => {
         
          Swal.fire({
            icon: 'error',
            title: 'Payment Failed!',
          });
        },
      },
    };
   
    const rzp = new window.Razorpay(options);
    rzp.open();
  };


  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
handleCheckout();
    setTimeout(() => {
      // alert('Order placed successfully! Thank you for shopping with us.');
      clearCart();
      setProcessing(false);
      setShowAddressForm(false);
      navigate('/orders');
    }, 2000);
  };
 
  if (items.length === 0) {
    return (
<div className="container mx-auto px-4 py-16 text-center">
<h2 className="text-2xl font-bold text-amber-900 mb-4">Your Cart is Empty</h2>
<p className="text-amber-700 mb-8">Add some delicious chocolates to your cart!</p>
</div>
    );
  }
 
  return (
<main className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold text-amber-900 mb-8">Shopping Cart</h1>
 
      <div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-2">
          {items.map((item) => (
<div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
<img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
<div className="flex-1">
<h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
<p className="text-amber-700">₹{item.price}</p>
<div className="flex items-center gap-2 mt-2">
<button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-amber-100 rounded"
>
<Minus size={16} className="text-amber-700" />
</button>
<span className="w-8 text-center">{item.quantity}</span>
<button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-amber-100 rounded"
>
<Plus size={16} className="text-amber-700" />
</button>
</div>
</div>
<div className="text-right">
<p className="font-semibold text-amber-900 mb-2">
                  ₹{item.price * item.quantity}
</p>
<button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
>
<Trash2 size={20} />
</button>
</div>
</div>
          ))}
</div>
 
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
<h2 className="text-xl font-bold text-amber-900 mb-4">Order Summary</h2>
<div className="space-y-2 mb-4">
<div className="flex justify-between text-amber-700">
<span>Subtotal</span>
<span>₹{total}</span>
</div>
<div className="flex justify-between text-amber-700">
<span>Shipping</span>
<span>₹50</span>
</div>
<div className="border-t border-amber-200 pt-2 mt-2">
<div className="flex justify-between font-bold text-amber-900">
<span>Total</span>
<span>₹{total + 50}</span>
</div>
</div>
</div>
 
          {!user && (
<div className="mb-4 p-3 bg-amber-50 rounded-md flex items-start gap-2">
<AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
<p className="text-sm text-amber-700">
                Please sign in to proceed with checkout
</p>
</div>
          )}
 
          <button
            onClick={handleProceedToCheckout}
            disabled={processing}
            className="w-full bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-800 transition-colors disabled:bg-amber-400"
>
            {processing ? 'Processing...' : 'Proceed to Checkout'}
</button>
</div>
</div>
 
      {/* Address Modal */}
      {showAddressForm && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white rounded-lg shadow-xl w-full max-w-lg m-4 p-6">
<h2 className="text-xl font-semibold text-amber-900 mb-4">Shipping Address</h2>
<form onSubmit={handleAddressSubmit} className="space-y-4">
<div>
<label className="block text-sm font-medium text-amber-900">Full Name</label>
<input
                  type="text"
                  required
                  value={addressData.fullName}
                  onChange={(e) => setAddressData({ ...addressData, fullName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                />
</div>
<div>
<label className="block text-sm font-medium text-amber-900">Street Address</label>
<input
                  type="text"
                  required
                  value={addressData.streetAddress}
                  onChange={(e) => setAddressData({ ...addressData, streetAddress: e.target.value })}
                  className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                />
</div>
 
              <div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-amber-900">City</label>
<input
                    type="text"
                    required
                    value={addressData.city}
                    onChange={(e) => setAddressData({ ...addressData, city: e.target.value })}
                    className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  />
</div>
<div>
<label className="block text-sm font-medium text-amber-900">State</label>
<input
                    type="text"
                    required
                    value={addressData.state}
                    onChange={(e) => setAddressData({ ...addressData, state: e.target.value })}
                    className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  />
</div>
</div>
 
              <div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-amber-900">PIN Code</label>
<input
                    type="text"
                    required
                    pattern="[0-9]{6}"
                    value={addressData.pincode}
                    onChange={(e) => setAddressData({ ...addressData, pincode: e.target.value })}
                    className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  />
</div>
<div>
<label className="block text-sm font-medium text-amber-900">Phone Number</label>
<input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={addressData.phone}
                    onChange={(e) => setAddressData({ ...addressData, phone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  />
</div>
</div>
 
              <div className="flex justify-end gap-4 mt-6">
<button
                  type="button"
                  onClick={() => setShowAddressForm(false)}
                  className="px-4 py-2 text-sm font-medium text-amber-700 hover:text-amber-800"
>
                  Cancel
</button>
<button
                  type="submit"
                  disabled={processing}
                  className="px-6 py-2 text-sm font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 disabled:bg-amber-400"
>
                  {processing ? 'Processing...' : 'Proceed to Payment'}
</button>
</div>
</form>
</div>
</div>
      )}
</main>
  );
}
 
export default Cart;