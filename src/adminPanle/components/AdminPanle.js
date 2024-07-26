import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./AdminSidebar";
import Header from "./AdminHeader";
import Dashboard from "./Dashbord";

export default function AdminPanel() {
  return (
    <div className="">
      <div className=" ml-72">
        {" "}
        <Header />
      </div>

      <Sidebar />
      <div className="ml-40">
        <Dashboard />
      </div>
    </div>
  );
}
