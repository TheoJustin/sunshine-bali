import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/ss_logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiTwotoneAppstore } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const handleSearchBind = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        searchRef.current.focus();
      }
      if (e.keyCode === 13) {
        e.preventDefault();
        console.log(searchKey);
        navigate(`/search?query=${searchKey}`);
      }
    };

    document.addEventListener("keydown", handleSearchBind);

    return () => {
      document.removeEventListener("keydown", handleSearchBind);
    };
  }, [searchKey, navigate]);

  return (
    <div className="navbar fixed bg-white z-20">
      <Link to={"/"} className="flex-1 flex-row ml-8">
        <img src={logo} alt="sunshine logo" className="w-16 h-16" />
        <button className="btn btn-ghost text-xl">SocialFi</button>
      </Link>
      <div className="flex gap-4 mr-8">
        <div className="flex gap-8">
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2 w-96">
              <input
                ref={searchRef}
                type="text"
                className="grow"
                placeholder="Search"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <kbd className="kbd kbd-sm">ctrl</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </div>
          <Link
            to={"/users"}
            className="flex flex-col justify-center items-center cursor-pointer hover:mb-2 hover:transition-all"
          >
            <AiOutlineTeam className="text-3xl" />
            {/* <p className="text-sm">People</p> */}
          </Link>
          <Link
            to={"/"}
            className="flex flex-col justify-center items-center cursor-pointer hover:mb-2 hover:transition-all"
          >
            <AiTwotoneAppstore className="text-3xl" />
            {/* <p className="text-sm">Discover</p> */}
          </Link>
          <Link
            to={"/about"}
            className="flex flex-col justify-center items-center cursor-pointer hover:mb-2 hover:transition-all"
          >
            <AiFillAliwangwang className="text-3xl" />
            {/* <p className="text-sm">About Us</p> */}
          </Link>
        </div>
        <div className="dropdown dropdown-end">
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
