import React from "react";
import Sidebar from "../AdminSidebar";
import Header from "../AdminHeader";

export default function HocCom(Wrap) {
  return (props) => (
    <div className="flex ">
      <div className="w-[15%]">
        <Sidebar />
      </div>
      <div className="w-[90%] flex flex-col ">
        <div className="w-full">
          <Header />
        </div>
        <div className="flex-grow px-40">
          <Wrap {...props} />
        </div>
      </div>
    </div>
  );
}
