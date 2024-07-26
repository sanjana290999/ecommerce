import React from "react";

export default function ManageUsers() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Manage Users</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">User ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Name</th>
            <th className="py-2 px-4 border-b border-gray-200">Email</th>
            <th className="py-2 px-4 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">456</td>
            <td className="py-2 px-4 border-b border-gray-200">Jane Smith</td>
            <td className="py-2 px-4 border-b border-gray-200">
              jane.smith@example.com
            </td>
            <td className="py-2 px-4 border-b border-gray-200">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
