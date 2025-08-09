import React, { useEffect } from "react"
import { FormElement, SelectElement } from "../../../../../../types/formTypes"
import Input from "../../../../../../components/Input"
import Button from "../../../../../../components/Button"
import { IoTrash } from "react-icons/io5"
type Props = {
  modalElement: SelectElement
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>
}
const SelectOptionsInput = ({ modalElement, setModalElement }: Props) => {
  useEffect(() => {
      console.log("modalElement changed:", modalElement)
    }, [modalElement])
  function handleChangeOption(index: number, value: string) {
    const updatedOptions = [...modalElement.selectOptions]
    updatedOptions[index] = value
    setModalElement({
      ...modalElement,
       selectOptions: updatedOptions,
    })
  }
  function handleRemoveOption(index: number) {
    const updatedOptions = [...modalElement. selectOptions]
    updatedOptions.splice(index, 1)
    setModalElement({ ...modalElement,  selectOptions: updatedOptions })
  }
  function handleAddOption() {
    setModalElement({ ...modalElement,  selectOptions: [...modalElement.selectOptions, ""] })
  }
  return (
    <div className="select-options-wrapper w-full h-full  flex flex-col justify-between">
      <div className="select-options-title w-full flex justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Enter your favorite select Options
        </p>
      </div>
      <div className="options w-full h-full border-[1px]  rounded-[5px] flex flex-col justify-start items-center  mb-2 p-[18px] border-gray-300">
        <Button onClickHandler={() => handleAddOption()}
            className="w-[145px] bg-primary px-4 py-2 rounded-[50px] text-white  flex justify-center justify-centre cursor-pointer my-2">
          <p>add new option</p>
        </Button>
        <div className="w-full  flex flex-col justify-start items-start ">
          {modalElement.selectOptions.map((opt: string | number, index: number) => (
            <div
              key={index}
              className="w-full h-full flex justify-between items-center gap-[15px] mb-2 mt-2   "
            >
             <div className="flex-1 h-[40px]">
               <Input
                valueState={opt}
                className="w-full h-[40px] border border-gray-300 px-2 rounded outline-none focus:ring-1 focus:ring-[#1ABC9C]"
                type="text"
                aria-label="select options"
                placeholder="Enter select Options..."
                onChangeHandler={(e: any) =>
                  handleChangeOption(index, e.target.value)
                }
              />
              </div>
              <Button
                onClickHandler={() => handleRemoveOption(index)}
                className="w-[40px] h-[40px]  group-hover:opacity-100 transition-opacity"
              >
                <IoTrash size={20} className="text-errorColor" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default SelectOptionsInput
