import React from 'react'
import { FormElementType, SelectElement } from '../../../../../types/formTypes';
type Props = {
  el: SelectElement;
  setActiveType: React.Dispatch<React.SetStateAction<FormElementType>>;
};
const SelectPreview = ({ el, setActiveType }: Props) => {
  return (
     <select
      className={`p-2 w-full h-full rounded text-[#9CA7C4] outline-none border 
        ${el.requiredSelect ? "border-red-500" : "border-gray-300"}`}
      required={el.requiredSelect}
      style={{
        width: el.requiredWidth && el.width ? `${el.width}px` : "100%",
        height: el.requiredHeight && el.height ? `${el.height}px` : "auto",
      }}
      onClick={() => setActiveType("select")}
    >
      {el.options.length === 0 ? (
        <option disabled>No Option</option>
      ) : (
        el.options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))
      )}
    </select>
  )
}

export default SelectPreview
