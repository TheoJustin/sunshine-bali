import React from "react";
import { useAuth } from "../hooks/UseAuth";

export default function NeedAuth() {
  const { login } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center mt-[15%] gap-5">
      <p className="text-8xl">☹️</p>
      <p className="text-4xl font-bold">{`You are not authenticated`}</p>
      <button
        className="btn bg-cream-custom hover:bg-cream-custom-hover text-xl px-32"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
}
