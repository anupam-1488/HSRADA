import React from 'react';
import { Package, TrendingUp, Clock, CheckCircle, XCircle, ShoppingBag } from 'lucide-react';

// Mock data for demonstration
const orders = [
    { id: 1, customer: 'John Doe', total: 599, status: 'Delivered', date: '2024-03-15' },
    { id: 2, customer: 'Jane Smith', total: 899, status: 'Pending', date: '2024-03-16' },
    { id: 3, customer: 'Mike Johnson', total: 299, status: 'Processing', date: '2024-03-16' },
    { id: 4, customer: 'Sarah Wilson', total: 499, status: 'Delivered', date: '2024-03-14' },
    { id: 5, customer: 'Robert Brown', total: 799, status: 'Cancelled', date: '2024-03-13' },
];

const stats = {
    totalOrders: 156,
    pendingOrders: 23,
    deliveredOrders: 128,
    totalRevenue: 89599,
    cancelledOrders: 5
};

function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-amber-900 text-white py-6 px-4">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <ShoppingBag className="h-12 w-12 text-amber-600" />
                            <div className="ml-4">
                                <h3 className="text-gray-500 text-sm">Total Orders</h3>
                                <p className="text-2xl font-semibold text-gray-900">{stats.totalOrders}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <Clock className="h-12 w-12 text-yellow-600" />
                            <div className="ml-4">
                                <h3 className="text-gray-500 text-sm">Pending Orders</h3>
                                <p className="text-2xl font-semibold text-gray-900">{stats.pendingOrders}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <CheckCircle className="h-12 w-12 text-green-600" />
                            <div className="ml-4">
                                <h3 className="text-gray-500 text-sm">Delivered Orders</h3>
                                <p className="text-2xl font-semibold text-gray-900">{stats.deliveredOrders}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <TrendingUp className="h-12 w-12 text-blue-600" />
                            <div className="ml-4">
                                <h3 className="text-gray-500 text-sm">Total Revenue</h3>
                                <p className="text-2xl font-semibold text-gray-900">₹{stats.totalRevenue}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Order ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Total
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            #{order.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {order.customer}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            ₹{order.total}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                                                            'bg-blue-100 text-blue-800'}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {order.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button className="text-amber-600 hover:text-amber-900 mr-4">
                                                View Details
                                            </button>
                                            <button className="text-amber-600 hover:text-amber-900">
                                                Update Status
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;