import React, { useState } from "react";
import Select from "react-select";
import { OptionHeightType } from "../../../../types/formTypes";
const inputHeightOptions: OptionHeightType[] = [
  { value: 1, label: "50%" },
  { value: 2, label: "60%" },
  { value: 4, label: "70%" },
  { value: 5, label: "80%" },
  { value: 6, label: "90%" },
];
const HeightSetting = () => {
  const [selectedHeight, setSelectedHeight] = useState<OptionHeightType | null>(
    null
  );
  return (
    <div className="w-full h-[80px] flex flex-col justify-start items-start  ">
      <label className="block mb-2 mt-2 text-sm font-medium text-gray-700 text-left">
        Height
      </label>
      <Select
        defaultValue={selectedHeight}
        onChange={setSelectedHeight}
        options={inputHeightOptions}
        isClearable
        placeholder=""
        className="w-full"
        menuPortalTarget={typeof window !== "undefined" ? document.body : null}
        styles={{
          container: (provided) => ({
            ...provided,
            width: "100%",
          }),
          control: (provided, state) => ({
            ...provided,
            width: "100%",
            border: "1px solid #d1d5db",
            boxShadow: "none",
            borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
            "&:hover": {
              borderColor: "#a1a1aa",
            },
          }),
          menu: (provided) => ({
            ...provided,
            width: "100%",
            zIndex: 99999,
          }),
          menuPortal: (base) => ({
            ...base,
            zIndex: 99999,
          }),
          option: (provided) => ({
            ...provided,
            textAlign: "left",
          }),
          singleValue: (provided) => ({
            ...provided,
            textAlign: "left",
          }),
          placeholder: (provided) => ({
            ...provided,
            textAlign: "left",
          }),
        }}
      />
    </div>
  );
};

export default HeightSetting;
