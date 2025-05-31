import React, { useContext, useState } from "react";
import Select from "react-select";
import {
  InputElement,
  OptionHeightType,
  RangeElement,
  SelectElement,
} from "../../../../types/formTypes";
import { ElementContext } from "../../../../App";
// import { FormDataContext } from "../../../../App";
const inputHeightOptions: OptionHeightType[] = [
  { value: "50%", label: "50%" },
  { value: "60%", label: "60%" },
  { value: "70%", label: "70%" },
  { value: "80%", label: "80%" },
  { value: "90%", label: "90%" },
];
type heightInputProps = {
  setForminfo?: React.Dispatch<React.SetStateAction<InputElement>>;
  height?: number | string;
  setSelectInfo?: React.Dispatch<React.SetStateAction<SelectElement>>;
    setSliderInfo?:  React.Dispatch<React.SetStateAction<RangeElement>>;
};
const HeightSetting = ({ setForminfo, height ,setSliderInfo, setSelectInfo}: heightInputProps) => {
  const [selectedHeight, setSelectedHeight] = useState<OptionHeightType | null>(
    null
  );
  // const FormDataContexted = useContext(FormDataContext);
  const FormContext = useContext(ElementContext);
  return (
    <div className="w-full h-[80px] flex flex-col justify-start items-start  ">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Height
      </label>
      <Select
        defaultValue={selectedHeight}
        onChange={(selectedHeight) => {
          setSelectedHeight(selectedHeight);
          FormContext?.setElements((prv) => ({
            ...prv,
            height: selectedHeight ? selectedHeight.label : "",
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
