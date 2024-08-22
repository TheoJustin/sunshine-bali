import React, { useEffect } from "react";
import { useAuth } from "../hooks/UseAuth";
import { AuthContext } from "../context/AuthContext";
import MainTemplate from "../templates/MainTemplate";
import NeedAuth from "../components/NeedAuth";
import ProfileDetailPage from "./ProfileDetailPage";
import ProfileForm from "./ProfileForm/ProfileForm";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function ProfilePage() {
  const { isAuthenticated, getUser, user } = useAuth();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getUser", user],
    queryFn: getUser,
  });

  return (
    <>
      <MainTemplate>
        {isAuthenticated ? <ProfileDetailPage /> : <NeedAuth />}
      </MainTemplate>
    </>
  );
}
