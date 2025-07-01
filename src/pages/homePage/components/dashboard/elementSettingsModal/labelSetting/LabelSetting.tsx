import React from "react";
import { FormElement } from "../../../../../../types/formTypes";

type LabelSettingProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};

const LabelSetting = ({ modalElement, setModalElement }: LabelSettingProps) => {
  return (
    <div className="label-setting w-full h-[80px] flex flex-col justify-start items-start ">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Label
      </label>
      <input
        type="text"
        value={modalElement?.label || ""}
        onChange={(e) =>
          setModalElement((prev) => {
            if (!prev) return null;
            return {
              ...prev,
              label: e.target.value,
            };
          })
        }
        placeholder="Enter your label..."
        className="w-full border border-gray-300 rounded-[5px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
      />
    </div>
  );
};

export default LabelSetting;