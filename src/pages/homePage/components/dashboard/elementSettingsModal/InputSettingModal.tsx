import React, { useContext, useEffect, useState } from "react";
import {
  FormElement,
  FormElementType,
  InputElement,
  RangeElement,
  SelectElement,
} from "../../../../../types/formTypes";
import InputSetting from "./inputSetting/InputTypeSetting";
import WidthSetting from "./generalSetting/WidthSetting";
import HeightSetting from "./generalSetting/HeightSetting";
import { ElementContext } from "../../../HomePage";
import MinMaxLength from "./inputSetting/MinMaxLength";
import Button from "../../../../../components/Button";
import InputTypeSetting from "./inputSetting/InputTypeSetting";
import ValidationSetting from "./inputSetting/ValidationSetting";
import SelectSettingModal from "./selectSetting/SelectSetting";
import SelectSetting from "./selectSetting/SelectSetting";
import { v4 as uuidv4 } from "uuid";
import ValidationSelectSetting from "./selectSetting/ValidationSelectSetting";
import ValidationSliderSetting from "./rangeSliderSetting/ValidationSliderSetting";
import SliderFeature from "./rangeSliderSetting/SliderFeature";
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

const ElementSettingModal = ({
  element,
  activeType,
  setClickedElement,
  opensettingModal,
  setOpensettingModal,
  saveSetting,
  modalElement,
  setModalElement,
}: elementSettingsPrpps) => {
  const FormContext = useContext(ElementContext);
  useEffect(() => {
    console.log("modalElement changed:", modalElement);
  }, [modalElement]);
  useEffect(() => {
    console.log("form context:", FormContext?.elements);
  }, [FormContext?.elements]);
  const handleSave = () => {
    if (modalElement) {
      FormContext?.setElements((prevElements: FormElement[]) => {
        const indexFinder = FormContext?.elements.findIndex(
          (item) => item.id === modalElement.id
        );
        if (indexFinder === -1) {
          return prevElements;
        }
        const updatedElement = [...prevElements];
        updatedElement[indexFinder] = modalElement;
        return updatedElement;
      });
      setOpensettingModal(false);
    }
  };
  console.log(FormContext?.elements);
  return (
    <div className="modal-wrapper overflow-visible fixed w-full h-screen bg-black/30 flex justify-center items-start z-50 top-0 left-0 right-0 p-[18px] ">
      <div className="modal overflow-y-auto w-full h-full bg-white p-4 rounded-[10px] flex flex-col justify-start items-center gap-0">
        <h2 className="font-bold ">{modalElement?.type} setting</h2>
        {modalElement?.type === "input" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <InputTypeSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <WidthSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <HeightSetting
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
            />
          </div>
        )}
        {modalElement?.type === "select" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <SelectSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <WidthSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <HeightSetting
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
            <ValidationSliderSetting
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <SliderFeature
              modalElement={modalElement}
              setModalElement={setModalElement}
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
            className="w-[70px] bg-[#1ABC9C] px-4 py-2 rounded-[50px] text-white  flex justify-center justify-centre cursor-pointer"
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
