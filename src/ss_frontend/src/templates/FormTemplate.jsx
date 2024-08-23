import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function FormTemplate({
  title,
  placeholder,
  fieldType,
  step,
  setStep,
  value,
  setValue,
}) {
  return (
    <div className="flex flex-col gap-5 border rounded-lg">
      <div className="p-5 w-full flex flex-col gap-5">
        <p className="text-3xl font-bold text-center">{title}</p>
        <input
          type={fieldType}
          className="input input-bordered input-md text-lg px-5"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {step === 1 ? (
        <div className="w-full flex justify-end p-5">
          <div>
            <BiRightArrow
              onClick={() => {
                setStep(step + 1);
              }}
              className="cursor-pointer hover:scale-125 transition-transform"
              size={30}
            />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between p-5">
          <div>
            <BiLeftArrow
              onClick={() => {
                setStep(step - 1);
              }}
              className="cursor-pointer hover:scale-125 transition-transform"
              size={30}
            />
          </div>
          <div>
            <BiRightArrow
              onClick={() => {
                setStep(step + 1);
              }}
              className="cursor-pointer hover:scale-125 transition-transform"
              size={30}
            />
          </div>
        </div>
      )}
    </div>
  );
}
