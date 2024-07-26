import React from "react";

export default function ManageOrders() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Manage Orders</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Order ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Customer</th>
            <th className="py-2 px-4 border-b border-gray-200">Total</th>
            <th className="py-2 px-4 border-b border-gray-200">Status</th>
            <th className="py-2 px-4 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">789</td>
            <td className="py-2 px-4 border-b border-gray-200">John Doe</td>
            <td className="py-2 px-4 border-b border-gray-200">$99.99</td>
            <td className="py-2 px-4 border-b border-gray-200">Pending</td>
            <td className="py-2 px-4 border-b border-gray-200">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2">
                View
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded">
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
