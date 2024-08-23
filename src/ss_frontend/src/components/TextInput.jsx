import React, { useRef, useState } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { LuImagePlus } from "react-icons/lu";
import { uploadImage } from "../../../config/cloudinary";

const TextInput = () => {
  const [inputText, setInputText] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleSend = async () => {
    if (inputText.trim() === "") {
      alert("Please enter some text before sending.");
      return;
    }

    console.log(inputText);

    try {
      const response = await fetch(
        "https://web-production-d8ae.up.railway.app/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comment: inputText }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert(`Classification: ${data.classification}`);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert("Failed to send comment. Please try again later.");
    }
  };

  const handleImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validatedFileTypes = ["image/jpeg", "image/png", "image/jpg"];

      if (validatedFileTypes.includes(file.type)) {
        try {
          const url = await uploadImage(file, setLoading);
          if (url) {
            setImages((prevImages) => [...prevImages, url]);
          } else {
            throw new Error("Failed to upload image.");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        e.target.value = "";
      }
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex justify-between items-center gap-5">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered pt-6 pb-6 w-full"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImage}
      />
      <LuImagePlus
        className="text-4xl cursor-pointer"
        onClick={handleImageClick}
      />
      <HiOutlinePaperAirplane
        className="text-4xl cursor-pointer"
        onClick={handleSend}
      />
    </div>
  );
};

export default TextInput;
