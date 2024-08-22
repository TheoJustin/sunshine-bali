import React from "react";
import logo from "../assets/ss_logo.png"

const Navbar = () => {
  return (
    <nav className="">
      <div className="fira-sans-bold max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-20 w-20" alt="Sunshine Logo" />
          <span className="text-2xl font-semibold">
            Sunshine
          </span>
        </a>
        <div className="ml-auto flex justify-around items-center gap-6">
          <div className="fira-sans-semibold text-xl">
            Search
          </div>
          <div className="fira-sans-semibold text-xl">About</div>
          <div className="fira-sans-semibold text-xl">
            Profile
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
