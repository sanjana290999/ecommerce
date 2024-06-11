import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItem,
  removeCartItem,
  updateCartItem,
} from "../features/cart/CartSlice";
import { isEmpty } from "lodash";
import { postCartItem } from "../features/cart/CartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartAllItem || []);

  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);
  const handleIncrement = (productId, quantity) => {
    dispatch(postCartItem({ productId, quantity: quantity + 1 }));
    dispatch(getCartItem());
  };
  const handleDecrement = (productId, quantity) => {
    if (quantity == 1) {
      toast("item should be greater than 1");
    }
    dispatch(postCartItem({ productId, quantity: quantity - 1 }));
    dispatch(getCartItem());
  };
  const handleRemove = (productId) => {
    dispatch(removeCartItem(productId));
    toast.success("remove cart succefully");
    dispatch(getCartItem());
  };
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="p-4 md:p-8 bg-gray-100 min-h-screen mx-96 mt-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            {!isEmpty(cartItems) &&
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg mb-4 p-4 flex flex-col md:flex-row items-center"
                >
                  <Link to={`/product-details/${item.product._id}`}>
                    <img
                      src={item.product.mainImage.url}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg mr-4 mb-4 md:mb-0"
                    />
                  </Link>
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">
                      {item.product.name}
                    </h2>
                    <p className="text-gray-600">Price: {item.product.price}</p>
                    <div className="flex items-center">
                      <button
                        className="bg-gray-200 text-gray-800 py-1 px-3  rounded-full"
                        disabled={item.quantity == 1}
                        onClick={() =>
                          handleDecrement(item.product._id, item.quantity)
                        }
                      >
                        -
                      </button>
                      <p className="mx-3 ">{item.quantity}</p>
                      <button
                        className="bg-gray-200 text-gray-800 py-1 px-3  rounded-full"
                        onClick={() =>
                          handleIncrement(item.product._id, item.quantity)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="text"
                      className=" mt-4
                       py-1 px-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
                      onClick={() =>
                        handleRemove(item.product._id, item.quantity)
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">
                      {item.product.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Price ({cartItems.length} items)</p>
              <p className="font-bold">{totalAmount}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Shipping</p>
              <p className="font-bold">00.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Discount</p>
              <p className="font-bold">0.00</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold">
              <p>Total Amount</p>
              <p>{totalAmount}</p>
            </div>
            <button className="w-full py-2 px-4 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 mt-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
