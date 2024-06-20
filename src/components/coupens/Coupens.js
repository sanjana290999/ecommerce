import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, getAllCoupens } from "../features/coupens/CoupensSlice";
import { Circles } from "react-loader-spinner";
// import { BiLoader } from "react-icons/bi";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";
import { getCartItem } from "../features/cart/CartSlice";
import { Link, useNavigate } from "react-router-dom";

const CouponsPage = () => {
  const dispatch = useDispatch();
  const { allCoupons: coupons, isLoading } = useSelector(
    (state) => state.coupons
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllCoupens());
  }, [dispatch]);
  console.log({ isLoading });
  if (isLoading) {
    <Loader />;
  }
  const handleApplyCoupon = (couponCode) => {
    dispatch(applyCoupon(couponCode));
    dispatch(getCartItem());
    navigate("/cart");

    if (!isEmpty(couponCode)) {
      toast.success("applied");
    } else {
      toast.error("Copones Not valid!");
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6 md:p-8 bg-white mb-5 mx-auto mt-8 min-h-screen ml-4 rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Your Coupons
      </h2>
      {coupons && coupons.length > 0 ? (
        coupons.map((coupon) => (
          <div
            key={coupon._id}
            className="bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-lg text-gray-800">
                Code:{" "}
                <span className="text-teal-600">{coupon.couponCode} </span>
              </p>
              {/* <p className="text-lg text-gray-700">{coupon.name}</p> */}
              <p className="text-lg text-gray-700 font-bold">
                {coupon.type} Discount: {coupon.discountValue}%
              </p>

              <p className="text-black">
                Minimum Cart Value:{" "}
                <span className="font-semibold">{coupon.minimumCartValue}</span>
              </p>
              <p className="text-black">
                Expiration Date:{" "}
                <span className="font-semibold">
                  {new Date(coupon.expiryDate).toLocaleDateString()}
                </span>
              </p>

              <button
                className=" mt-2 px-2 py-1 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
                onClick={() => handleApplyCoupon(coupon.couponCode)}
              >
                Apply Coupon Code
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No coupons found.</p>
      )}
    </div>
  );
};

export default CouponsPage;
