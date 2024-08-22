import React, { useState } from "react";
import NameForm from "./NameForm";
import FormTemplate from "../../templates/FormTemplate";
import RedAlert from "../../components/RedAlert";

export default function ProfileForm() {
  //   type User = {
  //     id: Principal,
  //     name: Text,
  //     username: Text,
  //     email: Text,
  //     birth_date: Text,
  //     timestamp: Time.Time,
  //     profileUrl: Text,
  //     posts: [Text],
  //   };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");

  const [step, setStep] = useState(1);

  const finalize = () => {
    console.log("tes");
    
  };

  return (
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
        ) : (
          <FormTemplate
            title={"Enter your date of birth"}
            placeholder={""}
            fieldType={"date"}
            step={step}
            setStep={setStep}
            value={dob}
            setValue={setDob}
            finalize={finalize}
          />
        )}
      </div>
    </div>
  );
}
