import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaCartPlus,
  FaUser,
  FaSignInAlt,
  FaUserCircle,
  FaCoins,
  FaBox,
  FaHeart,
  FaTicketAlt,
  FaGift,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  getProductsByCategories,
} from "../features/header/headerSlice";
import { logout } from "../features/auth/AuthSlice";

const Navbar = ({ cart, setCart }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.header.categories.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className="relative z-50">
      <div>
        <div className="p-2 flex flex-col md:flex-row justify-evenly bg-teal-600 text-white rounded-md">
          {/* <img
            src="/asset/images/images-logo.png"
            width={50}
            className="rounded-lg"
            alt="logo"
          /> */}
          <p className="text-lg font-bold">osamcollection123@gmail.com</p>
          <p className="text-lg font-bold">Osam collection</p>
          <p className="text-lg font-bold">Call: +91-9129-9129-91</p>
        </div>
        <div className="p-2 flex flex-col md:flex-row justify-between items-center mt-2 mx-4 md:mx-32 rounded-md shadow-2xl">
          <div className="w-full md:w-[70%] flex justify-evenly mt-5 text-black hover:cursor-pointer text-base">
            {categories &&
              categories.map((element) => (
                <Link
                  key={element._id}
                  to={`/products-category/${element._id}`}
                >
                  <span>
                    {element.name[0].toUpperCase()}
                    {[...element.name.slice(1, -1)]}
                  </span>
                </Link>
              ))}
          </div>
          <div className="w-full md:w-[40%] flex items-center text-white mt-5 md:mt-0">
            <input
              className="w-full md:w-auto ml-4 md:ml-20 px-2 md:px-10 my-3 rounded-2xl py-2 text-black border-gray-600 bg-gray-200"
              type="text"
              placeholder="search"
            />
            <div className="relative group ml-4">
              <FaUser className="w-6 h-6 md:w-10 md:h-5 hover:cursor-pointer text-black" />
              <div className="absolute hidden z-10 group-hover:block bg-white text-black left-1/2 transform -translate-x-1/2 mt-1 py-2 w-48 shadow-lg rounded-md">
                <Link
                  to="/login"
                  className=" px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
                >
                  <FaSignInAlt className="mr-2" /> Login
                </Link>
                <Link
                  to="/profile"
                  className=" px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
                >
                  <FaUserCircle className="mr-2" /> My Profile
                </Link>

                <Link
                  to="/orders"
                  className=" px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
                >
                  <FaBox className="mr-2" /> Orders
                </Link>
                <Link
                  to="/wishlist"
                  className=" px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
                >
                  <FaHeart className="mr-2" /> Wishlist
                </Link>
                <Link
                  to="/coupons"
                  className=" px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
                >
                  <FaTicketAlt className="mr-2" /> Coupons
                </Link>

                <Link
                  to="/notifications"
                  className=" px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
                >
                  <FaBell className="mr-2" /> Notifications
                </Link>
                <span
                  className=" px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
                  onClick={logoutUser}
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </span>
              </div>
            </div>
            <Link to={"/cart"}>
              <FaCartPlus className="w-6 h-6 md:w-10 md:h-5 ml-2 hover:cursor-pointer text-black" />
            </Link>
            <button
              className="border-white py-1 px-5 text-black text-lg font-medium bg-teal-500 rounded-lg ml-4 md:ml-10 m-2"
              type="button"
            >
              HELP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
