import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';
 
function Cart() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [processing, setProcessing] = useState(false);
 
  // const handleCheckout = async () => {
  //   setProcessing(true);
 
  //   // Create an order on your backend (Replace with your actual backend API)
  //   const response = await fetch("https://your-backend.com/api/create-order", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ amount: total + 50 }), // Amount in INR (paise)
  //   });
 
  //   const orderData = await response.json();
 
  //   const options = {
  //     key: "your_razorpay_key", // Replace with your Razorpay API key
  //     amount: orderData.amount,
  //     currency: "INR",
  //     name: "Chocolate Store",
  //     description: "Order Payment",
  //     image: "/logo.png",
  //     order_id: orderData.id, // Order ID from backend
  //     handler: function (response) {
  //       alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
  //       clearCart();
  //       setProcessing(false);
  //     },
  //     prefill: {
  //       name: "John Doe",
  //       email: "johndoe@example.com",
  //       contact: "9999999999",
  //     },
  //     theme: {
  //       color: "#f59e0b",
  //     },
  //     method: {
  //       upi: true, // Enable UPI
  //       card: false,
  //       netbanking: false,
  //       wallet: false,
  //     },
  //   };
 
  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
 
  //   setProcessing(false);
  // };
  // const handleCheckout = () => {
  //   const upiLink = `upi://pay?pa=your-vpa@upi&pn=Your Name&mc=&tid=&tr=&tn=Chocolate Purchase&am=1&cu=INR`;
  //   // Redirect to UPI payment link
  //   window.location.href = upiLink;
  // };
 

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
          console.log("Payment Cancelled");
          alert("Payment Cancelled!");
        },
      },
    };
   
    const rzp = new window.Razorpay(options);
    rzp.open();
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
 
          <button
            onClick={handleCheckout}
            disabled={processing}
            className="w-full bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-800 transition-colors disabled:bg-amber-400"
>
            {processing ? 'Processing...' : 'Proceed to Payment'}
</button>
</div>
</div>
</main>
  );
}
 
export default Cart;

