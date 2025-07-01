import Select from "react-select";
import React, { useEffect, useState } from "react";
import { FormElement, SelectEtting } from "../../../../../../types/formTypes";
type SelectProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
  errors: { [key: string]: boolean };
};
const SelectSetting = ({ modalElement, setModalElement ,errors}: SelectProps) => {
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
            // border: `1px solid ${errors?.typeInput ? "#ef4444" : "#d1d5db"}`,
            boxShadow: state.isFocused ? "0 0 0 1px #1ABC9C" : "none",
            "&:hover": {
              borderColor: errors?.requiredSelect ? "#ef4444" : "#9ca3af", // خاکستری تیره در حالت hover
            },
            borderColor: errors?.requiredSelect
              ? "#ef4444" // قرمز وقتی خطا هست
              : state.isFocused
              ? "#1ABC9C" // رنگ برند وقتی فوکوس هست
              : "#d1d5db", // پیش‌فرض خاکستری
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
export default SelectSetting;
