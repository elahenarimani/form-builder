import { useDroppable } from "@dnd-kit/core";
import { IoTrash } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { IoMdSettings } from "react-icons/io";
import ElementSettingModal from "./elementSettingsModal/ElementSettingModal";
import {
  FormElement,
  InputElement,
  FormElementType,
  SelectElement,
  RangeElement,
} from "../../../../types/formTypes";
import Button from "../../../../components/Button";
import "./mainForm.css";
import { useCombinedStore } from "../../../../zustand/useCombinedStore";
import Input from "../../../../components/Input";
import InputPreview from "./InputPreview/InputPreview";
import SelectPreview from "./SelectPreview/SelectPreview";
import RangePreview from "./RangePreview/RangePreview";
type MainFormProps = {
  onDelete: (id: string) => void;
  formName: string;
  setFormName: React.Dispatch<React.SetStateAction<string>>;
  saveSettingData: (id: string) => void;
  clickedElement: FormElement | null;
  setClickedElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
  opensettingModal: boolean;
  setOpensettingModal: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: { [key: string]: string };
  setInputValue: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;
};
const MainForm = ({
  onDelete,
  formName,
  setFormName,
  saveSettingData,
  clickedElement,
  setClickedElement,
  opensettingModal,
  setOpensettingModal,
  inputValue,
  setInputValue,
}: MainFormProps) => {
  const { element } = useCombinedStore();
  const [modalElement, setModalElement] = useState<FormElement | null>(null);
  const { setNodeRef } = useDroppable({ id: "drop-area" });
  const [activeType, setActiveType] = useState<FormElementType>("input");
  useEffect(() => {
    console.log("all element:", element);
  }, [element]);
  const initialModalElementValue = (el: FormElement) => {
    switch (el.type) {
      case "input":
        return {
          ...el,
          inputContent: "",
          minLength: "",
          maxLength: "",
          label: "",
          requiredField: false,
          requiredMinLength: false,
          requiredMaxLength: false,
          requiredTypeInput: false,
        } as InputElement;
      case "select":
        return {
          ...el,
          label: "",
          requiredSelect: false,
        } as SelectElement;
      case "range":
        return {
          ...el,
          min: "",
          max: "",
          step: "",
          label: "",
          requiredRange: false,
          requiredMinRange: false,
          requiredMaxRange: false,
          requiredStep: false,
        } as RangeElement;
      default:
        return el;
    }
  };
  const saveModalSetting = (idSetting: string) => {
    const elementFinder = element.find((el) => el.id === idSetting);
    if (!elementFinder) {
      setModalElement(null);
      return;
    }
    const newElement = initialModalElementValue(elementFinder);
    setModalElement(newElement);
    setOpensettingModal(true);
    //   const elementFinder = element.find((el) => el.id === idSetting);
    //   if (!elementFinder) {
    //     setModalElement(null);
    //     return;
    //   }
    //   let updatedElement = { ...elementFinder };
    //   if (elementFinder.type === "range") {
    //     updatedElement = {
    //       ...updatedElement,
    //       min: "",
    //       max: "",
    //       step: "",
    //       label: "",
    //       requiredRange: false,
    //       requiredMinRange: false,
    //       requiredMaxRange: false,
    //       requiredStep: false,
    //     } as RangeElement;
    //   } else if (elementFinder.type === "input") {
    //     updatedElement = {
    //       ...updatedElement,
    //       minLength: "",
    //       maxLength: "",
    //       label: "",
    //       requiredField: false,
    //       requiredMinLength: false,
    //       requiredMaxLength: false,
    //       requiredTypeInput: false,
    //     } as InputElement;
    //   } else if (elementFinder.type === "select") {
    //     updatedElement = {
    //       ...updatedElement,
    //       label: "",
    //       requiredSelect: false,
    //     } as SelectElement;
    //   }
    //   setModalElement(updatedElement);
    //   setOpensettingModal(true);
  };
  const handleInputChange = (inputId: string, inputTyped: string) => {
    // if we select 2 or more input they will be independent
    setInputValue((prv) => {
      if (!prv) return {};
      return {
        ...prv,
        [inputId]: inputTyped,
      };
    });
  };

  return (
    <div
      ref={setNodeRef}
      className="main-form  w-full min-h-screen border border-[#444444] rounded-[5px] py-[20px] px-[15px] bg-gray-50 "
    >
      <h2 className="text-lg font-bold mb-4">My Form</h2>
      <div className="w-[300px] h-[80px] flex flex-col justify-start items-start gap-[2px] mb-4">
        <label className="w-full h-full text-start text-[15px]">
          Form Name:
        </label>
        <Input
          className="w-[300px] h-[40px] rounded-[5px] px-[5px] outline-none border text-[13px] border border-gray-300"
          type="text"
          ariaLabel="required or not"
          placeholder="Enter form name..."
          valueState={formName}
          onChangeHandler={(e) => setFormName(e.target.value)}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-start items-start">
        {Array.isArray(element) &&
          element.map((el) => (
            <div
              key={el.id}
              className=" w-[300px] h-full mb-4 flex flex-row justify-between items-center gap-3"
              style={{
                top: el.y || 0,
                left: el.x || 0,
                width: el.width || "auto",
                height: el.height || "auto",
              }}
            >
              {el.type === "input" && (
                <InputPreview
                  el={el as InputElement}
                  inputValue={inputValue}
                  handleInputChange={handleInputChange}
                  setActiveType={setActiveType}
                />
              )}
              {el.type === "select" && (
                <SelectPreview
                  el={el as SelectElement}
                  setActiveType={setActiveType}
                />
              )}
              {el.type === "range" && (
                <RangePreview
                  el={el as RangeElement}
                  setActiveType={setActiveType}
                />
              )}
              <div className="!w-[60px] h-full flex justify-end items-center p-[8px]  ">
                <Button
                  onClickHandler={() => onDelete(el.id)}
                  className=" top-1 right-1  group-hover:opacity-100 transition-opacity"
                >
                  <IoTrash size={20} color="red" />
                </Button>
                <Button
                  onClickHandler={() => saveModalSetting(el.id)}
                  className=" top-1 right-1  group-hover:opacity-100 transition-opacity"
                >
                  <IoMdSettings size={20} color="gray" />
                </Button>
              </div>
            </div>
          ))}
      </div>
      {opensettingModal && modalElement && (
        <ElementSettingModal
          element={clickedElement}
          activeType={activeType}
          setClickedElement={setClickedElement}
          opensettingModal={opensettingModal}
          setOpensettingModal={setOpensettingModal}
          saveSetting={saveModalSetting}
          modalElement={modalElement}
          setModalElement={setModalElement}
        />
      )}
    </div>
  );
};
export default MainForm;
