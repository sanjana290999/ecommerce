import React from "react";

const MyOrders = () => {
  const orders = [
    {
      id: "1",
      status: "Delivered",
      date: "2023-06-01",
      items: [
        {
          id: "1",
          name: "Product 1",
          quantity: 2,
          price: 100,
        },
        {
          id: "2",
          name: "Product 2",
          quantity: 1,
          price: 200,
        },
      ],
    },
    {
      id: "2",
      status: "Shipped",
      date: "2023-06-05",
      items: [
        {
          id: "3",
          name: "Product 3",
          quantity: 1,
          price: 150,
        },
      ],
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen mx-80 mt-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow-md rounded-lg mb-4 p-4">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div>
              <h2 className="text-lg font-semibold">Order ID: {order.id}</h2>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="text-gray-600">Date: {order.date}</p>
            </div>
          </div>
          <div>
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div className="flex items-center">
                  <div className="ml-2">
                    <h3 className="text-md font-medium">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-gray-800 font-medium">${item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-right font-bold mt-2">
            {/* Total: $
            {order.items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
