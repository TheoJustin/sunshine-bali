import React from "react";
import MainTemplate from "../templates/MainTemplate";
import bg from "../assets/bg-ss-real.jpg";
import logo from "../assets/ss_logo.png";

const AboutPage = () => {
  return (
    <div>
      <MainTemplate>
        <div className="w-screen h-80 flex flex-col justify-center items-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundPosition: "center 68%",
            }}
          />
          <p className="font-bold text-4xl z-10">About Sunshine</p>
          <p className="mt-4 font-semibold text-lg z-10">
            Socialfi Crowdfunding with DAO system and NLP AI integration
          </p>
        </div>
        <div className="flex flex-row justify-around items-center">
            <img src={logo} alt="sunshine logo" className="w-24 h-24"/>
        </div>
      </MainTemplate>
    </div>
  );
};

export default AboutPage;
