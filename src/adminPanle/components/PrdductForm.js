import React, { useState } from "react";

export default function ProductForm() {
  const [subImages, setSubImages] = useState([""]);

  const handleAddSubImage = () => {
    if (subImages.length < 4) {
      setSubImages([...subImages, ""]);
    }
  };

  const handleSubImageChange = (index, value) => {
    const newSubImages = subImages.map((img, i) => (i === index ? value : img));
    setSubImages(newSubImages);
  };

  return (
    <div className="max-w-xl p-20 py-8 mx-auto mt-10 bg-white shadow-2xl ">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium  text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock Quantity
          </label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category ID
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Main Image
          </label>
          <input
            type="file"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sub Images
          </label>
          {subImages.map((subImage, index) => (
            <input
              key={index}
              type="file"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              onChange={(e) => handleSubImageChange(index, e.target.value)}
            />
          ))}
          {subImages.length < 4 && (
            <button
              type="button"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleAddSubImage}
            >
              Add Another Sub Image
            </button>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
