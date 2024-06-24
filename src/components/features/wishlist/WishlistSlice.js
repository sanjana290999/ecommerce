import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

const initialState = {
  whishlistData: [],
  isLoding: false,
  error: "",
};

const WISHLIST_KEY = "WISHLIST_KEY";
const storeInLocalStorage = (data) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(data));
};
const loadFromLocalStorage = () => {
  const data = localStorage.getItem(WISHLIST_KEY);
  return isEmpty(data) ? [] : JSON.parse(data);
};
const whishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    addwishlist: (state, action) => {
      state.whishlistData.push(action.payload);
      storeInLocalStorage(state.whishlistData);
    },
    removeWishlist: (state, action) => {
      state.whishlistData = state.whishlistData.filter(
        (item) => item._id !== action.payload
      );
      storeInLocalStorage(state.whishlistData);
    },
    loadLocalStorage: (state, action) => {
      state.whishlistData = loadFromLocalStorage();
    },
  },
});
export const { addwishlist, removeWishlist, loadLocalStorage } =
  whishlistSlice.actions;
export default whishlistSlice.reducer;
