import React from "react";
import { useAuth } from "../hooks/UseAuth";
import { AuthContext } from "../context/AuthContext";
import MainTemplate from "../templates/MainTemplate";
import NeedAuth from "../components/NeedAuth";
import ProfileDetailPage from "./ProfileDetailPage";
import ProfileForm from "./ProfileForm/ProfileForm";

export default function ProfilePage() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <MainTemplate>
        {isAuthenticated ? <ProfileForm /> : <NeedAuth />}
      </MainTemplate>
    </>
  );
}
