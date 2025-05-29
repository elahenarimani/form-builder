import React, { useContext, useState } from "react";
import Select from "react-select";
import { FormType, OptionHeightType } from "../../../../types/formTypes";
import { FormDataContext } from "../../../../App";
const inputHeightOptions: OptionHeightType[] = [
  { value: 1, label: "50%" },
  { value: 2, label: "60%" },
  { value: 4, label: "70%" },
  { value: 5, label: "80%" },
  { value: 6, label: "90%" },
];
 type heightInputProps = {
    setForminfo: React.Dispatch<React.SetStateAction<FormType>>;
     heightInput : string|number;
  };
const HeightSetting = ({setForminfo , heightInput} : heightInputProps) => {
  const [selectedHeight, setSelectedHeight] = useState<OptionHeightType | null>(
    null
  );
  const FormDataContexted = useContext(FormDataContext);
  return (
    <div className="w-full h-[80px] flex flex-col justify-start items-start  ">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Height
      </label>
      <Select
        defaultValue={selectedHeight}
        onChange={(selectedHeight) => {
          setSelectedHeight(selectedHeight);
          setForminfo((prv) => ({
            ...prv,
            heightInput : selectedHeight ? selectedHeight.label : "",
          }));
        }}
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
