import React, { useContext, useState } from "react";
import { FormElement, FormType } from "../../../types/formTypes";
import InputSetting from "./inputSetting/InputTypeSetting";
import WidthSetting from "./generalSetting/WidthSetting";
import HeightSetting from "./generalSetting/HeightSetting";
import { FormElementsContext } from "../../../App";
import InputTypeSetting from "./inputSetting/InputTypeSetting";
import ValidationSetting from "./inputSetting/ValidationSetting";
type elementSettingsPrpps = {
  element: FormElement;
};
const ElementSettingModal = ({ element }: elementSettingsPrpps) => {
  const FormElmntContext = useContext(FormElementsContext);

  // const updatedElement:any = FormElmntContext?.inputElements.find(
  //   (el) => el.id === element.id
  // );
  const [forminfo, setForminfo] = useState<FormType>({
    typeInput: "",
    widthInput: "",
    heightInput: "",
    validationInput: false,
    validationWidth: false,
    validationHeight: false,
    minLengthInput: 0,
    maxLengthInput: 0,
  });
  // console.log("Current context elements:", FormElmntContext?.inputElements);
  return (
    <div className="modal-wrapper overflow-visible fixed w-full h-screen bg-black/30 flex justify-center items-start z-50 top-0 left-0 right-0 p-[18px] ">
      <div className="modal overflow-y-auto w-full h-full bg-white p-4 rounded-[10px] flex flex-col justify-start items-center gap-0">
        <h2 className="font-bold ">{element.type} setting</h2>
        {/* <div className="flex flex-row justify-center items-center gap-5 mb-[4px] overflow-visible"></div> */}
        {element.type === "input" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <InputTypeSetting
              typeInput={forminfo.typeInput}
              setForminfo={setForminfo}
            />
            <WidthSetting
              widthInput={forminfo.widthInput}
              setForminfo={setForminfo}
            />
            <HeightSetting
              heightInput={forminfo.heightInput}
              setForminfo={setForminfo}
            />
            <ValidationSetting
              validationInput={forminfo.validationInput}
              validationWidth={forminfo.validationWidth}
              validationHeight={forminfo.validationHeight}
              setForminfo={setForminfo}
            />
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
                  // value={updatedElement?.minLength}
                  aria-label="min length"
                  // onChange={(e) => {
                  //   const newMinLength = Number(e.target.value);
                  //   if (!updatedElement) return;
                  //   updatedElement.minLength = newMinLength;
                  //   console.log(updatedElement.minLength);
                  //   FormElmntContext?.setInputElements((prev) =>
                  //     prev.map((el) =>
                  //       el.id === updatedElement.id
                  //         ? { ...el, minLength: newMinLength }
                  //         : el
                  //     )
                  //   );
                  //   console.log(updatedElement.minLength);
                  // }}
                />
              </div>
              <div className="w-full mb-2">
                <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
                  Max Length:
                </label>
                <input
                  type="number"
                  className="border rounded p-2 w-full outline-none"
                  // value={updatedElement?.maxLength ?? 0}
                  aria-label="max length"
                  // onChange={(e) => {
                  //   // const updatedElement = {
                  //   //   ...element,
                  //   //   maxLength: Number(e.target.value),
                  //   // };
                  //   console.log("New maxLength:", updatedElement?.maxLength);
                  //   FormElmntContext?.setInputElements((prevElements) =>
                  //     prevElements.map((el) =>
                  //       el.id === updatedElement?.id ? updatedElement : el
                  //     )
                  //   );
                  // }}
                />
              </div>
            </div>
          </div>
        )}
        {element.type === "select" && (
          <div>
            <label className="block mb-1">Options:</label>
            <input
              type="text"
              defaultValue={
                Array.isArray(element.options) ? element.options.join(",") : ""
              }
              className="border rounded p-2 w-full"
            />
          </div>
        )}
        {element.type === "range" && (
          <div>
            <div className="mb-4">
              <label className="block mb-1">Min:</label>
              <input
                type="number"
                defaultValue={element.min}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Max:</label>
              <input
                type="number"
                defaultValue={element.max}
                className="border rounded p-2 w-full"
              />
            </div>
          </div>
        )}
        <div className="flex justify-end gap-2 mt-3">
          <button className="bg-gray-400 px-4 py-2 rounded text-white">
            لغو
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded text-white">
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElementSettingModal;
