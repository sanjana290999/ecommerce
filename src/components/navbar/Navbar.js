import React, { useEffect, useState } from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  getAllCategories,
  getProductsByCategories,
} from "../features/header/headerSlice";
import { searchProducts } from "../features/products/ProductsSlice";
import ProfileList from "../profileList/ProfileList";
import Cookies from "js-cookie";
import { getCartItem } from "../features/cart/CartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = useSelector((state) => state.header.categories.categories);
  const countItems = useSelector((state) => {
    return state.cart &&
      state.cart.cartAllItem &&
      Array.isArray(state.cart.cartAllItem.items)
      ? state.cart.cartAllItem.items
      : [];
  });

  useEffect(() => {
    dispatch(getCartItem());
    dispatch(getAllCategories());
  }, [dispatch]);

  const totalCountItem =
    countItems.length <= 0
      ? 0
      : countItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (e) => {
    dispatch(searchProducts(e.target.value));
  };

  return (
    <div className="relative z-50 bg-white    ">
      <div className=" bg-teal-600 text-white p-2 px-4 flex flex-col md:flex-row justify-evenly items-center">
        <p className="text-sm md:text-lg font-bold">
          osamcollection123@gmail.com
        </p>
        <p className="text-sm md:text-lg font-bold">Osam Collection</p>
        <p className="text-sm md:text-lg font-bold">Call: +91-9129-9129-91</p>
      </div>
      <div className="flex flex-col  md:mx-20 shadow-2xl md:flex-row justify-between items-center  md:px-44 py-4 px-4 ">
        <div className="flex items-center    space-x-4 md:space-x-10">
          <Link to="/">
            <img
              src="/asset/images/images-logo.png"
              width={60}
              className="rounded-lg"
              alt="logo"
            />
          </Link>
          <div className=" sm:flex hidden md:flex justify-center space-x-7">
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
        {/* <div className=" text-4xl hover:cursor-pointer  mr-20 font-bold md:hidden">
            <p>&#8801;</p>
          </div> */}
        {/* <div className="flex justify-center items-center    mt-4 md:mt-0 space-x-4 md:space-x-8"> */}
        <div className="w-full md:w-[40%]  flex justify-center md:justify-end  space-x-4 mt-4 md:space-x-6 md:mt-0">
          <input
            className="ml-0 md:ml-24 px-10 py-2 border-2 border-black  rounded-2xl "
            type="text"
            placeholder="search"
            onChange={handleSearch}
          />

          <div className="relative group mt-2">
            <FaUser className="w-6 h-6 text-black cursor-pointer" />
            <ProfileList />
          </div>
          <div className="relative mt-2">
            <Link to="/cart">
              <FaCartPlus className="w-6 h-6 text-black cursor-pointer" />
              {totalCountItem > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalCountItem}
                </span>
              )}
            </Link>
          </div>
          <Link to={"/help"}>
            <button
              className="bg-teal-500 text-white py-1 px-4 rounded-lg mt-2"
              type="button"
            >
              HELP
            </button>
          </Link>
          <button
            className="md:hidden bg-teal-500 text-white py-1 px-4 rounded-lg"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            MENU
          </button>
        </div>
        {/* <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-3 md:mt-0">
          <input
            className="ml-0 md:ml-24 px-10 rounded-2xl "
            type="text"
            placeholder="search"
          />
          <FaUser className="w-10 h-5 mt-4 ml-2" />
          <FaIndianRupeeSign className="w-10 h-5 mt-4" />
          <FaCartPlus className="w-10 h-5 mt-4" />
        </div> */}
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center py-2 space-y-2 border-t border-gray-200">
          {categories &&
            categories.map((element) => (
              <Link
                key={element._id}
                to={`/products-category/${element._id}`}
                className="text-black hover:text-teal-600"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-sm">
                  {element.name[0].toUpperCase()}
                  {element.name.slice(1)}
                </span>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
