// import React, { useEffect } from "react";
// import { FormElement } from "../../../../../../types/formTypes";
// type InputProps = {
//   modalElement: FormElement | null;
//   setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
//   errors: { [key: string]: boolean };
// };
// const InputContent = ({
//   modalElement,
//   setModalElement,
//   errors,
// }: InputProps) => {
//   useEffect(() => {
//     console.log("modalElement changed:", modalElement);
//   }, [modalElement]);
//   return;
//   <div className="Min-Max-Length-wrapper w-full h-[275px] flex flex-col justify-start">
//     <div className="Min-Max-Length-title w-full justify-between items-start">
//       <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
//         Min/Max Length
//       </p>
//     </div>
//     <div className="Min-Max-Length w-full h-[180px] border-[1px]  rounded-[5px] flex flex-col  justify-start items-start gap-x-5 mb-2 p-[18px]">
//       <div className="w-full mb-2 ">
//         <label className="block mb-1 text-sm font-medium text-gray-700 text-left ">
//           min Length:
//         </label>
//         <input
//           type="text"
//           className={`border rounded p-2 w-full outline-none focus:ring-1 focus:ring-[#1ABC9C] ${
//             errors?.requiredMinLength ? "border-red-500" : "border-gray-300"
//           }`}
//           value={(modalElement as any)?.minLength ?? null}
//           aria-label="min length"
//           onChange={(e) => {
//             setModalElement((prv) => {
//               if (prv) {
//                 return {
//                   ...prv,
//                   minLength: Number(e.target.value),
//                 };
//               } else {
//                 return null;
//               }
//             });
//           }}
//         />
//       </div>
//     </div>
//   </div>;
// };

// export default InputContent;

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
