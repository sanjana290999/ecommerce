import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import {
  editAddress,
  getAllAddresses,
  removeAddress,
} from "../features/address/AddressSlice";
import { generateOrder } from "../features/orders/OrdersSlice";
import RenderRazorpay from "../razorpay/RenderRazorpay";
import { getProfile } from "../features/auth/AuthSlice";

const Addresses = ({
  setForm,
  setEditAddress,
  setIsFormOpen,
  setSelectedAddress,
}) => {
  const [toggle, setToggle] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [displayRazorpay, setDisplayRazorpay] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null,
  });
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.allAddresses);
  // +++++++++++++++++++++++++++++++++++++++++
  const userDetils = useSelector((state) => state.auth.userProfile);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  console.log({ userDetils });
  useEffect(() => {
    dispatch(getAllAddresses());
  }, [dispatch]);

  const handleToggle = (id) => {
    setToggle((toggleId) => (toggleId === id ? null : id));
    setTimeout(() => {
      setToggle(null);
    }, 2000);
  };

  const handleDelete = (addressId) => {
    dispatch(removeAddress(addressId));
    toast.success("Address deleted successfully");
    dispatch(getAllAddresses());
  };

  const handleEdit = (address) => {
    setForm(address);
    setEditAddress(address);
    setIsFormOpen(true);
  };

  const handleSelectAddress = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const handleCreateOrder = () => {
    if (!selectedAddressId) {
      toast.error("Please select an address first.");
      return;
    }
    dispatch(generateOrder(selectedAddressId)).then((res) => {
      let data = res.payload;
      console.log({ data });
      setOrderDetails({
        orderId: data.id,
        currency: data.currency,
        amount: data.amount,
      });
      setDisplayRazorpay(true);
    });
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-6">Your Addresses</h2>
      {/* <div className="mb-4">
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-700"
          onClick={() => setIsFormOpen(true)}
        >
          Add New Address
        </button>
      </div> */}
      {!isEmpty(addresses) ? (
        addresses.map((address) => (
          <div
            key={address._id}
            className="bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between items-center"
          >
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="address"
                onChange={() => handleSelectAddress(address._id)}
                className="mr-4 mt-1 h-4 w-4 bg-teal-600 border-gray-300 focus:ring-teal-500 cursor-pointer mb-[28%]"
              />
              <label
                onClick={() => handleSelectAddress(address._id)}
                className="cursor-pointer flex flex-col"
              >
                <p className="font-bold text-lg">{address.addressLine1}</p>
                <p>{address.addressLine2}</p>
                <p>
                  {address.city}, {address.state} - {address.pincode}
                </p>
                <p>Country: {address.country}</p>
                <p>Address Type: {address.addressType}</p>
              </label>
            </div>
            <div className="relative">
              <button
                className="text-gray-900 text-2xl hover:text-gray-900"
                onClick={() => handleToggle(address._id)}
              >
                &#8942;
              </button>
              {toggle === address._id && (
                <div className="absolute right-0 bg-white border rounded shadow-xl z-10">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:text-white rounded-md hover:bg-teal-700"
                    onClick={() => handleEdit(address)}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:text-white rounded-md hover:bg-red-700"
                    onClick={() => handleDelete(address._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No addresses found.</p>
      )}
      <div className="mt-4 flex justify-end">
        <div className=" ">
          <button
            className="bg-gray-300 text-black px-6 py-2 mr-4 rounded-lg shadow-md hover:bg-gray-400"
            onClick={handleCreateOrder}
          >
            Back
          </button>
        </div>
        {selectedAddressId && (
          <div className="">
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-700"
              onClick={handleCreateOrder}
            >
              Place Order
            </button>
          </div>
        )}
        {displayRazorpay && (
          <RenderRazorpay
            user={{
              name: userDetils.firstName,
              email: "ksdkf@kl.com",
            }}
            order_id={orderDetails.orderId}
            currency={orderDetails.currency}
            amount={orderDetails.amount}
          />
        )}
      </div>
    </div>
  );
};

export default Addresses;
