import React, { useContext } from "react";
import { FormElement, InputElement, SelectElement } from "../../../../types/formTypes";
import { ElementContext } from "../../../../App";
type ValidationProps = {
  setSelectInfo: React.Dispatch<React.SetStateAction<SelectElement>>;
  requiredSelect: boolean;
  requiredWidth: boolean;
  requiredHeight: boolean;
   modalElement: FormElement | null;
    setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const ValidationSelectSetting = ({
  requiredSelect,
  requiredWidth,
  requiredHeight,
  setSelectInfo,
}: ValidationProps) => {
  const FormContext = useContext(ElementContext);
  return (
    <div className="validation-wrapper w-full h-[150px] flex flex-col justify-between">
      <div className="validation-title w-full flex justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Validation
        </p>
      </div>
      <div className="validation w-full h-full border-[1px] border-[#d1d5db] rounded-[5px] flex flex-row flex-wrap justify-between items-center gap-[30px] mb-2 p-[18px]">
        {" "}
        <div className="flex justify-between items-center gap-[5px] ">
          <label className="text-sm">Required Select</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredSelect}
            onChange={(e) => {
              setSelectInfo((prv) => ({
                ...prv,
                requiredSelect: e.target.checked,
              }));
            }}
          />
        </div>
        <div className="flex justify-between items-center gap-[10px] ">
          <label className="text-sm">Required Width</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredWidth}
            onChange={(e) => {
                console.log(e.target.checked)
              setSelectInfo((prv) => ({
                ...prv,
              
                requiredWidth : e.target.checked,
              }));
            }}
          />
        </div>
        <div className="flex justify-between items-center gap-[10px]">
          <label className="text-sm">Required Height</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredHeight}
            onChange={(e) => {
              setSelectInfo((prv) => ({
                ...prv,
                requiredHeight: e.target.checked,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ValidationSelectSetting;
