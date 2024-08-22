import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import blank from "@assets/logo/blankprofpic.png";


const HomePage = () => {
  const [imageFile, setImage] = useState("");
  return (
    <>
      <Navbar />
      {/* <AddAvatar
        onChange={setImage}
        className="w-40 h-40 z-50 border-2 border-gray-300"
        currentImg={image || blank}
      /> */}
    </>
  );
};

export default HomePage;
