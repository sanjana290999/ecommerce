import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { allOrders } from "../features/orders/OrdersSlice";
import Loader from "../loader/Loader";

const MyOrders = () => {
  const [page, setPage] = useState(1);
  const n = 5;
  const dispatch = useDispatch();
  const { orders, totalPages } = useSelector(
    (state) => state.orders.allMyOrders
  );
  const loding = useSelector((state) => state.orders.isLoding);

  console.log({ orders });

  useEffect(() => {
    dispatch(allOrders(page)).then((res) => {
      console.log({ res });
    });
  }, [dispatch, page]);

  if (loding) {
    return <Loader />;
  }

  const handleNextPage = () => {
    if ((page + 1) * n < orders.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

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
              className="bg-white shadow-md rounded-lg mb-4 p-4 border border-teal-300"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2 ">
                <div>
                  <h2 className="text-lg font-semibold">
                    Order ID: {order._id}
                  </h2>
                  <p className="text-gray-600">Status: {order.status}</p>
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
                <div className="flex justify-between items-center border-b py-2">
                  <div className="ml-2">
                    <h3 className="text-md font-medium">
                      TotalItems: {order.totalOrderItems}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="text-right font-bold mt-2">
                Total: {order.orderPrice}
              </div>
            </div>
          ))
        )}
        <div className="flex justify-between items-center mt-4">
          <button
            className={`py-2 px-4 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index + 1 === page
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className={`py-2 px-4 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 ${
              page >= totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNextPage}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
