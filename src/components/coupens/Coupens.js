import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupens } from "../features/coupens/CoupensSlice";
import { Circles } from "react-loader-spinner";

const CouponsPage = () => {
  const dispatch = useDispatch();
  const { allCoupons: coupons, isLoading } = useSelector(
    (state) => state.coupons
  );

  useEffect(() => {
    dispatch(getAllCoupens());
  }, [dispatch]);
  console.log({ isLoading });
  if (isLoading) {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
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
