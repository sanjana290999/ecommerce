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
// const Wrapper = ({ children }) => {
//   const token = Cookies.get("token");

//   if (
//     isEmpty(token) &&
//     !publicUrls.includes(window.location.pathname.split("/")[1])
//   ) {
//     return <Navigate to="/" />;
//   } else if (
//     !isEmpty(token) &&
//     publicUrls.includes(window.location.pathname.split("/")[1])
//   ) {
//     return <Navigate to="/dashbord" />;
//   }
//   return children;
// };
// const Navigate = useNavigate();
const Wrapper = ({ children }) => {
  const token = Cookies.get("token");
  if (
    !isEmpty(token) &&
    (window.location.pathname === "/login" ||
      window.location.pathname === "/signup")
  ) {
    return <Navigate to="/" />;
  }

  return children;
};

function RoutesComponent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/manageAddresses" element={<ManageAddresses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RoutesComponent;
