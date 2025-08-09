import React, { useEffect } from "react"
import Select from "react-select"
import { SingleValue } from "react-select"
import { useState } from "react"

import {  SelectElement } from "../../../../../types/formTypes"
import { useCombinedStore } from "../../../../../zustand/useCombinedStore"

type Props = {
  el: SelectElement
  // setActiveType: React.Dispatch<React.SetStateAction<FormElementType>>
}
type Option = {
  value: string
  label: string
}
const SingleSelect = ({ el }: Props) => {
  const { element } = useCombinedStore()
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  //array of string return an object
  const singleSelectOptions: Option[] = el.selectOptions.map((opt) => ({
    value: opt,
    label: opt,
  }))
  const handleChange = (option: SingleValue<Option>) => {
    setSelectedOption(option)
  }
  useEffect(()=>{console.log("single select",selectedOption)},[])
  return (
    <div className="w-full">
      <Select
        options={singleSelectOptions}
        value={selectedOption}
        onChange={handleChange}
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
              borderColor:  "#9ca3af",
            },
            borderColor: 
               state.isFocused
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
  )
}

export default SingleSelect
