import { useDroppable } from "@dnd-kit/core";
import { IoTrash } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import ReactSlider from "react-slider";
import ElementSettingModal from "./elementSettingsModal/InputSettingModal";
import { IoMdSettings } from "react-icons/io";
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
type MainFormProps = {
  onDelete: (id: string) => void;
  formName: string;
  setFormName: React.Dispatch<React.SetStateAction<string>>;
  saveSettingData: (id: string) => void;
  clickedElement: FormElement | null;
  setClickedElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
  opensettingModal: boolean;
  setOpensettingModal: React.Dispatch<React.SetStateAction<boolean>>;
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
}: MainFormProps) => {
  const [modalElement, setModalElement] = useState<FormElement | null>(null);
  const { setNodeRef } = useDroppable({ id: "drop-area" });
  const [activeType, setActiveType] = useState<FormElementType>("input");
  const [inputValue, setInputValue] = useState<{ [key: string]: string }>({});
  const { element } = useCombinedStore();
  useEffect(() => {
    console.log("all element:", element);
  }, [element]);
  console.log(formName);
  const saveSetting = (idSetting: string) => {
    const elementFinder = element.find((el) => el.id === idSetting);
    if (elementFinder) {
      setModalElement(elementFinder);
    }
    setOpensettingModal(true);
    console.log(opensettingModal);
    console.log(idSetting);
    console.log(elementFinder);
  };
  const inputHandler = (inputId: string, inputTyped: string) => {
    setInputValue((prv) => ({
      ...prv,
      [inputId]: inputTyped,
    }));
  };
  return (
    <div
      ref={setNodeRef}
      className="main-form top-0 w-full min-h-screen border border-[#444444] rounded-[5px] py-[20px] px-[15px] bg-gray-50 "
    >
      <h2 className="text-lg font-bold mb-4">My Form</h2>
      <div className="w-[300px] h-[80px] flex flex-col justify-start items-start gap-[2px] mb-4">
        <label className="w-full h-full text-start text-[15px]">Form Name:</label>
        <Input
          className="w-[300px] h-[40px] rounded-[5px] px-[5px] outline-none border text-[13px] border border-gray-300"
          type="text"
          ariaLabel="required or not"
          valueState={formName}
          onChangeHandler={(e) => setFormName(e.target.value)}
        />
      </div>
      {Array.isArray(element) &&
        element.map((el) => (
          <div
            key={el.id}
            className="w-[300px] h-full mb-4 flex flex-row justify-between items-center gap-3"
            style={{
              top: el.y || 0,
              left: el.x || 0,
              width: el.width || "auto",
              height: el.height || "auto",
            }}
          >
            {el.type === "input" && (
              <div className="w-full h-full ">
                <input
                  type={(el as InputElement).typeInput}
                  className={`p-2 w-full h-[40px] rounded text-[#9CA7C4] outline-none border 
                      ${
                        (el as InputElement).requiredType
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                  placeholder={(el as InputElement).placeholder}
                  minLength={(el as InputElement).minLength}
                  maxLength={(el as InputElement).maxLength}
                  required={(el as InputElement).requiredType}
                  aria-label="describe input"
                  style={{
                    width:
                      (el as InputElement).requiredWidth && el.width
                        ? `${el.width}px`
                        : "100%",
                    height:
                      (el as InputElement).requiredHeight && el.height
                        ? `${el.height}px`
                        : "auto",
                  }}
                  onClick={() => {
                    setActiveType("input");
                  }}
                  value={inputValue[(el as InputElement).id] || ""}
                  onChange={(e) =>
                    inputHandler((el as InputElement).id, e.target.value)
                  }
                />
                {String(inputValue).length > 0 &&
                String(inputValue).length < (el as InputElement).minLength ? (
                  <p className="h-[20px] text-red-500 text-sm mt-1 text-left">
                    minimum characters is {(el as InputElement).minLength}{" "}
                    characters.
                  </p>
                ) : (
                  <p className="hidden"></p>
                )}
                {String(inputValue).length ===
                (el as InputElement).maxLength ? (
                  <p className="h-[20px] text-red-500 text-sm mt-1 text-left">
                    maximum characters is {(el as InputElement).maxLength}{" "}
                    characters.
                  </p>
                ) : (
                  <p className="hidden"></p>
                )}
              </div>
            )}
            {el.type === "select" && (
              <select
                className={`p-2 w-full h-full rounded text-[#9CA7C4] outline-none border 
                      ${
                        (el as SelectElement).requiredSelect
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                required={(el as SelectElement).requiredSelect}
                style={{
                  width:
                    (el as SelectElement).requiredWidth && el.width
                      ? `${el.width}px`
                      : "100%",
                  height:
                    (el as SelectElement).requiredHeight && el.height
                      ? `${el.height}px`
                      : "auto",
                }}
                onClick={() => {
                  setActiveType("select");
                }}
              >
                {(el as SelectElement).options.length === 0 ? (
                  <option disabled>No Option</option>
                ) : (
                  (el as SelectElement).options.map((opt, index) => (
                    <option key={index} value={opt}>
                      {opt}
                    </option>
                  ))
                )}
              </select>
            )}
            {el.type === "range" && (
              <div
                className={` w-[300px] h-[40px] rounded border pl-5 pr-5 bg-white
                      ${
                        (el as RangeElement).requiredRange
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                style={{
                  width:
                    (el as RangeElement).requiredWidth && el.width
                      ? `${el.width}px`
                      : "300px",
                  height:
                    (el as RangeElement).requiredHeight && el.height
                      ? `${el.height}px`
                      : "auto",
                  overflow: "hidden",
                }}
              >
                <ReactSlider
                  className="w-full h-[40px] horizontal-slider "
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  min={Number((el as RangeElement).min) || 0}
                  max={Number((el as RangeElement).max) || 100}
                  step={Number((el as RangeElement).step) || 1}
                  defaultValue={[
                    Number((el as RangeElement).min) || 0,
                    Number((el as RangeElement).max) || 100,
                  ]}
                  ariaLabel={["Thumb"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                  pearling
                  minDistance={10}
                />
              </div>
            )}
            <div className="!w-[60px] h-full flex justify-end items-center p-[8px]  ">
              <Button
                onClickHandler={() => onDelete(el.id)}
                className=" top-1 right-1  group-hover:opacity-100 transition-opacity"
              >
                <IoTrash size={20} color="red" />
              </Button>
              <Button
                onClickHandler={() => saveSetting(el.id)}
                className=" top-1 right-1  group-hover:opacity-100 transition-opacity"
              >
                <IoMdSettings size={20} color="gray" />
              </Button>
            </div>
          </div>
        ))}
      {opensettingModal && modalElement && (
        <ElementSettingModal
          element={clickedElement}
          activeType={activeType}
          setClickedElement={setClickedElement}
          opensettingModal={opensettingModal}
          setOpensettingModal={setOpensettingModal}
          saveSetting={saveSetting}
          modalElement={modalElement}
          setModalElement={setModalElement}
        />
      )}
    </div>
  );
};
export default MainForm;
