import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductForm from "./PrdductForm";

const initialProducts = [
  { id: 123, name: "Product Name", price: 123.45, stock: "In Stock" },
  // Add more products as needed
];

export default function ManageProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [visible, setVisible] = useState(false);

  const handleEdit = (productId) => {};

  const handleDelete = () => {};
  const addProduct = () => {
    setVisible(!visible);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Manage Products</h1>

      <button
        className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg mb-4 "
        onClick={addProduct}
      >
        Add Product
      </button>
      {visible && <ProductForm />}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Product ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
              <th className="py-2 px-4 border-b border-gray-200">Stock</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.id}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.stock}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
