import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  editAddress,
  getAllAddresses,
  removeAddress,
} from "../features/address/AddressSlice";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

function Addresses({ setForm, setEditAddress }) {
  const [toggle, setToggle] = useState(null);
  //   const [editAdderess, setEditAddress] = useState([]);
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.allAddresses);

  useEffect(() => {
    dispatch(getAllAddresses());
  }, [dispatch]);
  const handleToggle = (id) => {
    setToggle((toggleId) => (toggleId === id ? null : id));
    setTimeout(() => {
      setToggle("");
    }, 2000);
  };
  const handleDelete = (addressId) => {
    dispatch(removeAddress(addressId));
    toast.success("address deleted sucessfully");
    dispatch(getAllAddresses());
  };

  const handleEdit = (address) => {
    setForm(address);
    setEditAddress(address);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Your Addresses</h2>
      {!isEmpty(addresses) ? (
        addresses.map((address) => (
          <div
            key={address._id}
            className="bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-lg">{address.addressLine1}</p>
              <p>{address.addressLine2}</p>
              <p>
                {address.city}, {address.state} - {address.pincode}
              </p>
              <p>Country: {address.country}</p>
              <p>Address Type: {address.addressType}</p>
            </div>
            <div className="relative mb-28  rounded-xl">
              <button
                className="text-gray-900 text-2xl hover:text-gray-900 "
                onClick={() => handleToggle(address._id)}
              >
                &#8942;
              </button>
              {toggle === address._id && (
                <div className="absolute right-0 bg-white border rounded shadow-xl z-10">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:text-white  rounded-md  hover:bg-teal-700
                  "
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
    </div>
  );
}

export default Addresses;
