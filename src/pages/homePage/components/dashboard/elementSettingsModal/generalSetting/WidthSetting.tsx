import React, { useState } from "react";
import Select from "react-select";
import {
  FormElement,
  OptionWidthType,
} from "../../../../../../types/formTypes";
const inputWidthOptions: OptionWidthType[] = [
  { value: "50%", label: "50%" },
  { value: "60%", label: "60%" },
  { value: "70%", label: "70%" },
  { value: "80%", label: "80%" },
  { value: "90%", label: "90%" },
];
type InputProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const WidthSetting = ({ modalElement, setModalElement }: InputProps) => {
  const [selectedWidth, setSelectedWidth] = useState<OptionWidthType | null>(
    null
  );
  return (
    <div className="w-full h-[80px] flex flex-col justify-start items-start">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Width
      </label>
      <Select
        defaultValue={selectedWidth}
        onChange={(selectedWidth) => {
          setSelectedWidth(selectedWidth);
          const width = selectedWidth ? selectedWidth.label : "";
          const type = modalElement?.type;
          switch (type) {
            case "input":
              setModalElement?.((prev) => {
                if (!prev) return prev;
                return { ...prev, width };
              });
              break;
            case "select":
              setModalElement?.((prev) => {
                if (!prev) return prev;
                return { ...prev, width };
              });
              break;
            case "range":
              setModalElement?.((prev) => {
                if (!prev) return prev;
                return { ...prev, width };
              });
              break;
            default:
              break;
          }
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
            boxShadow: state.isFocused ? "0 0 0 1px #1ABC9C" : "none",
            borderColor: state.isFocused ? "#1ABC9C" : "#d1d5db",
            "&:hover": {
              borderColor: "none",
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
export default WidthSetting;
