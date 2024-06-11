import React, { useState } from "react";

const ManageAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: "",
    addressType: "Home",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setAddresses([...addresses, form]);
    setForm({
      name: "",
      mobile: "",
      pincode: "",
      locality: "",
      address: "",
      city: "",
      state: "",
      landmark: "",
      alternatePhone: "",
      addressType: "Home",
    });
  };

  const handleCancel = () => {
    setForm({
      name: "",
      mobile: "",
      pincode: "",
      locality: "",
      address: "",
      city: "",
      state: "",
      landmark: "",
      alternatePhone: "",
      addressType: "Home",
    });
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 mx-96 mt-10 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Manage Addresses</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add a New Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="locality"
            value={form.locality}
            onChange={handleChange}
            placeholder="Locality"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address (Area and Street)"
            className="p-2 border border-gray-300 rounded col-span-2"
          />
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City/District/Town"
            className="p-2 border border-gray-300 rounded"
          />
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi">Delhi</option>
            {/* Add other states here */}
          </select>
          <input
            type="text"
            name="landmark"
            value={form.landmark}
            onChange={handleChange}
            placeholder="Landmark (Optional)"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="alternatePhone"
            value={form.alternatePhone}
            onChange={handleChange}
            placeholder="Alternate Phone (Optional)"
            className="p-2 border border-gray-300 rounded"
          />
          <div className="col-span-2 flex items-center">
            <label className="mr-4">Address Type:</label>
            <label className="mr-2">
              <input
                type="radio"
                name="addressType"
                value="Home"
                checked={form.addressType === "Home"}
                onChange={handleChange}
                className="mr-1"
              />
              Home
            </label>
            <label>
              <input
                type="radio"
                name="addressType"
                value="Work"
                checked={form.addressType === "Work"}
                onChange={handleChange}
                className="mr-1"
              />
              Work
            </label>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-700"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Your Addresses</h2>
        {addresses.map((address, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p>
              <strong>{address.name}</strong>
            </p>
            <p>{address.address}</p>
            <p>
              {address.city}, {address.state} - {address.pincode}
            </p>
            <p>{address.locality}</p>
            <p>Mobile: {address.mobile}</p>
            {address.alternatePhone && (
              <p>Alternate Phone: {address.alternatePhone}</p>
            )}
            <p>{address.landmark && `Landmark: ${address.landmark}`}</p>
            <p>Address Type: {address.addressType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAddresses;
