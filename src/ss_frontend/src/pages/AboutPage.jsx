import React from "react";
import MainTemplate from "../templates/MainTemplate";
import bg from "../assets/bg-ss-real.jpg";
import logo from "../assets/ss_logo.png";
import profile_1 from "../assets/about/theo.jpg";
import profile_2 from "../assets/about/ryan.jpg";
import profile_3 from "../assets/about/jose.jpg";
import language_1 from "../assets/lang/icp.png";
import language_2 from "../assets/lang/motoko.jpg";
import language_3 from "../assets/lang/python.png";
import language_4 from "../assets/lang/flask.png";
import hackathon from "../assets/about/hackathon_about.jpg";

const AboutPage = () => {
  return (
    <div>
      <MainTemplate>
        {/* Header Section */}
        <div className="w-screen h-[60vh] flex flex-col justify-center items-center relative">
          <div
            className="absolute h-full inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundPosition: "center 69%",
            }}
          />
          <p className="font-bold text-4xl z-10 mt-10">About Sunshine</p>
          <p className="mt-4 font-semibold text-xl z-10">
            Socialfi Crowdfunding with DAO system and NLP AI integration
          </p>
        </div>

        {/* Project Overview Section */}
        <div className="flex flex-col justify-center items-center my-16">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <div className="flex flex-row justify-center items-center">
            <img src={logo} alt="Sunshine logo" className="w-64 h-64" />
            <p className="text-lg leading-relaxed text-gray-700 max-w-xl font-semibold text-justify ml-8">
              Sunshine is a SocialFi and crowdfunding platform that integrates
              AI-driven sentiment analysis (NLP) to detect if comments on the
              chain contain disturbing content or potential scams. Posts flagged
              by the AI are automatically managed through a DAO system, enabling
              project post removal when necessary.
            </p>
          </div>
        </div>

        {/* Languages and Technologies Section */}
        <div className="flex flex-col justify-center items-center my-16">
          <h2 className="text-3xl font-bold mb-8">Languages & Technologies</h2>
          <div className="flex justify-around items-center gap-28 px-8">
            <div className="flex flex-col items-center">
              <img
                src={language_1}
                alt="Internet Computer"
                className="w-24 h-24 mb-4 object-contain"
              />
              <p className="font-semibold">Internet Computer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={language_2}
                alt="Motoko"
                className="w-24 h-24 mb-4 object-contain"
              />
              <p className="font-semibold">Motoko</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={language_3}
                alt="Python"
                className="w-24 h-24 mb-4 object-contain"
              />
              <p className="font-semibold">Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={language_4}
                alt="Flask"
                className="w-24 h-24 mb-4 object-contain"
              />
              <p className="font-semibold">Flask</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="flex flex-col justify-center items-center my-16">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="flex flex-row justify-around items-center w-full px-8">
            <div className="flex flex-col items-center">
              <img
                src={profile_1}
                alt="Theo"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <p className="font-semibold">Theo Justin Amantha</p>
              <p className="text-gray-600">Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={profile_2}
                alt="Ryan"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <p className="font-semibold">Ryan Ray Wantouw Oei</p>
              <p className="text-gray-600">Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={profile_3}
                alt="Jose"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <p className="font-semibold">Jose Jonathan Tano</p>
              <p className="text-gray-600">Developer</p>
            </div>
          </div>
        </div>

        {/* Hackathon Section - Landscape */}
        <div className="flex flex-col justify-center items-center my-16">
          <h2 className="text-3xl font-bold mb-8">
            Made at Chain Fusion Hacker House
          </h2>
          <img
            src={hackathon}
            alt="Hackathon"
            className="w-1/2 h-auto rounded-lg object-cover mr-8 max-h-96"
          />
        </div>
      </MainTemplate>
    </div>
  );
};

export default AboutPage;
