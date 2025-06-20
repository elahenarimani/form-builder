import React, { useContext, useEffect, useState } from "react";
import { FormElement, InputElement } from "../../../../types/formTypes";
import { ElementContext } from "../../../../App";
type LengthProps = {
  minLength: number;
  maxLength: number;
  setForminfo: React.Dispatch<React.SetStateAction<InputElement>>;
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const MinMaxLength = ({
  minLength,
  maxLength,
  setForminfo,
  modalElement,
  setModalElement,
}: LengthProps) => {
  const [minLength1, setMinLength1] = useState<number>(0);
    const [maxLength1, setMaxLength1] = useState<number>(0);
  const FormContext = useContext(ElementContext);
  useEffect(() => {
    console.log("modalElement changed:", modalElement);
  }, [modalElement]);
  const countLetters = (text: number, feild: "min" | "max") => {
    // const letterCount = Array.from(text.replace(/\u200C/g, "")).length;
    const letterCount = text;
    if (feild === "min") {
      setModalElement((prv) => {
        if (!prv) return null;
        if (prv) {
          return {
            ...prv,
            minLength: letterCount,
          };
        } else {
          return prv;
        }
      });
    } else {
      setModalElement((prv) => {
        if (!prv) return null;
        if (prv) {
          return {
            ...prv,
            maxLength: letterCount,
          };
        } else {
          return prv;
        }
      });
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
            type="number"
            className="border rounded p-2 w-full outline-none"
            value={minLength1}
            aria-label="min length"
            onChange={(e) => {
              const value = Number(e.target.value);
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
            type="number"
            className="border rounded p-2 w-full outline-none"
            value={maxLength1}
            aria-label="max length"
            onChange={(e) => {
              const value = Number(e.target.value);
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
