import React from "react";
import { FormElement } from "../../../../../../types/formTypes";
type ValidationProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const ValidationSelectSetting = ({
  modalElement,
  setModalElement,
}: ValidationProps) => {
  return (
    <div className="validation-wrapper w-full h-full xl:h-[150px] flex flex-col justify-between">
      <div className="validation-title w-full flex justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Validation
        </p>
      </div>
      <div className="validation w-full h-full border-[1px] border-[#d1d5db] rounded-[5px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-y-[15px] mb-2 p-[18px]">
        {" "}
        <div className="flex justify-start items-center gap-[10px] ">
          <label className="text-sm">Required Select</label>
          <input
            type="checkbox"
            aria-label="required or not"
            className="w-4 h-4 accent-[#1ABC9C] rounded-[10px]"
            defaultChecked={false}
            checked={(modalElement as any)?.requiredSelect ?? false}
            onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return {
                  ...prv,
                  requiredSelect: e.target.checked,
                };
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ValidationSelectSetting;
