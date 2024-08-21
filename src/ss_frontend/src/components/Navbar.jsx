import React from "react";
import logo from "../assets/ss_logo.png"

const Navbar = () => {
  return (
    <nav className="bg-pallete">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="h-20 w-20"
            alt="Sunshine Logo"
          />
          <span className="text-2xl font-semibold">
            Sunshine
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
