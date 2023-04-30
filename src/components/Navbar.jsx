import React from "react";
import Search from "./Search";
import Logo from "../assets/logo.svg";

const Navbar = ({ setSelectedGuests, setSelectedCity }) => {
  return (
    <div className="flex justify-between sm:flex-row flex-col space-y-4 sm:space-y-0 items-center pl-[2rem] pr-[2rem] sm:pl-[3rem] sm:pr-[3rem] lg:px-40 py-5">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="flex-shrink-0" />
      </div>
      <div className="flex items-center">
        <Search
          setSelectedGuests={setSelectedGuests}
          setSelectedCity={setSelectedCity}
        />
      </div>
    </div>
  );
};

export default Navbar;
