import React from "react";
import logo from "../assets/ss_logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiTwotoneAppstore } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="flex-1 flex-row ml-8">
        <img src={logo} alt="sunshine logo" className="w-16 h-16" />
        <a className="btn btn-ghost text-xl">Sunshine - Socialfi</a>
      </div>
      <div className="flex gap-4">
        <div className="flex mr-8 gap-8">
          <div className="flex flex-col justify-center items-center cursor-pointer hover:mb-2 hover:transition-all">
            <AiOutlineTeam className="text-3xl" />
            <p className="text-sm">Friends</p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:mb-2 hover:transition-all">
            <AiTwotoneAppstore className="text-3xl" />
            <p className="text-sm">Discover</p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:mb-2 hover:transition-all">
            <AiFillAliwangwang className="text-3xl" />
            <p className="text-sm">About Us</p>
          </div>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end mr-8">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full flex justify-center items-center">
              <AiOutlineUser alt="profile" className="text-4xl pl-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
