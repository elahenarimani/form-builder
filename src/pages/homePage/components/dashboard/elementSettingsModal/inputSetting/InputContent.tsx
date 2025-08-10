import React, { useEffect } from "react"

import {
  FormElement,
  InputElement,
  OptionInputType,
} from "../../../../../../types/formTypes"
type InputProps = {
  modalElement: FormElement | null
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>
  errors: { [key: string]: boolean }
  selectedInputType: OptionInputType | null
  setSelectedInputType: React.Dispatch<
    React.SetStateAction<OptionInputType | null>
  >
}
const InputContent = ({
  modalElement,
  setModalElement,
  errors,
  selectedInputType,
  setSelectedInputType,
}: InputProps) => {
  useEffect(() => {
    console.log("modalElement changed:", modalElement)
  }, [modalElement])
  useEffect(() => {
    console.log("InputContent value: ", (modalElement as any)?.inputContent)
  }, [modalElement])
  return (
    <div className="Input-content-setting w-full h-[80px] flex flex-col justify-start items-start ">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Input Content
      </label>
      <input
        type={selectedInputType?.value.toLowerCase() || "text"}
        aria-label="input"
        // value={(modalElement as any)?.inputContent ?? ""}
        value={((modalElement as InputElement).inputContent ) }
        onChange={(e) => {
          const value = e.target.value
          setModalElement((prev) => {
            if (!prev) return prev
            return {
              ...prev,
              inputContent: value,
            }
          })
        }}
        minLength={
          Number((modalElement as any)?.minLength)
            ? Number((modalElement as any)?.minLength)
            : 0
        }
        maxLength={
          Number((modalElement as any)?.maxLength)
            ? Number((modalElement as any)?.maxLength)
            : Infinity
        }
        // placeholder={`Enter ${
        //   selectedInputType?.label?.toLowerCase() || "text"
        // }...`}
        // placeholder={
    
        
        //     (`Enter ${selectedInputType?.label?.toLowerCase() || "text"}...`)
      
        
        // }
        className={`border rounded p-2 w-full outline-none focus:ring-1 focus:ring-[#1ABC9C] ${
          errors?.requiredInputContent ? "border-red-500" : "border-gray-300"
        }`}
      />
    </div>
  )
}

export default InputContent
