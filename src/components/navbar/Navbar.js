import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartPlus, FaIndianRupeeSign, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  getProductsByCategories,
} from "../features/header/headerSlice";
import { searchProducts } from "../features/products/ProductsSlice";
import ProfileList from "../profileList/ProfileList";
import Cookies from "js-cookie";
import { isEmpty } from "lodash";

const Navbar = ({ cart, setCart }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.header.categories.categories);
  const token = Cookies.get("token");

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(searchProducts(e.target.value));
  };

  return (
    <div className="relative z-50 bg-white shadow-md">
      <div className="bg-teal-600 text-white p-2 px-10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-lg font-bold">
          osamcollection123@gmail.com
        </p>
        <p className="text-sm md:text-lg font-bold">Osam Collection</p>
        <p className="text-sm md:text-lg font-bold">Call: +91-9129-9129-91</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-10">
        <div className="flex items-center space-x-4 md:space-x-10">
          <Link to="/">
            <img
              src="/asset/images/images-logo.png"
              width={50}
              className="rounded-lg"
              alt="logo"
            />
          </Link>
          <div className="hidden md:flex space-x-7">
            {categories &&
              categories.map((element) => (
                <Link
                  key={element._id}
                  to={`/products-category/${element._id}`}
                  className="text-black hover:text-teal-600"
                >
                  <span className="text-base font-medium">
                    {element.name[0].toUpperCase()}
                    {element.name.slice(1)}
                  </span>
                </Link>
              ))}
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0 space-x-4 md:space-x-8">
          <input
            className="flex-grow md:flex-grow-0 w-full md:w-96 px-4 py-2 border border-gray-300 rounded-2xl text-black"
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
          <Link to={"/profileList"}>
            <div className="relative group">
              <FaUser className="w-6 h-6 text-black cursor-pointer" />
              <ProfileList />
            </div>
          </Link>
          <Link to="/cart">
            <FaCartPlus className="w-6 h-6 text-black cursor-pointer" />
          </Link>
          <button
            className="bg-teal-500 text-white py-1 px-4 rounded-lg"
            type="button"
          >
            HELP
          </button>
        </div>
      </div>
      <div className="md:hidden flex justify-center py-2 space-x-4 border-t border-gray-200">
        {categories &&
          categories.map((element) => (
            <Link
              key={element._id}
              to={`/products-category/${element._id}`}
              className="text-black hover:text-teal-600"
            >
              <span className="text-sm">
                {element.name[0].toUpperCase()}
                {element.name.slice(1)}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
