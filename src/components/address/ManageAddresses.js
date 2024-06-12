import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAddresses,
  addAddress,
  updateAddress,
} from "../features/address/AddressSlice";
import { isEmpty } from "lodash";
import Addresses from "./Addresses";

const ManageAddresses = () => {
  const [form, setForm] = useState({
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    country: "",
    city: "",
    state: "",
    addressType: "Home",
  });
  const [editAddress, setEditAddress] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(form._id)) {
      dispatch(updateAddress(form)).then(() => {
        dispatch(getAllAddresses());
      });
    } else
      dispatch(addAddress(form)).then(() => {
        dispatch(getAllAddresses());
      });

    setForm({
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      country: "",
      city: "",
      state: "",
      addressType: "Home",
    });
  };
  const handleCancel = () => {
    setForm({
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      country: "",
      city: "",
      state: "",
      addressType: "Home",
    });
  };

  return (
    <div className="p-6 md:p-8 bg-gray-100 mx-auto mt-10 min-h-screen max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Manage Addresses
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6">Add a New Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="addressLine1"
              value={form.addressLine1}
              onChange={handleChange}
              placeholder="Address Line 1"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="text"
              name="addressLine2"
              value={form.addressLine2}
              onChange={handleChange}
              placeholder="Address Line 2"
              className="p-3 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
              className="p-3 border border-gray-300 rounded w-full col-span-2"
              required
            />
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City/District/Town"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded w-full"
              required
            >
              <option value="">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Delhi">Delhi</option>
              {/* Add other states here */}
            </select>
            <div className="col-span-2 flex items-center space-x-6">
              <label className="font-semibold">Address Type:</label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="addressType"
                  value="Home"
                  checked={form.addressType === "Home"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span>Home</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="addressType"
                  value="Work"
                  checked={form.addressType === "Work"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span>Work</span>
              </label>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700"
            >
              {!isEmpty(form._id) ? "update" : "save"}
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <Addresses
        setForm={setForm}
        editAddress={editAddress}
        setEditAddress={setEditAddress}
      />
    </div>
  );
};
export default ManageAddresses;
