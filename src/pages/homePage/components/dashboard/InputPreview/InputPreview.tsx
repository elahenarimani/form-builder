import React from "react";
import { FormElementType, InputElement } from "../../../../../types/formTypes";
type InputPreviewProps = {
  el: InputElement;
  inputValue: { [key: string]: string };
  handleInputChange: (inputId: string, value: string) => void;
  setActiveType: (type: FormElementType) => void;
};
const InputPreview = ({
  el,
  inputValue,
  handleInputChange,
  setActiveType,
}: InputPreviewProps) => {
  return (
    <div className="w-full h-full ">
      <input
        type={(el as InputElement).typeInput}
        className={`p-2 w-full h-[40px] rounded text-[#9CA7C4] outline-none border 
                          ${
                            (el as InputElement).requiredType
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
        aria-label="describe input"
        readOnly
        onClick={() => {
          setActiveType("input");
        }}
        value={(el as InputElement).inputContent || ""}
        onChange={(e) => handleInputChange(el.id, e.target.value)}
        // placeholder={(el as InputElement).placeholder}
        // minLength={Number((el as InputElement).minLength)}
        // maxLength={Number((el as InputElement).maxLength)}
        // required={(el as InputElement).requiredType}

        // style={{
        //   width:
        //     (el as InputElement).width
        //       ? `${el.width}px`
        //       : "100%",
        //   height:
        //     (el as InputElement).height
        //       ? `${el.height}px`
        //       : "auto",
        // }}

        // valueState={inputValue[(el as InputElement).id] || ""}
      />
      {/* {inputValue[el.id]?.length > 0 &&
                    inputValue[el.id]?.length <
                      Number((el as InputElement).minLength) ? (
                      <p className="h-[20px] text-red-500 text-sm mt-1 text-left">
                        minimum characters is {(el as InputElement).minLength}{" "}
                        characters.
                      </p>
                    ) : (
                      <p className="hidden"></p>
                    )}
                    {inputValue[el.id]?.length ===
                    Number((el as InputElement).maxLength) ? (
                      <p className="h-[20px] text-red-500 text-sm mt-1 text-left">
                        maximum characters is {(el as InputElement).maxLength}{" "}
                        characters.
                      </p>
                    ) : (
                      <p className="hidden"></p>
                    )} */}
    </div>
  );
};

export default InputPreview;
