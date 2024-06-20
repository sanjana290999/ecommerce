import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { allOrders } from "../features/orders/OrdersSlice";

const MyOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.allMyOrders);

  console.log({ orders });

  useEffect(() => {
    dispatch(allOrders()).then((res) => {
      console.log({ res });
    });
  }, [dispatch]);

  return (
    <div className="mb-5 rounded-xl">
      <div className="p-4 rounded-lg bg-white h-full ml-4 mr-80 mt-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">My Orders</h1>
        {isEmpty(orders) ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg mb-4 p-4"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div>
                  <h2 className="text-lg font-semibold">
                    Order ID: {order._id}
                  </h2>
                  <p className="text-gray-600">Status: {order.status}</p>
                  {/* <p className="text-gray-600">
                    Date: {new Date(order.createdAt).toLocaleDateString()}
                  </p> */}
                  <p className="text-gray-600">
                    Name: {order.customer.username}
                  </p>
                  <p className="text-gray-600">Email: {order.customer.email}</p>
                  <div className="mt-2">
                    <h3 className="text-md font-semibold">Shipping Address</h3>
                    <p className="text-gray-600">
                      {order.address.addressLine1}
                    </p>
                    {order.address.addressLine2 && (
                      <p className="text-gray-600">
                        {order.address.addressLine2}
                      </p>
                    )}
                    <p className="text-gray-600">
                      {order.address.city}, {order.address.state} -{" "}
                      {order.address.pincode}
                    </p>
                    <p className="text-gray-600">
                      Country: {order.address.country}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {order.items && order.items.length > 0 ? (
                  order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b py-2"
                    >
                      <div className="flex items-center">
                        <div className="ml-2">
                          <h3 className="text-md font-medium">{item.name}</h3>
                          <p className="text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-800 font-medium">${item.price}</p>
                    </div>
                  ))
                ) : (
                  <p>No items found for this order.</p>
                )}
              </div>
              <div className="text-right font-bold mt-2">
                Total: {order.orderPrice}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
