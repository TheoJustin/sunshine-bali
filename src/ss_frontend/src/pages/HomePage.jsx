import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import ProfileSidebar from "../components/ProfileSidebar";
import MiddleHomePart from "../components/MiddleHomePart";
import RightHomePart from "../components/RightHomePart";
import DetailPage from "../components/DetailPage";
import CommentDetailPage from "../components/CommentDetailPage";
const HomePage = () => {
  const [currPost, setCurrPost] = useState("");

  return (
    <>
      <Navbar />
      <div className="">
        <div className="flex pt-[5rem] justify-around ">
          <div className="sticky self-start top-[5rem]">
            <ProfileSidebar />
          </div>
          {currPost === "" ?
            <MiddleHomePart setCurrPost={setCurrPost} /> : <DetailPage />}
          {
            currPost === "" ? <div className="sticky self-start top-[5rem]">
              <RightHomePart />

            </div> : <CommentDetailPage />
          }

          :

          {/* <TextInput /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
