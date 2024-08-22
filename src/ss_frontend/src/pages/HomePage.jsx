import React from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import ProfileSidebar from "../components/ProfileSidebar";
import MiddleHomePart from "../components/MiddleHomePart";
import RightHomePart from "../components/RightHomePart";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex mt-8 justify-around ">
        <div className="sticky self-start top-4">
          <ProfileSidebar />
        </div>
        <MiddleHomePart/>
        <div className="sticky self-start top-4">
          <RightHomePart/>

        </div>
        {/* <TextInput /> */}
      </div>
    </div>
  );
};

export default HomePage;
