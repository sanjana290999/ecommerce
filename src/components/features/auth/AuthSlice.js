import {
  createAction,
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";
//import Signup from "../../authentication/Signup";
import axios from "axios";
import Cookies from "js-cookie";

export const userSignup = createAsyncThunk("user/signup", async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/register`,
      data
    );
    Cookies.set("token", response.data.data.accessToken, {
      expires: 7,
      secure: true,
    });
    return response.data.data;
  } catch (error) {
    console.log("error");
    alert(error.response.data.message);
    console.log(error.response.data.message);
  }
});
export const userLogin = createAsyncThunk("user/login", async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/login`,
      data
    );
    Cookies.set("token", response.data.data.accessToken, {
      expires: 7,
      secure: true,
    });
    return response.data.data;
  } catch (error) {
    alert(error.response.data.message);
    console.log(error.response.data.message);
  }
});
export const logout = createAsyncThunk("logout", async () => {
  try {
    const token = Cookies.get("token");
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    Cookies.remove("token");
    window.location.reload();
    return response.data.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const getProfile = createAsyncThunk("get/profile", async () => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/ecommerce/profile`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const updateProfile = createAsyncThunk(
  "update/profile",
  async (updateData) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/profile`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const initialState = {
  userLogin: [],
  userSignup: [],
  userProfile: [],
  error: "",
  isLoding: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
      state.error = "";
      state.isLoding = false;
    });

    builder.addMatcher(isRejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
    builder.addMatcher(isPending, (state, action) => {
      state.error = "";
      state.isLoding = true;
    });
  },
});

export default authSlice.reducer;
