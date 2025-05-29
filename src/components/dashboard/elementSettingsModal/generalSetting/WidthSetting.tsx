import React, { useContext, useState } from "react";
import Select from "react-select";
import { FormType, OptionWidthType } from "../../../../types/formTypes";
import { FormDataContext } from "../../../../App";
const inputWidthOptions: OptionWidthType[] = [
  { value: 1, label: "50%" },
  { value: 2, label: "60%" },
  { value: 4, label: "70%" },
  { value: 5, label: "80%" },
  { value: 6, label: "90%" },
];
type InputProps = {
  setForminfo: React.Dispatch<React.SetStateAction<FormType>>;
   widthInput: string|number;
};
const WidthSetting = ({setForminfo, widthInput}:InputProps) => {
  const [selectedWidth, setSelectedWidth] = useState<OptionWidthType | null>(
    null
  );
  const FormDataContexted = useContext(FormDataContext);
  return (
    <div className="w-full h-[80px] flex flex-col justify-start items-start  ">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Width
      </label>
      <Select
        defaultValue={selectedWidth}
        onChange={(selectedWidth) => {
          setSelectedWidth(selectedWidth);
          setForminfo((prv) => ({
            ...prv,
            widthInput : selectedWidth ? selectedWidth.label : "",
          }));
        }}
        options={inputWidthOptions}
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
export default WidthSetting;
