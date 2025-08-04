import React, { useEffect } from "react";

import {
  FormElement,
  OptionInputType,
} from "../../../../../../types/formTypes";
type InputProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
  errors: { [key: string]: boolean };
  selectedInputType: OptionInputType | null;
  setSelectedInputType: React.Dispatch<
    React.SetStateAction<OptionInputType | null>
  >;
};
const InputContent = ({
  modalElement,
  setModalElement,
  errors,
  selectedInputType,
  setSelectedInputType,
}: InputProps) => {
  useEffect(() => {
    console.log("modalElement changed:", modalElement);
  }, [modalElement]);
  useEffect(() => {
    console.log("InputContent value: ", (modalElement as any)?.inputContent);
  }, [modalElement]);
  // const getErrorMessage = (): string | null => {
  //   const content = (modalElement as any).inputContent ?? "";
  //   const min = Number((modalElement as any)?.min) ?? 0;
  //   const max = Number((modalElement as any)?.max) ?? 0;
  //   if (content.length > 0 && content.length < min) {
  //     return `The minimum required number of characters is ${min}.`;
  //   }
  //   if (content.length === max) {
  //     return `The maximum permitted number of characters is ${max}.`;
  //   }

  //   return null;
  // };
  // const errorMessage = getErrorMessage();
  return (
    <div className="Input-content-setting w-full h-[80px] flex flex-col justify-start items-start ">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Input Content
      </label>
      <input
        type={selectedInputType?.value.toLowerCase() || "text"}
        value={(modalElement as any)?.inputContent ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          // const min = Number((modalElement as any)?.minLength) || 0;
          // const max = Number((modalElement as any)?.maxLength) || Infinity;
          // if (value.length < min || value.length > max) return;
          setModalElement((prev) => {
            if (!prev) return null;
            return {
              ...prev,
              inputContent: value,
            };
          });
        }}
        minLength={(Number((modalElement as any)?.minLength)) ? Number((modalElement as any)?.minLength) : 0}
        maxLength={(Number((modalElement as any)?.maxLength)) ? Number((modalElement as any)?.maxLength) : Infinity}
        placeholder={`Enter ${
          selectedInputType?.label?.toLowerCase() || "text"
        }...`}
        // className="w-full border border-gray-300 rounded-[5px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
         className={`border rounded p-2 w-full outline-none focus:ring-1 focus:ring-[#1ABC9C] ${
              errors?.requiredInputContent ? "border-red-500" : "border-gray-300"
            }`}
      />
      {/* {errorMessage && (
        <p className="text-red-500 text-sm mt-1 text-left h-[20px]">
          {errorMessage}
        </p>
      )} */}
    </div>
  );
};

export default InputContent;
