import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center ">
      <div className="text-xl pl-5 font-semibold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg py-2 px-4"
          />
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/30"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span>John Doe</span>
        </div>
      </div>
    </header>
  );
}
