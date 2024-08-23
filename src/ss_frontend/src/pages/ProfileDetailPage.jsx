import React, { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import profilePlaceholder from "../assets/profilePlaceholder.jpg";

export default function ProfileDetailPage() {
  const { isAuthenticated, getUser, user } = useAuth();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["getUser", user],
    queryFn: getUser,
  });
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [pfp, setPfp] = useState("");
  useEffect(() => {
    console.log(data);

    if (!isLoading && data != undefined) {
      if (data.ok) {
        setUsername(data.ok.username);
        setName(data.ok.name);
        setPfp(data.ok.profileUrl);
      } else {
        console.log(data);

        setName("Something's wrong");
      }
    }
  }, [data, isLoading]);

  return (
    <>
      <div className=" border-gray-200 border rounded-xl flex-col flex max-w-md items-center w-[20vw]">
        <div className="border-2 rounded-full border-neutral-500 mt-4">
          {isAuthenticated ? (
            <img
              id="profileImage"
              src={pfp === "" ? profilePlaceholder : pfp}
              alt="Upload a file"
              className="object-cover w-24 h-24 rounded-full"
            />
          ) : (
            <AiOutlineUser className="text-6xl"></AiOutlineUser>
          )}
        </div>
        <div className="mt-4 mb-4 pr-8 pl-8 flex flex-col items-center">
          {/* {isAuthenticated} */}
          {isAuthenticated ? (
            <>
              <div className="font-semibold text-2xl">{name}</div>
              <p className="text-lg">{"@" + username}</p>
              <button className="btn btn-error">Log out</button>
            </>
          ) : (
            <Link
              to="/profile"
              className="btn btn-wide btn-outline btn-primary"
            >
              Login using internet identity
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
