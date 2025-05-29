import React from "react";
import { FormType } from "../../../../types/formTypes";
type ValidationProps = {
  setForminfo: React.Dispatch<React.SetStateAction<FormType>>;
  validationInput: boolean;
  validationWidth: boolean;
  validationHeight: boolean;
};
const ValidationSetting = ({
  setForminfo,
  validationInput,
  validationWidth,
  validationHeight,
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
            checked={validationInput}
            onChange={(e) => {
              setForminfo((prv) => ({
                ...prv,
                validationInput: e.target.checked,
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
            checked={validationWidth}
            onChange={(e) => {
              setForminfo((prv) => ({
                ...prv,
                validationWidth: e.target.checked,
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
            checked={validationHeight}
            onChange={(e) => {
              setForminfo((prv) => ({
                ...prv,
                validationHeight: e.target.checked,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ValidationSetting;
