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
  cartAllItem: "",
  cartItem: "",
  error: "",
  isLoding: false,
};

export const getCartItem = createAsyncThunk("get/cartItem", async () => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/ecommerce/cart`,
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
export const postCartItem = createAsyncThunk(
  "post/cartItem",
  async ({ productId, quantity }) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/cart/item/${productId}`,
        { quantity },
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
export const removeCartItem = createAsyncThunk(
  "remove/cart/item",
  async (productId) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/cart/item/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data.items);
      return response.data.data.items;
    } catch (error) {
      console.log("error");
    }
  }
);
export const removeAllCartItem = createAsyncThunk(
  "remove/allCart/item",
  async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/cart/clear`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data.items.product);
      return response.data.data.items.product;
    } catch (error) {
      console.log("error");
    }
  }
);

const CartSlice = createSlice({
  name: "header",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCartItem.fulfilled, (state, action) => {
      state.cartAllItem = action.payload;
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(postCartItem.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(removeAllCartItem.fulfilled, (state, action) => {
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

export default CartSlice.reducer;
