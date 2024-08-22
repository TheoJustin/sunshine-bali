import React, { useState } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { LuImagePlus } from "react-icons/lu";

const TextInput = () => {
  const [inputText, setInputText] = useState("");

  const handleSend = async () => {
    if (inputText.trim() === "") {
      alert("Please enter some text before sending.");
      return;
    }

    console.log(inputText)
    
    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: inputText }),
      });

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

  return (
    <div className="flex justify-between items-center gap-5">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered pt-6 pb-6 w-full"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <LuImagePlus className="text-4xl cursor-pointer" />
      <HiOutlinePaperAirplane
        className="text-4xl cursor-pointer"
        onClick={handleSend}
      />
    </div>
  );
};

export default TextInput;
