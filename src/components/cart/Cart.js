import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItem,
  removeCartItem,
  updateCartItem,
  postCartItem,
} from "../features/cart/CartSlice";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { removeCoupon } from "../features/coupens/CoupensSlice";
import Loader from "../loader/Loader";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartAllItem || []);
  const Loading = useSelector((state) => state.cart.isLoding);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);

  const handleIncrement = (productId, quantity) => {
    dispatch(postCartItem({ productId, quantity: quantity + 1 }));
    dispatch(getCartItem());
  };

  const handleDecrement = (productId, quantity) => {
    if (quantity == 1) {
      toast("Item quantity should be greater than 1");
      return;
    }
    dispatch(postCartItem({ productId, quantity: quantity - 1 }));
    dispatch(getCartItem());
  };

  const handleRemove = (productId) => {
    dispatch(removeCartItem(productId));
    toast.success("Item removed from cart successfully");
    dispatch(getCartItem());
  };

  const handleRemoveCoupon = (couponCode) => {
    dispatch(removeCoupon(couponCode));
    dispatch(getCartItem());
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen mx-auto mt-10 max-w-6xl">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          {!isEmpty(cartItems) &&
            cartItems.items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-teal-600 shadow-md rounded-lg mb-4 p-4 flex flex-col md:flex-row items-center"
              >
                <Link to={`/product-details/${item.product._id}`}>
                  <img
                    src={item.product.mainImage.url}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg mr-4 mb-4 md:mb-0"
                  />
                </Link>
                <div className="flex-grow ml-4">
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-gray-600">Price: {item.product.price}</p>
                  <div className="flex items-center">
                    <button
                      className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full"
                      disabled={item.quantity == 1}
                      onClick={() =>
                        handleDecrement(item.product._id, item.quantity)
                      }
                    >
                      -
                    </button>
                    <p className="mx-3">{item.quantity}</p>
                    <button
                      className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full"
                      onClick={() =>
                        handleIncrement(item.product._id, item.quantity)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="m-2 hover:text-red-700  text-black font-medium "
                    onClick={() => handleRemove(item.product._id)}
                  >
                    REMOVE
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
            <p className="font-bold">{cartItems?.cartTotal}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Shipping</p>
            <p className="font-bold">0.00</p>
          </div>
          {cartItems.coupon && (
            <div
              className="flex justify-between mb-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-gray-600">
                Discount ({cartItems.coupon.couponCode})
              </p>
              <div className="flex items-center">
                <p className="font-bold">
                  -{cartItems.coupon.discountValue ?? 0}
                </p>
                {isHovered && (
                  <button
                    className="ml-2 bg-gray-500 hover:bg-gray-600 text-white px-1  py-1 rounded"
                    onClick={() =>
                      handleRemoveCoupon(cartItems.coupon.couponCode)
                    }
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          )}
          {/* <p className="text-gray-600">Remove Coupen</p> */}

          <hr className="my-2" />
          <div className="flex justify-between text-lg font-bold">
            <p>Total Amount</p>
            <p>{cartItems?.discountedTotal}</p>
          </div>

          <Link to={isEmpty(cartItems.coupon) ? "/coupons" : "#"}>
            <button
              className="mt-2 w-full py-2 px-4 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75"
              // onClick={handleApplyCoupon}
            >
              {!isEmpty(cartItems.coupon) ? "Applied" : "view all Coupons"}
              {/* view all Coupons */}
            </button>
          </Link>
          <Link to={"/manageAddresses"}>
            <button className="w-full py-2 px-4 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 mt-4">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
