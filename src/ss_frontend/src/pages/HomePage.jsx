import React from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import ProfileSidebar from "../components/ProfileSidebar";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex mt-8 gap-8 h-screen">
        <div className="sticky self-center top-0">
          <ProfileSidebar />
        </div>
        <TextInput />
      </div>
    </div>
  );
};

export default HomePage;
