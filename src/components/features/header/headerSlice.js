import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],

  error: "",
  isLoding: false,
};

export const getAllCategories = createAsyncThunk("get/categories", async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/ecommerce/categories`
    );

    return response.data.data;
  } catch (error) {
    alert(error.response.data.message);
    console.log(error.response.data.message);
  }
});

const headerSlice = createSlice({
  name: "header",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
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

export default headerSlice.reducer;
