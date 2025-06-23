import React, { useContext, useEffect, useState } from "react";
import {
  FormElement,
  FormElementType,
  InputElement,
  RangeElement,
  SelectElement,
} from "../../../types/formTypes";
import InputSetting from "./inputSetting/InputTypeSetting";
import WidthSetting from "./generalSetting/WidthSetting";
import HeightSetting from "./generalSetting/HeightSetting";
import { ElementContext, FormElementsContext } from "../../../App";
import MinMaxLength from "./inputSetting/MinMaxLength";
import Button from "../../Button";
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
  const [forminfo, setForminfo] = useState<InputElement>({
    id: uuidv4(),
    type: "input",
    typeInput: "",
    requiredType: false,
    requiredWidth: false,
    requiredHeight: false,
    width: "",
    height: "",
    minLength: 0,
    maxLength: 0,
  });
  const [selectInfo, setSelectInfo] = useState<SelectElement>({
    id: uuidv4(),
    type: "select",
    width: 0,
    height: 0,
    options: [],
    requiredSelect: false,
    requiredWidth: false,
    requiredHeight: false,
  });
  const [sliderInfo, setSliderInfo] = useState<RangeElement>({
    id: uuidv4(),
    width: 0,
    height: 0,
    type: "range",
    requiredRange: false,
    requiredWidth: false,
    requiredHeight: false,
    min: "",
    max: "",
    step: "",
  });
  useEffect(() => {
    console.log("modalElement changed:", modalElement);
  }, [modalElement]);
  useEffect(() => {
    console.log("form context:", FormContext?.elements);
  }, [FormContext?.elements]);
  // function addForm() {
  //   switch (activeType) {
  //     case "input":
  //       FormContext?.setElements((prv) => [...prv, forminfo]);
  //       break;
  //     case "select":
  //       FormContext?.setElements?.((prev) => [...prev, selectInfo]);
  //       break;
  //     case "range":
  //       FormContext?.setElements?.((prv) => [...prv, sliderInfo]);
  //       break;
  //   }
  //   setClickedElement(null);
  // }
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
        {/* <h2 className="font-bold ">{element?.type} setting</h2> */}
        <h2 className="font-bold ">{modalElement?.type} setting</h2>
        {/* {element?.type === "input" && ( */}
        {modalElement?.type === "input" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <InputTypeSetting
              typeInput={forminfo.typeInput}
              setForminfo={setForminfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <WidthSetting
              width={forminfo.width}
              setForminfo={setForminfo}
              forminfo={forminfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <HeightSetting
              height={forminfo.height}
              setForminfo={setForminfo}
              forminfo={forminfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <ValidationSetting
              // requiredType={forminfo.requiredType}
              // requiredWidth={forminfo.requiredWidth}
              // requiredHeight={forminfo.requiredHeight}
              setForminfo={setForminfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <MinMaxLength
              minLength={forminfo.minLength}
              maxLength={forminfo.maxLength}
              setForminfo={setForminfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
          </div>
        )}
        {/* {element?.type === "select" && ( */}
        {modalElement?.type === "select" && (
          <div className="input-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            <SelectSetting
              setSelectInfo={setSelectInfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <WidthSetting
              width={selectInfo.width}
              setSelectInfo={setSelectInfo}
              selectInfo={selectInfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <HeightSetting
              height={selectInfo.height}
              setSelectInfo={setSelectInfo}
              selectInfo={selectInfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <ValidationSelectSetting
              // requiredSelect={selectInfo.requiredSelect}
              // requiredWidth={selectInfo.requiredWidth}
              // requiredHeight={selectInfo.requiredHeight}
              setSelectInfo={setSelectInfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
          </div>
        )}
        {/* {element?.type === "range" && ( */}
        {modalElement?.type === "range" && (
          <div className="slider-setting w-full h-full flex flex-col justify-start items-center  mb-[4px] overflow-visible !gap-0">
            {/* <div className="mb-4">
              <label className="block mb-1">Min:</label>
              <input
                type="number"
                defaultValue={element.min}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Max:</label>
              <input
                type="number"
                defaultValue={element.max}
                className="border rounded p-2 w-full"
              />
            </div> */}
            <WidthSetting
              setSliderInfo={setSliderInfo}
              width={sliderInfo.width}
              sliderInfo={sliderInfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <HeightSetting
              height={sliderInfo.height}
              setSliderInfo={setSliderInfo}
              sliderInfo={sliderInfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <ValidationSliderSetting
              // requiredRange={sliderInfo.requiredRange}
              // requiredWidth={sliderInfo.requiredWidth}
              // requiredHeight={sliderInfo.requiredHeight}
              setSliderInfo={setSliderInfo}
              modalElement={modalElement}
              setModalElement={setModalElement}
            />
            <SliderFeature
              min={sliderInfo.min}
              max={sliderInfo.max}
              step={sliderInfo.step}
              setSliderInfo={setSliderInfo}
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
            // onClickHandler={
            //   () => addForm()
            // console.log({
            //   type: "input",
            //   typeInput: forminfo.typeInput,
            //   requiredType: forminfo.requiredType,
            //   requiredWhidth: forminfo.requiredWhidth,
            //   requiredHeight: forminfo.requiredHeight,
            //   width: forminfo.width,
            //   height: forminfo.height,
            //   minLength: forminfo.minLength,
            //   maxLength: forminfo.maxLength,
            // })
            // console.log({
            //   id: selectInfo.id,
            //   type: selectInfo.type,
            //   width: selectInfo.width,
            //   height: selectInfo.height,
            //   options: selectInfo.options,
            //   requiredSelect: selectInfo.requiredSelect,
            //   requiredWidth: selectInfo.requiredWidth,
            //   requiredHeight: selectInfo.requiredHeight,
            // })
            // console.log(sliderInfo)
            // console.log(selectInfo)
            //  console.log(forminfo)

            // console.log(FormContext?.elements)
            // }
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
