import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <>
      <div className=" border-gray-200 border rounded-xl flex-col flex max-w-md items-center w-full">
        <div className="border-2 rounded-full border-neutral-500 mt-4">
          <AiOutlineUser className="text-6xl"></AiOutlineUser>
        </div>
        <p className="text-2xl pt-8">You haven't logged in yet</p>
        <div className="mt-4 mb-4 pr-8 pl-8">
          <Link to="/profile" className="btn btn-wide btn-outline btn-primary">
            Login using internet identity
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
