import React, { useState } from "react";
import NameForm from "./NameForm";
import FormTemplate from "../../templates/FormTemplate";
import { useAuth } from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { ss_backend } from "../../../../declarations/ss_backend";
import MainTemplate from "../../templates/MainTemplate";

export default function ProfileForm() {
  const { user, principal } = useAuth();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const finalize = async () => {
    console.log(principal);
    const resp = await ss_backend.register(
      principal,
      name,
      username,
      email,
      "",
      dob,
      ""
    );

    console.log(resp);

    if (resp) {
      navigate(`/`);
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
              title={"Enter your username (Not Changeable)"}
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
    </MainTemplate>
  );
}
