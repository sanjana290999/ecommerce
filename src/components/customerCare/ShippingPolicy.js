import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="text-4xl font-bold flex justify-center">
        Shipping Policy
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <section className="bg-white shadow-md rounded-lg px-6 py-8 mb-6">
          <h4 className="text-lg font-bold mb-4">
            What are the delivery charges?
          </h4>
          <p className="text-gray-700 mb-2 text-sm">
            Delivery charge varies with each Seller.
          </p>
          <p className="text-gray-700 mb-2 text-sm">
            For Products listed as Flipkart Plus, a Rs 40 charge for delivery
            per item may be applied if the order value is less than Rs 500.
            While, orders of Rs 500 or above are delivered free.
          </p>
          <p className="text-gray-700 mb-2  text-sm">
            Sellers incur relatively higher shipping costs on low value items.
            In such cases, charging a nominal delivery charge helps them offset
            logistics costs. Please check your order summary to understand the
            delivery charges for individual products.
          </p>
          <h4 className="text-sm  font-bold mb-4">
            Why does the delivery date not correspond to the delivery timeline
            of X-Y business days?
          </h4>
          <p className="text-gray-700 mb-2 text-sm">
            It is possible that the Seller or our courier partners have a
            holiday between the day your placed your order and the date of
            delivery, which is based on the timelines shown on the product page.
            In this case, we add a day to the estimated date. Some courier
            partners and Sellers do not work on Sundays and this is factored in
            to the delivery dates.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg px-6 py-8 mb-6">
          <h4 className="textlg  font-bold mb-4">
            What is the estimated delivery time?
          </h4>
          <p className="text-gray-700 text-sm  mb-2">
            Sellers generally procure and ship the items within the time
            specified on the product page. Business days exclude public holidays
            and Sundays.
          </p>
          <p className="text-gray-700 text-sm  mb-2">
            Estimated delivery time depends on the following factors:
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>The Seller offering the product</li>
            <li>Product's availability with the Seller</li>
            <li>
              The destination to which you want the order shipped to and
              location of the Seller.
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg px-6 py-8 mb-6">
          <h4 className="text-lg  font-bold mb-4">International Shipping</h4>
          <p className="text-gray-700 text-sm mb-4">
            International shipping is available with the following conditions:
          </p>

          <ul className="list-disc list-inside text-sm">
            <li>Additional customs duties may apply.</li>
            <li>Delivery times vary based on location.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg px-6 py-8 mb-6">
          <h4 className="textlg  font-bold mb-4">Order Tracking</h4>
          <p className="text-gray-700 mb-2 text-sm ">
            You can track your order using the tracking number provided in your
            confirmation email.
          </p>
          <p className="text-gray-700 mb-2 text-sm">
            For any further assistance, please contact our customer service.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
