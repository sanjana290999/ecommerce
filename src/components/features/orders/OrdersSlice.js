import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const initialState = {
  generateOrders: [],
  allMyOrders: [],
  error: "",
  isLoding: false,
};

export const generateOrder = createAsyncThunk(
  "generate/order",
  async (addressId) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/orders/provider/razorpay`,
        { addressId },

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
export const allOrders = createAsyncThunk("all/order", async (page) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/ecommerce/profile/my-orders?limit=5&page=${page}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.orders);
    return response.data.data;
  } catch (error) {
    console.log("error");
  }
});
export const verifyPayment = createAsyncThunk(
  "verify/payment",
  async (data) => {
    const navigate = useNavigate();
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/orders/provider/razorpay/verify-payment`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/");
      return response.data.data;
    } catch (error) {
      console.log("error");
    }
  }
);
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(generateOrder.fulfilled, (state, action) => {
      state.isLoding = false;
      state.error = "";
    });
    builder.addCase(allOrders.fulfilled, (state, action) => {
      state.allMyOrders = action.payload;
      state.isLoding = false;
      state.error = "";
    });
    builder.addMatcher(isRejected, (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    });
    builder.addMatcher(isPending, (state, action) => {
      state.isLoding = true;
      state.error = "";
    });
  },
});

export default ordersSlice.reducer;
