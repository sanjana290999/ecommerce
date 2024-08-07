import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/features/products/ProductsSlice";
import headerReducer from "../components/features/header/headerSlice";
import authReducer from "../components/features/auth/AuthSlice";
import cartReducer from "../components/features/cart/CartSlice";
import addressReducer from "../components/features/address/AddressSlice";
import couponsReducer from "../components/features/coupens/CoupensSlice";
import OrdersReducer from "../components/features/orders/OrdersSlice";
import wishlishtReducer from "../components/features/wishlist/WishlistSlice";
import AdminProductsReducer from "../adminPanle/adminFeatures/AdminProducSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    header: headerReducer,
    auth: authReducer,
    cart: cartReducer,
    address: addressReducer,
    coupons: couponsReducer,
    orders: OrdersReducer,
    wishlist: wishlishtReducer,
    adminProducts: AdminProductsReducer,
  },
});
