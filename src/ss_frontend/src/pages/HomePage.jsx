import React from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import ProfileSidebar from "../components/ProfileSidebar";
import MainTemplate from "../templates/MainTemplate";

const HomePage = () => {
  return (
    <MainTemplate>
      <div className="overflow-hidden	">
        <div className="flex mt-8 gap-8 h-screen">
          <div className="sticky self-center top-0">
            <ProfileSidebar />
          </div>
          <TextInput />
        </div>
      </div>
    </MainTemplate>
  );
};

export default HomePage;
