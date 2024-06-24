import React from "react";
import { Link } from "react-router-dom";
import {
  FaQuestionCircle,
  FaTruck,
  FaUndo,
  FaMoneyCheckAlt,
  FaPhone,
} from "react-icons/fa";

export default function Help() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Help & Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* FAQs Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaQuestionCircle className="text-2xl text-blue-500 mr-4" />
            <h2 className="text-xl font-semibold">
              Frequently Asked Questions
            </h2>
          </div>
          <ul className="list-disc ml-8 text-gray-700">
            <li>
              <Link to="/faq" className="text-blue-500 hover:underline">
                How can I track my order?
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-blue-500 hover:underline">
                What is your return policy?
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-blue-500 hover:underline">
                How do I cancel my order?
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-blue-500 hover:underline">
                What payment methods are accepted?
              </Link>
            </li>
          </ul>
        </div>

        {/* Order Tracking Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaTruck className="text-2xl text-green-500 mr-4" />
            <h2 className="text-xl font-semibold">Track Your Order</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Enter your order ID and email to track the status of your shipment.
          </p>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Order ID"
              className="p-2 border rounded mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded mb-4"
            />
            <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
              Track Order
            </button>
          </form>
        </div>

        {/* Returns Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaUndo className="text-2xl text-red-500 mr-4" />
            <h2 className="text-xl font-semibold">Returns & Refunds</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Learn about our return policy and how to initiate a return.
          </p>
          <Link
            to="/returns"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            Return Items
          </Link>
        </div>

        {/* Payment Issues Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaMoneyCheckAlt className="text-2xl text-yellow-500 mr-4" />
            <h2 className="text-xl font-semibold">Payment Issues</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Having trouble with your payment? Find solutions here.
          </p>
          <Link
            to="/payment-issues"
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
          >
            Get Help
          </Link>
        </div>

        {/* Customer Support Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaPhone className="text-2xl text-indigo-500 mr-4" />
            <h2 className="text-xl font-semibold">Customer Support</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Need assistance? Contact our customer support team.
          </p>
          <Link
            to="/contact-support"
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
