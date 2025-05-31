import { useDroppable } from "@dnd-kit/core";
import { IoTrash } from "react-icons/io5";
import { useContext, useState } from "react";
import ReactSlider from "react-slider";
import {
  FormElement,
  InputElement,
  FormElementType,
  SelectElement,
  RangeElement,
} from "../../types/formTypes";
import "./mainForm.css"
import { ElementContext } from "../../App";
import ElementSettingModal from "./elementSettingsModal/InputSettingModal";

type MainFormProps = {
  elements: FormElement[];
  onDelete: (id: string) => void;
};
const MainForm = ({ onDelete }: MainFormProps) => {
  const [clickedElement, setClickedElement] = useState<FormElement | null>(
    null
  );
  const { setNodeRef } = useDroppable({ id: "drop-area" });
  const FormContext = useContext(ElementContext);
  const [activeType, setActiveType] = useState<FormElementType>("input");
  console.log(FormContext?.elements);
  return (
    <div
      ref={setNodeRef}
      className="main-form top-0 w-full min-h-screen border border-[#444444] rounded-[5px] py-[20px] px-[15px] bg-gray-50"
    >
      <h2 className="text-lg font-bold mb-4">My Form</h2>
      {Array.isArray(FormContext?.elements) &&
        FormContext?.elements.map((el) => (
          <div
            key={el.id}
            className="w-full h-[40px] mb-4 flex justify-between items-center gap-[10px] group"
            style={{
              top: el.y || 0,
              left: el.x || 0,
              width: el.width || "auto",
              height: el.height || "auto",
            }}
          >
            {el.type === "input" && (
              <input
                type={(el as InputElement).typeInput}
                className="border p-2 w-full h-full rounded text-[#9CA7C4]"
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
                  setClickedElement(el);
                }}
              />
            )}
            {el.type === "select" && (
              <select
                className="border p-2 w-full h-full rounded text-[#9CA7C4]"
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
                  setClickedElement(el);
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
                style={{
                  width:
                    (el as RangeElement).requiredWidth && el.width
                      ? `${el.width}px`
                      : "100%",
                  height:
                    (el as RangeElement).requiredHeight && el.height
                      ? `${el.height}px`
                      : "auto",
                }}
              >
                <ReactSlider
                  className="horizontal-slider"
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
            <button
              onClick={() => onDelete(el.id)}
              className=" top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <IoTrash size={20} color="red" />
            </button>
          </div>
        ))}
      {clickedElement && (
        <ElementSettingModal
          element={clickedElement}
          activeType={activeType}
          setClickedElement={setClickedElement}
        />
      )}
    </div>
  );
};
export default MainForm;
