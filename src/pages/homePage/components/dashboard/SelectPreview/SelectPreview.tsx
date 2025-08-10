import React from "react"

import { FormElementType, SelectElement } from "../../../../../types/formTypes"

import SingleSelect from "./SingleSelect"
import MultiSelect from "./MultiSelect"
type Props = {
  el: SelectElement
  setActiveType: React.Dispatch<React.SetStateAction<FormElementType>>
}
const SelectPreview = ({ el, setActiveType }: Props) => {
  if (!el.selectMode) {
    return (
      <div className="w-full h-full bg-white">
        <p className="p-2 w-full h-[87px] 2xl:h-[40px] rounded text-[#9CA7C4] outline-none border border-gray-300 ">"Please select the select type (single or multiple) from the settings."</p>
      </div>
    )
  }
  return (
    <div className="w-full ">
      {el.selectMode === "multi" ? (
        <MultiSelect el={el}  />
      ) : (
        <SingleSelect el={el}/>
      )}
    </div>
  )
}

export default SelectPreview
