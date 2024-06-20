import HomePage from "../components/home/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../components/product/ProductDetails";
import Signup from "../components/authentication/Signup";
import Login from "../components/authentication/Login";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";
import ProductsByCategories from "../components/product/ProductsByCategory";
import Profile from "../components/authentication/Profile";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Cart from "../components/cart/Cart";
import MyOrders from "../components/orders/Orders";
import ManageAddresses from "../components/address/ManageAddresses";
import WithSidebar from "../components/HOC/HocComponent";
import CouponsPage from "../components/coupens/Coupens";
import Notifications from "../components/notifications/Notifications";
import WishlistPage from "../components/wishlist/WishList";
import Products from "../components/product/Products";

import Addresses from "../components/address/Addresses";
import PaymentPage from "../components/payment/Payment";
import ProfileList from "../components/profileList/ProfileList";

const Wrapper = ({ children }) => {
  const token = Cookies.get("token");
  if (!isEmpty(token) && window.location.pathname === "/login") {
    return <Navigate to="/" />;
  }

  return children;
};
const ProfileWithSidebar = WithSidebar(Profile);
const OrdersWithSidebar = WithSidebar(MyOrders);
const AddressWithSidebar = WithSidebar(ManageAddresses);
const WishlistWithSidebar = WithSidebar(WishlistPage);
const CouponsWithSidebar = WithSidebar(CouponsPage);
const NotificationsWithSidebar = WithSidebar(Notifications);

function RoutesComponent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />

        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route
          path="/signup"
          element={
            <Wrapper>
              <Signup />
            </Wrapper>
          }
        />
        <Route
          path="/login"
          element={
            <Wrapper>
              <Login />
            </Wrapper>
          }
        />
        <Route
          path="/products-category/:categoryId"
          element={<ProductsByCategories />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addresses  " element={<Addresses />} />
        <Route path="/profile" element={<ProfileWithSidebar />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profileList" element={<ProfileList />} />

        <Route path="/orders" element={<OrdersWithSidebar />} />
        <Route path="/manageAddresses" element={<AddressWithSidebar />} />
        <Route path="/coupons" element={<CouponsWithSidebar />} />
        <Route path="/wishlist" element={<WishlistWithSidebar />} />
        <Route path="/notifications" element={<NotificationsWithSidebar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RoutesComponent;
