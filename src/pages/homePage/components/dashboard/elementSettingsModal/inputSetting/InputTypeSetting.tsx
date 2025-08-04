import React, {useEffect} from "react";

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
  errors: { [key: string]: boolean };
  selectedInputType: OptionInputType | null;
  setSelectedInputType: React.Dispatch<
    React.SetStateAction<OptionInputType | null>
  >;
};
const InputTypeSetting = ({
  modalElement,
  setModalElement,
  errors,
  selectedInputType,
  setSelectedInputType,
}: InputProps) => {
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
                typeInput: selectedInputType
                  ? selectedInputType.label.toLowerCase()
                  : "",
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
            borderWidth: "1px",
            borderStyle: "solid",
            boxShadow: state.isFocused ? "0 0 0 1px #1ABC9C" : "none",
            "&:hover": {
              borderColor: errors?.requiredTypeInput ? "#ef4444" : "#9ca3af",
            },
            borderColor: errors?.requiredTypeInput
              ? "#ef4444"
              : state.isFocused
              ? "#1ABC9C"
              : "#d1d5db",
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
          option: (provided, state) => ({
            ...provided,
            textAlign: "left",
            backgroundColor:
              state.isFocused || state.isSelected
                ? "rgba(26, 188, 156, 0.5)"
                : "white",
            color: "black",
            cursor: "pointer",
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
