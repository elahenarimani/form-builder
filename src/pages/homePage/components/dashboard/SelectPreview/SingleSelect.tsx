import React from 'react'
import { FormElementType, SelectElement } from '../../../../../types/formTypes';
import Select from "react-select"
import { SingleValue } from "react-select"
import { useState } from "react"

type Props = {
  el: SelectElement;
  setActiveType: React.Dispatch<React.SetStateAction<FormElementType>>;
};
type Option = {
  value: string
  label: string
}
const options: Option[] = [
  { value: "iran", label: "ایران" },
  { value: "germany", label: "آلمان" },
  { value: "japan", label: "ژاپن" },
]
const SingleSelect = ({el, setActiveType}:Props) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null)
    const handleChange = (option: SingleValue<Option>) => {
    setSelectedOption(option)
  }
  return (
    <div className="w-full">
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder="یک کشور را انتخاب کنید..."
        isSearchable
        className='w-full'
      />
    </div>
  )
}

export default SingleSelect
