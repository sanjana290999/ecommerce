import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const initialState = {
  allAddresses: "",
  address: "",
  error: "",
  isLoding: false,
};

export const getAllAddresses = createAsyncThunk(
  "get/allAddresses",
  async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/addresses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data.addresses;
    } catch (error) {
      console.log("error");
      console.log(error.response.data.message);
    }
  }
);
export const addAddress = createAsyncThunk("add/address", async (data) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/ecommerce/addresses`,
      data,
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
});
export const removeAddress = createAsyncThunk(
  "remove/address",
  async (addressId) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/addresses/${addressId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log("error");
    }
  }
);

export const updateAddress = createAsyncThunk(
  "edit/address",
  async (address) => {
    try {
      const token = Cookies.get("token");
      console.log({ token });
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/addresses/${address._id}`,
        address,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.log("error");
    }
  }
);
const addressSlice = createSlice({
  name: "header",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllAddresses.fulfilled, (state, action) => {
      state.allAddresses = action.payload;
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(removeAddress.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(updateAddress.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });

    builder.addMatcher(isPending, (state, action) => {
      state.error = "";
      state.isLoding = true;
    });
    builder.addMatcher(isRejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export default addressSlice.reducer;
