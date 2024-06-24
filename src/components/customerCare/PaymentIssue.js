import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function PaymentIssue() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Payment Issues</h1>

      {/* Common Payment Issues */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Payment Issues</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Payment Failed:</strong> Ensure that you have entered the
            correct card details and have sufficient balance.
          </li>
          <li>
            <strong>Double Payment:</strong> If you see two charges for the same
            order, one might be a pending charge that will be refunded
            automatically.
          </li>
          <li>
            <strong>Payment Pending:</strong> If your payment is pending, please
            wait for a few minutes and try refreshing the page.
          </li>
          <li>
            <strong>Card Declined:</strong> Contact your bank to ensure there
            are no issues with your card or try using a different payment
            method.
          </li>
        </ul>
      </div>

      {/* Steps to Resolve Payment Issues */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Steps to Resolve Payment Issues
        </h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Check your internet connection and ensure it's stable.</li>
          <li>Ensure that your card details are entered correctly.</li>
          <li>Try using a different payment method or card.</li>
          <li>
            Contact your bank to ensure there are no issues with your account.
          </li>
          <li>Refresh the page and try making the payment again.</li>
          <li>
            If the issue persists, contact our support team using the form
            below.
          </li>
        </ol>
      </div>

      {/* Contact Form for Payment Issues */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Report a Payment Issue</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Order ID</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your Order ID"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Issue Details</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Describe your payment issue"
              rows="6"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
}
