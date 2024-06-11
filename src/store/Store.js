import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/features/products/ProductsSlice";
import headerReducer from "../components/features/header/headerSlice";
import authReducer from "../components/features/auth/AuthSlice";
import cartReducer from "../components/features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    header: headerReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
