import React, { useContext, useState } from "react";
import {
  FormElement,
  InputElement,
  SelectElement,
} from "../../../types/formTypes";
import InputSetting from "./inputSetting/InputTypeSetting";
import WidthSetting from "./generalSetting/WidthSetting";
import HeightSetting from "./generalSetting/HeightSetting";
import { ElementContext, FormElementsContext } from "../../../App";
import MinMaxLength from "./inputSetting/MinMaxLength";
import Button from "../../Button";
import InputTypeSetting from "./inputSetting/InputTypeSetting";
import ValidationSetting from "./inputSetting/ValidationSetting";
import SelectSettingModal from "./selectSetting/SelectSetting";
import SelectSetting from "./selectSetting/SelectSetting";
import { v4 as uuidv4 } from "uuid";
import ValidationSelectSetting from "./selectSetting/ValidationSelectSetting";
type elementSettingsPrpps = {
  element: FormElement;
};
const ElementSettingModal = ({ element }: elementSettingsPrpps) => {
  const FormContext = useContext(ElementContext);
  const [forminfo, setForminfo] = useState<InputElement>({
    id: uuidv4(),
    // typeInput: "",
    // width: "",
    // heightInput: "",
    // validationInput: false,
    // validationWidth: false,
    // validationHeight: false,
    // minLengthInput: 0,
    // maxLengthInput: 0,

    type: "input",
    typeInput: "",
    requiredType: false,
    requiredWhidth: false,
    requiredHeight: false,
    width: "",
    height: "",
    minLength: 0,
    maxLength: 0,
  });
  const [selectInfo, setSelectInfo] = useState<SelectElement>({
    id: uuidv4(),
    type: "select",
    width: 0,
    height: 0,
    options: [],
    requiredSelect: false,
    requiredWidth: false,
    requiredHeight: false,
  });
  return (
    <div className="modal-wrapper overflow-visible fixed w-full h-screen bg-black/30 flex justify-center items-start z-50 top-0 left-0 right-0 p-[18px] ">
      <div className="modal overflow-y-auto w-full h-full bg-white p-4 rounded-[10px] flex flex-col justify-start items-center gap-0">
        <h2 className="font-bold ">{element.type} setting</h2>
        {element.type === "input" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <InputTypeSetting
              typeInput={forminfo.typeInput}
              setForminfo={setForminfo}
            />
            <WidthSetting width={forminfo.width} setForminfo={setForminfo} />
            <HeightSetting height={forminfo.height} setForminfo={setForminfo} />
            <ValidationSetting
              requiredType={forminfo.requiredType}
              requiredWhidth={forminfo.requiredWhidth}
              requiredHeight={forminfo.requiredHeight}
              setForminfo={setForminfo}
            />
            <MinMaxLength
              minLength={forminfo.minLength}
              maxLength={forminfo.maxLength}
              setForminfo={setForminfo}
            />
          </div>
        )}
        {element.type === "select" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <SelectSetting setSelectInfo={setSelectInfo} />
            <WidthSetting
              width={selectInfo.width}
              setSelectInfo={setSelectInfo}
            />
            <HeightSetting
              height={selectInfo.height}
              setSelectInfo={setSelectInfo}
            />
             {/* <ValidationSelectSetting /> */}
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
          </Button>
          <Button
            className="w-[70px] bg-[#1ABC9C] px-4 py-2 rounded-[5px] text-white  flex justify-center justify-centre cursor-pointer"
            onClickHandler={() =>
              // console.log({
              //   type: "input",
              //   typeInput: forminfo.typeInput,
              //   requiredType: forminfo.requiredType,
              //   requiredWhidth: forminfo.requiredWhidth,
              //   requiredHeight: forminfo.requiredHeight,
              //   width: forminfo.width,
              //   height: forminfo.height,
              //   minLength: forminfo.minLength,
              //   maxLength: forminfo.maxLength,
              // })
              // console.log({
              //   id: selectInfo.id,
              //   type: selectInfo.type,
              //   width: selectInfo.width,
              //   height: selectInfo.height,
              //   options: selectInfo.options,
              //   requiredSelect: selectInfo.requiredSelect,
              //   requiredWidth: selectInfo.requiredWidth,
              //   requiredHeight: selectInfo.requiredHeight,
              // })
              console.log(FormContext?.elements)
            }
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ElementSettingModal;
