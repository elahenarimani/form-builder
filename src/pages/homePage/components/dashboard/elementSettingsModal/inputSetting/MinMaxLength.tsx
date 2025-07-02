import React, { useEffect } from "react";
import { FormElement } from "../../../../../../types/formTypes";
type LengthProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
  errors: { [key: string]: boolean };
};
const MinMaxLength = ({
  modalElement,
  setModalElement,
  errors,
}: LengthProps) => {
  useEffect(() => {
    console.log("modalElement changed:", modalElement);
  }, [modalElement]);
  return (
    <div className="Min-Max-Length-wrapper w-full h-[275px] flex flex-col justify-start">
      <div className="Min-Max-Length-title w-full justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Min/Max Length
        </p>
      </div>
      <div className="Min-Max-Length w-full h-[180px] border-[1px]  rounded-[5px] flex flex-col  justify-start items-start gap-x-5 mb-2 p-[18px]">
        <div className="w-full mb-2 ">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left ">
            min Length:
          </label>
          <input
            type="text"
            className={`border rounded p-2 w-full outline-none focus:ring-1 focus:ring-[#1ABC9C] ${
              errors?.requiredMinLength ? "border-red-500" : "border-gray-300"
            }`}
            value={(modalElement as any)?.minLength ?? null}
            aria-label="min length"
            onChange={(e) => {
              setModalElement((prv) => {
                if (prv) {
                  return {
                    ...prv,
                    minLength: Number(e.target.value),
                  };
                } else {
                  return null;
                }
              });
            }}
          />
        </div>
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            Max Length:
          </label>
          <input
            type="text"
            className={`border rounded p-2 w-full outline-none focus:ring-1 focus:ring-[#1ABC9C] ${
              errors?.requiredMaxLength ? "border-red-500" : "border-gray-300"
            }`}
            value={(modalElement as any)?.maxLength ?? null}
            aria-label="max length"
            onChange={(e) => {
              setModalElement((prv) => {
                if (prv) {
                  return {
                    ...prv,
                    maxLength: Number(e.target.value),
                  };
                } else {
                  return null;
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default MinMaxLength;
