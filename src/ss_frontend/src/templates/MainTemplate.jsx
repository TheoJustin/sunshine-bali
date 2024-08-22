import React from "react";
import Navbar from "../components/Navbar";

export default function MainTemplate({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
