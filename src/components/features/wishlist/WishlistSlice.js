import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whishlistData: [],
  isLoding: false,
  error: "",
};

const whishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    addwishlist: (state, action) => {
      state.whishlistData.push(action.payload);
    },
    removeWishlist: (state, action) => {
      state.whishlistData = state.whishlistData.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});
export const { addwishlist, removeWishlist } = whishlistSlice.actions;
export default whishlistSlice.reducer;
