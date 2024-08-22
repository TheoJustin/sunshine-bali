import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function NameForm() {
  return (
    <>
      <div className="flex flex-col gap-5 shadow-xl rounded-lg">
        <div className="p-3 w-full flex flex-col gap-5">
          <p className="text-3xl font-bold text-center">Enter your name:</p>
          <input
            type="text"
            className="input input-bordered input-md text-lg flex items-center gap-2 px-5"
            placeholder="Name"
          />
        </div>

        <div className="w-full flex justify-end p-3">
          <div>
            <BiRightArrow onClick={() => {}} className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
