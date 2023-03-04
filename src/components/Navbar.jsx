import React from "react";
import Search from "./Search";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pl-[2rem] pr-[2rem] sm:pl-[3rem] sm:pr-[3rem] lg:px-40 py-5">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="flex-shrink-0" />
      </div>
      <div className="flex items-center">
        {/* <input
          type="text"
          placeholder="Search for stays"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
        /> */}
        <button className="bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 flex items-center justify-center">
          {/* <img src={searchIcon} alt="search icon" className="w-4 h-4 mr-2" /> */}
          <span className="text-white text-sm font-medium">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
