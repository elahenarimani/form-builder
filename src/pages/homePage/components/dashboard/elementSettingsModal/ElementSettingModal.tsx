import React, { useEffect, useState } from "react";
import { FormElement, FormElementType, OptionInputType } from "../../../../../types/formTypes";
import WidthSetting from "./generalSetting/WidthSetting";
import HeightSetting from "./generalSetting/HeightSetting";
import MinMaxLength from "./inputSetting/MinMaxLength";
import Button from "../../../../../components/Button";
import InputTypeSetting from "./inputSetting/InputTypeSetting";
import ValidationSetting from "./inputSetting/ValidationSetting";
import SelectSetting from "./selectSetting/SelectSetting";
import ValidationSelectSetting from "./selectSetting/ValidationSelectSetting";
import ValidationSliderSetting from "./rangeSliderSetting/ValidationSliderSetting";
import SliderFeature from "./rangeSliderSetting/SliderFeature";
import { useCombinedStore } from "../../../../../zustand/useCombinedStore";
import LabelSetting from "./labelSetting/LabelSetting";
import InputContent from "./inputSetting/InputContent";
type elementSettingsPrpps = {
  element: FormElement | null;
  activeType: FormElementType;
  setClickedElement: (element: FormElement | null) => void;
  opensettingModal: boolean;
  setOpensettingModal: React.Dispatch<React.SetStateAction<boolean>>;
  saveSetting: (id: string) => void;
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
  const inputTypeOptions: OptionInputType[] = [
    { value: "Text", label: "Text" },
    { value: "Number", label: "Number" },
    { value: "Color", label: "Color" },
    { value: "Radio", label: "Radio" },
    { value: "Checkbox", label: "Checkbox" },
  ];
const ElementSettingModal = ({
  setClickedElement,
  setOpensettingModal,
  modalElement,
  setModalElement,
}: elementSettingsPrpps) => {
  const { element, updateElement } = useCombinedStore();
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

   const [selectedInputType, setSelectedInputType] = useState<OptionInputType | null>(null);
  useEffect(() => {
    console.log("modalElement changed:", modalElement);
  }, [modalElement]);
  useEffect(() => {
    console.log("form context:", element);
  }, [element]);
  const handleSave = () => {
    if (!modalElement) return;
    const newErrors: { [key: string]: boolean } = {};
    if (modalElement?.type === "input") {
      if (!modalElement) return null;
      if (modalElement?.requiredField && !modalElement.typeInput) {
        newErrors.requiredField = true;
      }
      if (modalElement?.requiredMinLength && !modalElement.minLength) {
        newErrors.requiredMinLength = true;
      }
      if (modalElement.requiredMaxLength && !modalElement.maxLength) {
        newErrors.requiredMaxLength = true;
      }
      if (modalElement?.requiredTypeInput && !modalElement.typeInput) {
        newErrors.requiredTypeInput = true;
      }
    } else if (modalElement?.type === "range") {
      if (modalElement?.requiredMinRange && !modalElement.min) {
        newErrors.requiredMinRange = true;
      }
      if (modalElement?.requiredMaxRange && !modalElement.max) {
        newErrors.requiredMaxRange = true;
      }
      if (modalElement?.requiredStep && !modalElement.step) {
        newErrors.requiredStep = true;
      }
    } else if (modalElement?.type === "select") {
      if (modalElement?.requiredSelect && !modalElement.typeSelect) {
        newErrors.requiredSelect = true;
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("newError:", newErrors);
      return;
    } else {
      updateElement(modalElement);
      setOpensettingModal(false);
    }
  };
  return (
    <div className="modal-wrapper overflow-visible fixed w-full h-screen bg-black/30 flex justify-center items-start z-50 top-0 left-0 right-0 p-[18px] overflow-y-auto">
      <div className="modal overflow-y-auto w-full h-full bg-white p-4 rounded-[10px] flex flex-col justify-start items-center gap-0">
        <h2 className="font-bold ">{modalElement?.type} setting</h2>
        {modalElement?.type === "input" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <InputTypeSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
              errors={errors}
              selectedInputType={selectedInputType} 
              setSelectedInputType={setSelectedInputType}
            />
            <InputContent
              modalElement={modalElement}
              setModalElement={setModalElement}
              errors={errors}
              selectedInputType={selectedInputType} 
              setSelectedInputType={setSelectedInputType}
            />
            <WidthSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <HeightSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <LabelSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <ValidationSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <MinMaxLength
              modalElement={modalElement}
              setModalElement={setModalElement}
              errors={errors}
            />
          </div>
        )}
        {modalElement?.type === "select" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <SelectSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
              errors={errors}
            />
            <WidthSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <HeightSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <LabelSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <ValidationSelectSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
          </div>
        )}
        {modalElement?.type === "range" && (
          <div className="slider-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <WidthSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <HeightSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <LabelSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <ValidationSliderSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <SliderFeature
              modalElement={modalElement}
              setModalElement={setModalElement}
              errors={errors}
            />
          </div>
        )}
        <div className="w-full h-full flex justify-center justify-centre gap-[20px] ">
          <Button
            className="w-[70px] bg-white px-4 py-2 border-[1px] border-[#d1d5db] rounded-[50px] text-gray-700  flex justify-center justify-centre cursor-pointer"
            onClickHandler={() => setOpensettingModal(false)}
          >
            Cancel
          </Button>
          <Button
            className="w-[70px] bg-primary px-4 py-2 rounded-[50px] text-white  flex justify-center justify-centre cursor-pointer"
            onClickHandler={() => handleSave()}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ElementSettingModal;
