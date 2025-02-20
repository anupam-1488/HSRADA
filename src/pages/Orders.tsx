import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';
 
// Mock data for demo customer orders
const customerOrders = [
  {
    id: "ORD001",
    date: "2024-03-15",
    total: 899,
    status: "Delivered",
    items: [
      { name: "Dark Chocolate Truffle", quantity: 2, price: 299 },
      { name: "Hazelnut Praline", quantity: 1, price: 399 }
    ],
    tracking: [
      { date: "2024-03-15 18:30", status: "Delivered", message: "Package delivered successfully" },
      { date: "2024-03-15 13:45", status: "Out for Delivery", message: "Package is out for delivery" },
      { date: "2024-03-14 20:00", status: "In Transit", message: "Package arrived at local facility" },
      { date: "2024-03-13 10:30", status: "Shipped", message: "Order has been shipped" },
      { date: "2024-03-12 15:20", status: "Processing", message: "Order confirmed and processing" }
    ]
  },
  {
    id: "ORD002",
    date: "2024-03-16",
    total: 599,
    status: "In Transit",
    items: [
      { name: "Assorted Chocolate Box", quantity: 1, price: 599 }
    ],
    tracking: [
      { date: "2024-03-16 14:20", status: "In Transit", message: "Package in transit to destination" },
      { date: "2024-03-15 09:15", status: "Shipped", message: "Order has been shipped" },
      { date: "2024-03-14 16:45", status: "Processing", message: "Order confirmed and processing" }
    ]
  }
];
 
function Orders() {
  const [expandedOrder, setExpandedOrder] = React.useState<string | null>(null);
 
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'In Transit':
        return <Truck className="h-5 w-5 text-blue-500" />;
      default:
        return <Package className="h-5 w-5 text-amber-500" />;
    }
  };
 
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
 
  return (
<main className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold text-amber-900 mb-8">My Orders</h1>
 
      <div className="space-y-6">
        {customerOrders.map((order) => (
<div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="text-lg font-semibold text-amber-900">Order #{order.id}</h3>
<p className="text-sm text-amber-700">{order.date}</p>
</div>
<div className="flex items-center gap-4">
<p className="font-semibold text-amber-900">₹{order.total}</p>
<span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)} flex items-center gap-2`}>
                    {getStatusIcon(order.status)}
                    {order.status}
</span>
</div>
</div>
 
              <div className="border-t border-amber-100 pt-4">
<h4 className="font-medium text-amber-900 mb-2">Items:</h4>
<ul className="space-y-2">
                  {order.items.map((item, index) => (
<li key={index} className="flex justify-between text-sm">
<span className="text-amber-700">
                        {item.quantity}x {item.name}
</span>
<span className="text-amber-900 font-medium">₹{item.price * item.quantity}</span>
</li>
                  ))}
</ul>
</div>
 
              <button
                onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                className="mt-4 text-amber-600 hover:text-amber-700 text-sm font-medium"
>
                {expandedOrder === order.id ? 'Hide Tracking' : 'View Tracking'}
</button>
 
              {expandedOrder === order.id && (
<div className="mt-4 border-t border-amber-100 pt-4">
<h4 className="font-medium text-amber-900 mb-4">Order Tracking</h4>
<div className="space-y-4">
                    {order.tracking.map((track, index) => (
<div key={index} className="flex items-start gap-4">
<div className="min-w-[150px] text-sm text-amber-700">
                          {track.date}
</div>
<div>
<p className="text-sm font-medium text-amber-900">{track.status}</p>
<p className="text-sm text-amber-700">{track.message}</p>
</div>
</div>
                    ))}
</div>
</div>
              )}
</div>
</div>
        ))}
</div>
</main>
  );
}
 
export default Orders;