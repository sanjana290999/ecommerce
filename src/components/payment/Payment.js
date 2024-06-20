import React, { useState } from "react";
import { isEmpty } from "lodash";

const PaymentPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card" },
    { id: "netbanking", name: "Net Banking" },
    { id: "cod", name: "Cash on Delivery" },
    // Add more payment methods here
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center  p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Payment Page
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
          {!isEmpty(paymentMethods) ? (
            paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`p-4 mb-4 border rounded-lg ${
                  selectedPaymentMethod === method.id
                    ? "border-teal-600"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedPaymentMethod === method.id}
                  onChange={() => handlePaymentMethodSelect(method.id)}
                  className="mr-4"
                />
                <label
                  onClick={() => handlePaymentMethodSelect(method.id)}
                  className="cursor-pointer"
                >
                  <p className="font-bold">{method.name}</p>
                </label>
              </div>
            ))
          ) : (
            <p>No payment methods found.</p>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="p-4 border rounded-lg">
            <p>Item 1: $100</p>
            <p>Item 2: $200</p>
            <p className="font-bold mt-2">Total: $300</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-700">
            Continue Shopping
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
