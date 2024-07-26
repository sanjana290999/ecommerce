import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addProducts: [],
  error: "",
  isLoding: false,
};

const adminProducts = createSlice({
  name: "adminProduct",
  initialState,
  extraReducers: () => {},
});
export default adminProducts.reducer;
