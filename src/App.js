import logo from "./logo.svg";
import "./App.css";
import RoutesComponent from "./router/Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <RoutesComponent />
    </div>
  );
}

export default App;
