import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Package, Truck, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/Superbase';


interface Order {
  id: string;
  payment_id: string;
  amount: number;
  status: string;
  shipping_address: string;
  created_at: string;
}

function OrderTracking() {
  const { orderId } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      if (!orderId) return;

      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .single();

      if (error) {
        console.error('Error fetching order:', error);
        return;
      }

      setOrder(data);
      setLoading(false);
    }

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-amber-700">Loading order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Order Not Found</h2>
        <p className="text-amber-700">We couldn't find the order you're looking for.</p>
      </div>
    );
  }

  const steps = [
    { icon: Package, label: 'Order Placed', status: 'completed' },
    { icon: Truck, label: 'In Transit', status: order.status === 'in_transit' ? 'current' : order.status === 'delivered' ? 'completed' : 'upcoming' },
    { icon: CheckCircle, label: 'Delivered', status: order.status === 'delivered' ? 'completed' : 'upcoming' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Order Tracking</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-amber-900">Order #{order.id.slice(0, 8)}</h2>
            <p className="text-amber-700">Placed on {new Date(order.created_at).toLocaleDateString()}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-amber-900">Total Amount</p>
            <p className="text-amber-700">₹{order.amount}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-200 -translate-y-1/2"></div>
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                  step.status === 'completed' ? 'bg-green-500 text-white' :
                  step.status === 'current' ? 'bg-amber-500 text-white' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  <step.icon size={20} />
                </div>
                <p className="mt-2 text-sm font-medium text-amber-900">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-amber-900 mb-4">Shipping Details</h2>
        <p className="text-amber-700 whitespace-pre-line">{order.shipping_address}</p>
      </div>
    </main>
  );
}

export default OrderTracking;