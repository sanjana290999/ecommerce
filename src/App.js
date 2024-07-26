import logo from "./logo.svg";
import "./App.css";
import RoutesComponent from "./router/Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadLocalStorage } from "./components/features/wishlist/WishlistSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocalStorage());
  });
  return (
    <div className="">
      <ToastContainer />
      <RoutesComponent />
    </div>
  );
}

export default App;
