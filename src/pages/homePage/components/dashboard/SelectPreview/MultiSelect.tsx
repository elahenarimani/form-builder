import Select from "react-select"
import { MultiValue } from "react-select"
import { useState } from "react"

import { SelectElement } from "../../../../../types/formTypes"

type Option = {
  value: string
  label: string
}
type Props = {
  el: SelectElement
}
const MultiSelect = ({ el }: Props) => {
  const [multiSltOption, setMultiSltOption] = useState<MultiValue<Option>>([])
  const multiSelectOptions: Option[] = el.selectOptions.map((opt) => ({
    value: opt,
    label: opt,
  }))
  const handleChange = (options: MultiValue<Option>) => {
    setMultiSltOption(options)
  }

  return (
    <div className="w-full">
      <Select
        options={multiSelectOptions}
        value={multiSltOption}
        onChange={handleChange}
        isMulti
        isSearchable
        className="w-full"
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
              borderColor: "#9ca3af",
            },
            borderColor: state.isFocused ? "#1ABC9C" : "#d1d5db",
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
          placeholder: (provided) => ({
            ...provided,
            textAlign: "left",
          }),
        }}
      />
    </div>
  )
}

export default MultiSelect
