import React from "react";
import { useAuth } from "../hooks/UseAuth";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        onClick={login}
      >
        Login
      </button>
    </>
  );
}
