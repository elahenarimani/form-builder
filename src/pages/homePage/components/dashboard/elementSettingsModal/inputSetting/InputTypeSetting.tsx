import React, {useEffect, useState } from "react";
import Select from "react-select";
import {
  FormElement,
  OptionInputType,
} from "../../../../../../types/formTypes";
const inputTypeOptions: OptionInputType[] = [
  { value: "Text", label: "Text" },
  { value: "Number", label: "Number" },
  { value: "Color", label: "Color" },
  { value: "Radio", label: "Radio" },
  { value: "Checkbox", label: "Checkbox" },
];
type InputProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
  errors?: {
    minLength?: boolean;
    maxLength?: boolean;
    typeInput?: boolean;
  };
};
const InputTypeSetting = ({ modalElement, setModalElement ,errors}: InputProps) => {
  const [selectedInputType, setSelectedInputType] =
    useState<OptionInputType | null>(null);
  useEffect(() => {
    console.log("modalElement changed:", modalElement);
  }, [modalElement]);
  return (
    <div className="w-full h-[80px] flex flex-col justify-start items-start  ">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Type
      </label>
      <Select
        defaultValue={selectedInputType}
        onChange={(selectedInputType) => {
          setSelectedInputType(selectedInputType);
          setModalElement((prv) => {
            if (!prv) return null;
            if (prv?.type === "input") {
              return {
                ...prv,
                typeInput: selectedInputType ? selectedInputType.label : "",
              };
            } else {
              return prv;
            }
          });
        }}
        options={inputTypeOptions}
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
            border: `1px solid ${errors?.typeInput ? "#ef4444" : "#d1d5db"}`,
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
export default InputTypeSetting;
