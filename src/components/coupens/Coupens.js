import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoupon,
  editCoupon,
  removeCoupon,
} from "../features/coupons/couponsSlice";

const CouponsPage = () => {
  const [form, setForm] = useState({
    code: "",
    discount: "",
    expirationDate: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [toggle, setToggle] = useState(null);

  const dispatch = useDispatch();
  const coupons = useSelector((state) => state.coupons.coupons);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editCoupon({ ...form, id: editId })).then(() => {
        setIsEditing(false);
        setEditId(null);
      });
    } else {
      dispatch(addCoupon(form));
    }

    setForm({
      code: "",
      discount: "",
      expirationDate: "",
    });
  };

  const handleEdit = (coupon) => {
    setForm(coupon);
    setIsEditing(true);
    setEditId(coupon.id);
  };

  const handleDelete = (couponId) => {
    dispatch(removeCoupon(couponId));
  };

  const handleToggle = (id) => {
    setToggle((toggleId) => (toggleId === id ? null : id));
  };

  return (
    <div className="p-6 md:p-8 bg-gray-100 mx-auto mt-10 min-h-screen max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Manage Coupons
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6">
            {isEditing ? "Edit Coupon" : "Add a New Coupon"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="Coupon Code"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="text"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              placeholder="Discount"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="date"
              name="expirationDate"
              value={form.expirationDate}
              onChange={handleChange}
              placeholder="Expiration Date"
              className="p-3 border border-gray-300 rounded w-full col-span-2"
              required
            />
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700"
            >
              {isEditing ? "Update" : "Save"}
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-400"
              onClick={() => {
                setForm({
                  code: "",
                  discount: "",
                  expirationDate: "",
                });
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <h2 className="text-2xl font-semibold mb-6">Your Coupons</h2>
      {coupons && coupons.length > 0 ? (
        coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-lg">Code: {coupon.code}</p>
              <p>Discount: {coupon.discount}</p>
              <p>Expiration Date: {coupon.expirationDate}</p>
            </div>
            <div className="relative mb-28 rounded-xl">
              <button
                className="text-gray-900 text-2xl hover:text-gray-900"
                onClick={() => handleToggle(coupon.id)}
              >
                &#8942;
              </button>
              {toggle === coupon.id && (
                <div className="absolute right-0 bg-white border rounded shadow-xl z-10">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:text-white rounded-md hover:bg-teal-700"
                    onClick={() => handleEdit(coupon)}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:text-white rounded-md hover:bg-red-700"
                    onClick={() => handleDelete(coupon.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No coupons found.</p>
      )}
    </div>
  );
};

export default CouponsPage;
