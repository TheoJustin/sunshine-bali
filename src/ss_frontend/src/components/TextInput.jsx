import React from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { LuImagePlus } from "react-icons/lu";

const TextInput = () => {
  return (
    <>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered pt-6 pb-6 w-full"
        />
        <LuImagePlus className="text-4xl cursor-pointer" />
        <HiOutlinePaperAirplane className="text-4xl cursor-pointer mr-8" />
    </>
  );
};

export default TextInput;
