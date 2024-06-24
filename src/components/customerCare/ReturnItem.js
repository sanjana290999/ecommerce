import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

export default function ReturnItem() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Return an Item</h1>

      {/* Steps to Return an Item */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Steps to Return an Item</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Go to 'My Orders' and select the item you want to return.</li>
          <li>Click on 'Return' and choose a reason for the return.</li>
          <li>Select your preferred return method (pickup or self-ship).</li>
          <li>Confirm the return request.</li>
          <li>
            Pack the item securely and attach the return label if applicable.
          </li>
          <li>
            Hand over the package to the delivery personnel or ship it yourself.
          </li>
          <li>
            Once the item is received and inspected, your refund will be
            processed.
          </li>
        </ol>
      </div>

      {/* Return Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6">Return Form</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700">Order ID</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Your Order ID"
              />
            </div>
            <div>
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Product Name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Reason for Return</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600">
              <option>Defective Item</option>
              <option>Wrong Item Received</option>
              <option>Item Not as Described</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Additional Comments</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Provide any additional details about your return"
              rows="6"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg"
          >
            Submit Return Request
          </button>
        </form>
      </div>

      {/* FAQs */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <FaQuestionCircle className="w-6 h-6 text-gray-700 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How long do I have to return an item?
              </h3>
              <p className="text-gray-700">
                You can return items within 30 days of delivery.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaQuestionCircle className="w-6 h-6 text-gray-700 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Will I be charged for returning an item?
              </h3>
              <p className="text-gray-700">
                No, returns are free of charge if you use our provided return
                methods.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaQuestionCircle className="w-6 h-6 text-gray-700 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How do I track my return?
              </h3>
              <p className="text-gray-700">
                You can track your return status in the 'My Orders' section of
                your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
