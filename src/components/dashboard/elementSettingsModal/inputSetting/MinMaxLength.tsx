import React, { useContext, useState } from "react";
import {  InputElement } from "../../../../types/formTypes";
import { ElementContext } from "../../../../App";
type LengthProps = {
  minLength: number;
  maxLength: number;
    setForminfo: React.Dispatch<React.SetStateAction<InputElement>>;
};
const MinMaxLength = ({ minLength, maxLength, setForminfo }: LengthProps) => {
  const [minLength1, setMinLength1] = useState<string>("");
  const FormContext = useContext(ElementContext);
  const [maxLength1, setMaxLength1] = useState<string>("");
  const countLetters = (text: string, feild: "min" | "max") => {
    const letterCount = Array.from(text.replace(/\u200C/g, "")).length;
    if (feild === "min") {
     setForminfo ((prv) => ({
        ...prv,
        minLength: letterCount,
      }));
    } else {
      setForminfo ((prv) => ({
        ...prv,
        maxLength: letterCount,
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
            value={minLength1}
            aria-label="min length"
            onChange={(e) => {
              const value = e.target.value;
              setMinLength1(value);
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
            value={maxLength1}
            aria-label="max length"
            onChange={(e) => {
              const value = e.target.value;
              setMaxLength1(value);
              countLetters(value, "max");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default MinMaxLength;
