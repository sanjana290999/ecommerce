import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  allCoupons: "",
  error: "",
  isLoading: false,
};
export const getAllCoupens = createAsyncThunk("get/allCoupens", async () => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/ecommerce/coupons/customer/available`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.coupons);
    return response.data.data.coupons;
  } catch (error) {
    console.log("error");
  }
});
export const applyCoupon = createAsyncThunk(
  "apply/coupon",
  async (couponCode) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/coupons/c/apply`,
        { couponCode },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data.coupon;
    } catch (error) {
      console.log("error");
    }
  }
);
export const removeCoupon = createAsyncThunk(
  "remove/coupon",
  async (couponCode) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/coupons/c/remove`,
        { couponCode },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data.coupon;
    } catch (error) {
      console.log("error");
    }
  }
);
const couponsSice = createSlice({
  name: "coupens",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCoupens.fulfilled, (state, action) => {
      state.allCoupons = action.payload;
      state.error = "";
      state.isLoading = false;
    });
    builder.addCase(applyCoupon.fulfilled, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
    builder.addCase(removeCoupon.fulfilled, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
    builder.addMatcher(isRejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addMatcher(isPending, (state, action) => {
      state.error = "";
      state.isLoading = true;
    });
  },
});
export default couponsSice.reducer;
