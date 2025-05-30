import React, { useState } from "react";
import { FormType } from "../../../../types/formTypes";
type LengthProps = {
  minLengthInput: number;
  maxLengthInput: number;
  setForminfo: React.Dispatch<React.SetStateAction<FormType>>;
};
const MinMaxLength = ({
  minLengthInput,
  maxLengthInput,
  setForminfo,
}: LengthProps) => {
  const [minLength, setMinLength] = useState<string>("");
  const [maxLength, setMaxLength] = useState<string>("");
  const countLetters = (text: string, feild: "min" | "max") => {
    const letterCount = Array.from(text.replace(/\u200C/g, "")).length;
    if (feild === "min") {
      setForminfo((prv) => ({
        ...prv,
        minLengthInput: letterCount,
      }));
    } else {
      setForminfo((prv) => ({
        ...prv,
        maxLengthInput: letterCount,
      }));
    }
  };
  return (
    <div className="Min-Max-Length-wrapper w-full h-[275px] flex flex-col justify-start">
      <div className="Min-Max-Length-title w-full justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Min/Max Length
        </p>
      </div>
      <div className="Min-Max-Length w-full h-[180px] border-[1px] border-[#d1d5db] rounded-[5px] flex flex-col  justify-start items-start gap-x-5 mb-2 p-[18px]">
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            min Length:
          </label>
          <input
            type="text"
            className="border rounded p-2 w-full outline-none"
            value={minLength}
            aria-label="min length"
            onChange={(e) => {
              const value = e.target.value;
              setMinLength(value);
              countLetters(value, "min");
            }}
          />
        </div>
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            Max Length:
          </label>
          <input
            type="text"
            className="border rounded p-2 w-full outline-none"
            value={maxLength}
            aria-label="max length"
            onChange={(e) => {
              const value = e.target.value;
              setMaxLength(value);
              countLetters(value, "max");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default MinMaxLength;
