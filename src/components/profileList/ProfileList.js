import {
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

import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import { logout } from "../features/auth/AuthSlice";
import { useDispatch } from "react-redux";

import Cookies from "js-cookie";
function ProfileList() {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className="relative group">
      <div className="absolute hidden z-10 group-hover:block bg-white text-black right-0 mt-2 py-2 w-48 shadow-lg rounded-md transform -translate-x-1/2 left-1/2">
        {!isEmpty(token) ? (
          <>
            <Link
              to="/profile"
              className="px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
            >
              <FaUserCircle className="mr-2" /> My Profile
            </Link>
            <Link
              to="/orders"
              className="px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
            >
              <FaBox className="mr-2" /> Orders
            </Link>
            <Link
              to="/wishlist"
              className="px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
            >
              <FaHeart className="mr-2" /> Wishlist
            </Link>
            <Link
              to="/coupons"
              className="px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
            >
              <FaTicketAlt className="mr-2" /> Coupons
            </Link>
            <Link
              to="/notifications"
              className="px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
            >
              <FaBell className="mr-2" /> Notifications
            </Link>
            <span
              className="px-4 py-2 text-sm hover:bg-gray-200 flex items-center cursor-pointer"
              onClick={logoutUser}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </span>
          </>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProfileList;
