import React, { useContext, useState } from "react";
import { FormElement, FormType } from "../../../types/formTypes";
import InputSetting from "./inputSetting/InputTypeSetting";
import WidthSetting from "./generalSetting/WidthSetting";
import HeightSetting from "./generalSetting/HeightSetting";
import { FormElementsContext } from "../../../App";
import InputTypeSetting from "./inputSetting/InputTypeSetting";
import ValidationSetting from "./inputSetting/ValidationSetting";
import MinMaxLength from "./inputSetting/MinMaxLength";
import Button from "../../Button";
type elementSettingsPrpps = {
  element: FormElement;
};
const ElementSettingModal = ({ element }: elementSettingsPrpps) => {
  const FormElmntContext = useContext(FormElementsContext);
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
            <MinMaxLength
              minLengthInput={forminfo.minLengthInput}
              maxLengthInput={forminfo.maxLengthInput}
              setForminfo={setForminfo}
            />
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
        <div className="w-full h-full flex justify-center justify-centre gap-2 ">
          <Button className="w-[70px] bg-white px-4 py-2 border-[1px] border-[#d1d5db] rounded-[5px] text-gray-700  flex justify-center justify-centre cursor-pointer">
            Cancel
          </Button >
          <Button  className="w-[70px] bg-[#1ABC9C] px-4 py-2 rounded-[5px] text-white  flex justify-center justify-centre cursor-pointer" 
          onClickHandler={()=> console.log(forminfo)}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ElementSettingModal;
