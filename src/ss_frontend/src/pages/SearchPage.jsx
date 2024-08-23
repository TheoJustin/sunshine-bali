import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import ProfileSidebar from "../components/ProfileSidebar";
import RightHomePart from "../components/RightHomePart";
import CommentDetailPage from "../components/CommentDetailPage";
import MiddleHomePart from "../components/MiddleHomePart";
import DetailPage from "../components/DetailPage";
import MiddleHomePartSearched from "../components/MiddleHomePartSearched";

export default function SearchPage() {
  const [currPost, setCurrPost] = useState();

  return (
    <MainTemplate>
      <div className="">
        <div className="flex pt-[5rem] justify-around ">
          <div className="sticky self-start top-[5rem]">
            <ProfileSidebar />
          </div>
          {currPost !== undefined ? (
            <DetailPage currPost={currPost} setCurrPost={setCurrPost} />
          ) : (
            <MiddleHomePartSearched
              setCurrPost={setCurrPost}
              currPost={currPost}
            />
          )}
          {currPost === undefined ? (
            <div className="sticky self-start top-[5rem]">
              <RightHomePart />
            </div>
          ) : (
            <CommentDetailPage currPost={currPost} setCurrPost={setCurrPost} />
          )}
        </div>
      </div>
    </MainTemplate>
  );
}
