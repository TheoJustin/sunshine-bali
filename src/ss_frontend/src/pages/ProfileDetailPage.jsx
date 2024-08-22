import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";

export default function ProfileDetailPage() {
  const { user, getUser } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ["getUser", user],
    queryFn: getUser,
  });
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!isLoading) {
      if (data.ok) {
        setUsername(data.ok.username);
      }
    }
  }, [data, isLoading]);
  
  // masukin post
  return <div>{username}</div>;
}
