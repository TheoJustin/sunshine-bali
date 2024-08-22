import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const ProfileSidebar = () => {
  return (
    <>
      <div className="ml-4 border-2 border-neutral-400 rounded flex-col flex max-w-md justify-center items-center w-full">
        <div className="border-2 rounded-full border-neutral-500 mt-4">
          <AiOutlineUser className="text-6xl"></AiOutlineUser>
        </div>
        <p className="text-2xl pt-8">You haven't logged in yet</p>
        <div className="border border-neutral-400 w-full mt-4 -mx-8"></div>
        <div className="mt-4 mb-4 pr-8 pl-8">
          <button className="btn btn-wide btn-outline btn-primary">
            Login using internet identity
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
