import React from "react";
import {  FormElement, InputElement } from "../../../../types/formTypes";
type ValidationProps = {
   setForminfo: React.Dispatch<React.SetStateAction<InputElement>>;
  requiredType: boolean;
  requiredWidth: boolean;
  requiredHeight: boolean;
   modalElement: FormElement | null;
    setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const ValidationSetting = ({
  setForminfo,
  requiredType,
 requiredWidth,
  requiredHeight,
}: ValidationProps) => {
  
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
          <label className="text-sm">Required Type</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredType}
            onChange={(e) => {
              setForminfo((prv) => ({
                ...prv,
                requiredType: e.target.checked,
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
              setForminfo((prv) => ({
                ...prv,
                requiredWidth: e.target.checked,
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
              setForminfo((prv) => ({
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

export default ValidationSetting;
