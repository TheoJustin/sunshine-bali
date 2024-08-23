import React, { useRef, useState } from "react";
import NameForm from "./NameForm";
import FormTemplate from "../../templates/FormTemplate";
import { useAuth } from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { ss_backend } from "../../../../declarations/ss_backend";
import MainTemplate from "../../templates/MainTemplate";
import { BiLeftArrow } from "react-icons/bi";
import profilePlaceholder from "../../assets/profilePlaceholder.jpg";
import { uploadImage } from "../../../../config/cloudinary";

const imageContainerStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  overflow: "hidden",
  cursor: "pointer",
};

export default function ProfileForm() {
  const { user, principal } = useAuth();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [description, setDescription] = useState("");
  const [pfp, setPfp] = useState("");
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(false);
  const fileInputRef = useRef(null);

  const [step, setStep] = useState(1);

  const finalize = async () => {
    console.log(principal);
    const resp = await ss_backend.register(
      principal,
      name,
      username,
      email,
      description,
      dob,
      pfp
    );

    console.log(resp);

    if (resp) {
      navigate(`/`);
    }
  };

  const handleImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validatedFileTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp",
      ];

      if (validatedFileTypes.includes(file.type)) {
        try {
          const url = await uploadImage(file, setImageLoading);
          if (url) {
            setPfp(url);
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
    <MainTemplate>
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-1/2 mt-[15%]">
          {step === 1 ? (
            <FormTemplate
              title={"Enter your name"}
              placeholder={"Name"}
              fieldType={"text"}
              step={step}
              setStep={setStep}
              value={name}
              setValue={setName}
            />
          ) : step === 2 ? (
            <FormTemplate
              title={"Enter your username"}
              placeholder={"Username"}
              fieldType={"text"}
              step={step}
              setStep={setStep}
              value={username}
              setValue={setUsername}
            />
          ) : step === 3 ? (
            <FormTemplate
              title={"Enter your email"}
              placeholder={"Email"}
              fieldType={"text"}
              step={step}
              setStep={setStep}
              value={email}
              setValue={setEmail}
            />
          ) : step === 4 ? (
            <FormTemplate
              title={"Enter your date of birth"}
              placeholder={""}
              fieldType={"date"}
              step={step}
              setStep={setStep}
              value={dob}
              setValue={setDob}
            />
          ) : step === 5 ? (
            <FormTemplate
              title={"Describe yourself"}
              placeholder={"Bio"}
              fieldType={"text"}
              step={step}
              setStep={setStep}
              value={description}
              setValue={setDescription}
            />
          ) : (
            <div className="flex flex-col gap-5 border rounded-lg">
              <div className="p-5 w-full flex flex-col gap-5 justify-center items-center">
                <p className="text-3xl font-bold text-center">
                  Upload your profile picture
                </p>
                <div style={imageContainerStyle} onClick={handleImageClick}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleImage}
                  />
                  <img
                    id="profileImage"
                    src={pfp === "" ? profilePlaceholder : pfp}
                    alt="Upload a file"
                    className="object-cover w-24 h-24 rounded-full"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between p-5 items-center">
                <div>
                  <BiLeftArrow
                    onClick={() => {
                      setStep(step - 1);
                    }}
                    className="cursor-pointer hover:scale-125 transition-transform"
                    size={30}
                  />
                </div>
                <button
                  className="btn bg-cream-custom btn-sm hover:bg-cream-custom-hover text-lg px-8 h-[4vh]"
                  onClick={finalize}
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainTemplate>
  );
}
