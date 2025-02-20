import React, { createContext, useContext, useState, useMemo } from 'react';

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface TrackingUpdate {
  date: string;
  status: string;
  message: string;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
  items: OrderItem[];
  tracking: TrackingUpdate[];
}

interface OrderContextType {
  orders: Order[];
  hasActiveOrders: boolean;
}

// Mock data for demo customer orders
const customerOrders: Order[] = [
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

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Dynamically calculate if there are any active orders (status is not 'Delivered')
  const hasActiveOrders = useMemo(() => customerOrders.some(order => order.status !== 'Delivered'), []);
  
  return (
    <OrderContext.Provider value={{ orders: customerOrders, hasActiveOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
