import {
  FaRegUser,
  FaRegCreditCard,
  FaHome,
  FaGift,
  FaHeart,
  FaTag,
  FaPowerOff,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdOutlineCardGiftcard,
  MdNotifications,
  MdReviews,
} from "react-icons/md";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { logout } from "../features/auth/AuthSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className="  rounded-lg  h-[90%]">
      <div className="p-2 bg-teal-600 text-white font-bold flex  rounded-md ml-56 mt-8 text-xl">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-14 h-14 rounded-full"
        />
        <p className=" ml-4  mt-4"> Hello</p>
      </div>
      <div className="w-80 bg-white shadow-lg rounded-md h-[90%] mt-2 ml-56">
        <div className="p-4">
          <ul>
            <li>
              <Link
                to="/orders"
                className=" py-2 px-4 hover:bg-gray-200 flex items-center"
              >
                <FaHome className="mr-2" /> My Orders
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className=" py-2 px-4 hover:bg-gray-200 flex items-center"
              >
                <FaRegUser className="mr-2" /> Profile Information
              </Link>
            </li>
            <li>
              <Link
                to="/manageAddresses"
                className=" py-2 px-4 hover:bg-gray-200 flex items-center"
              >
                <MdLocationOn className="mr-2" /> Manage Addresses
              </Link>
            </li>
            {/* <li>
              <Link
                to="/pancard"
                className=" py-2 px-4 hover:bg-gray-200 flex items-center"
              >
                <FaRegCreditCard className="mr-2" /> PAN Card Information
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/gift-cards"
                className=" py-2 px-4 hover:bg-gray-200 flex items-center"
              >
                <MdOutlineCardGiftcard className="mr-2" /> Gift Cards
              </Link>
            </li> */}
            <li>
              <Link
                to="/coupons"
                className=" py-2 px-4 hover:bg-gray-200 flex items-center"
              >
                <FaTag className="mr-2" /> My Coupons
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className=" py-2 px-4 hover:bg-gray-200 flex items-center"
              >
                <FaHeart className="mr-2" /> My Wishlist
              </Link>
            </li>
            <li
              className=" py-2 px-4 hover:bg-gray-200 flex items-center"
              onClick={logoutUser}
            >
              <FaPowerOff className="mr-2" /> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
