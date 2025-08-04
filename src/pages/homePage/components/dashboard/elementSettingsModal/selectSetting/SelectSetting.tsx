import React, { useEffect, useState } from "react";
import Select from "react-select";

import { FormElement, SelectEtting } from "../../../../../../types/formTypes";

type SelectProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
  errors: { [key: string]: boolean };
};
const SelectSetting = ({
  modalElement,
  setModalElement,
  errors,
}: SelectProps) => {
  const selectOptions: SelectEtting[] = [
    { value: "single Select", label: "single select" },
    { value: "multi Select", label: "multi select" },
  ];
  const [settingSelect, setSettingSelect] = useState<SelectEtting | null>(null);
  useEffect(() => {
    console.log("modalElement changed:", modalElement);
  }, [modalElement]);
  return (
    <div className="w-full h-[80px] flex flex-col justify-start items-start  ">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Select box
      </label>
      <Select
        defaultValue={settingSelect}
        onChange={(settingSelect) => {
          setSettingSelect(settingSelect);
          setModalElement((prv) => {
            if (!prv) return null;
            if (prv?.type === "select") {
              return {
                ...prv,
                options: settingSelect ? [settingSelect.label] : [],
                selectMode: settingSelect?.value === "multi Select" ? "multi" : "single", 
              };
            } else {
              return prv;
            }
          });
        }}
        options={selectOptions}
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
              borderColor: errors?.requiredSelect ? "#ef4444" : "#9ca3af",
            },
            borderColor: errors?.requiredSelect
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
            backgroundColor: state.isFocused || state.isSelected
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
export default SelectSetting;
