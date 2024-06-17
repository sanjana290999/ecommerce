import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getProfile, updateProfile } from "../features/auth/AuthSlice"; // Assuming you have an updateProfile action
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import FAQs from "../FAQ/Faq";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
const Profile = () => {
  const [updateData, setUpdateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const onInputChange = (e) => {
    const value = e.target.value;
    setUpdateData({
      ...updateData,
      [e.target.name]: value,
    });
  };
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.userProfile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleEdit = (e) => {
    e.preventDefault();
    try {
      dispatch(updateProfile(updateData));
      dispatch(getProfile());
      toast.success("updatede succefully");
    } catch (error) {
      toast.error("updeted faile");
    }
  };
  return (
    <div className="mb-5">
      <div className="flex h-full mt-8 ">
        <div className="bg-white shadow-md rounded-xl overflow-hidden ml-4  mr-56 p-5">
          <form onSubmit={handleEdit}>
            {!isEmpty(userProfile) ? (
              <div className="space-y-4">
                <div className="flex flex-col w-80">
                  <label className="text-gray-600 font-bold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    defaultValue={userProfile.firstName}
                    className="p-2 border border-gray-300 rounded-lg"
                    onChange={onInputChange}
                  />
                </div>

                <div className="flex flex-col w-80">
                  <label className="text-gray-600 font-bold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    defaultValue={userProfile.lastName}
                    className="p-2 border border-gray-300 rounded-lg"
                    onChange={onInputChange}
                  />
                </div>

                <div className="flex flex-col w-80">
                  <label className="text-gray-600 font-bold">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobileNumber"
                    defaultValue={userProfile.phoneNumber}
                    className="p-2 border border-gray-300 rounded-lg"
                    onChange={onInputChange}
                  />
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}

            <button
              type="submit"
              className=" mt-4
             py-2 px-4 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
            >
              Edit Profile
            </button>

            <FAQs />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
