import React from 'react';
import { Package, Truck, CheckCircle, X } from 'lucide-react';
import { useOrders, Order } from '../context/OrderContext';

interface OrderTrackingPopupProps {
  onClose: () => void;
}

const OrderTrackingPopup: React.FC<OrderTrackingPopupProps> = ({ onClose }) => {
  const { orders } = useOrders();
  const activeOrders = orders.filter(order => order.status !== 'Delivered');

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg m-4">
        <div className="flex justify-between items-center p-4 border-b border-amber-100">
          <h2 className="text-xl font-semibold text-amber-900">Active Orders</h2>
          <button
            onClick={onClose}
            className="text-amber-500 hover:text-amber-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 max-h-[70vh] overflow-y-auto">
          {activeOrders.length > 0 ? (
            <div className="space-y-4">
              {activeOrders.map((order) => (
                <div key={order.id} className="border border-amber-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-amber-900">Order #{order.id}</h3>
                    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(order.status)} flex items-center gap-1`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>
                  <div className="text-sm text-amber-700 mb-2">
                    {order.tracking[0].message}
                  </div>
                  <div className="text-xs text-amber-500">
                    Last updated: {order.tracking[0].date}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-amber-700 py-4">
              No active orders found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderTrackingPopup;
