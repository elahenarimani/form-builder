import React from 'react'
import { FormElementType, SelectElement } from '../../../../../types/formTypes';
import Select from "react-select"
import { MultiValue } from "react-select"
import { useState } from "react"

type Option = {
  value: string
  label: string
}

const options: Option[] = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
]
type Props = {
  el: SelectElement;
  setActiveType: React.Dispatch<React.SetStateAction<FormElementType>>;
};
const MultiSelect = ({el, setActiveType}:Props) => {
    const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>([])

  const handleChange = (options: MultiValue<Option>) => {
    setSelectedOptions(options)
  }

  return (
     <div className="w-full">
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        placeholder="فریم‌ورک‌های مورد علاقه‌ات رو انتخاب کن..."
        isSearchable
        className='w-full'
      />
    </div>
  )
}

export default MultiSelect
