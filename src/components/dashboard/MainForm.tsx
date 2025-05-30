import { useDroppable } from "@dnd-kit/core";
import { FormElement, OpenModal, SelectElement } from "../../types/formTypes";
import { IoTrash } from "react-icons/io5";
import { useContext, useState } from "react";
// import ElementSettingModal from "./elementSettingsModal/ElementSettingModal";
import { FormElementsContext } from "../../App";
import { InputElement } from "../../types/formTypes";
import SelectSlider from "./elementSettingsModal/selectSetting/SelectSetting";
import RangeSliderSetting from "./elementSettingsModal/rangeSliderSetting/RangeSlider";
import SelectSettingModal from "./elementSettingsModal/selectSetting/SelectSetting";
import ElementSettingModal from "./elementSettingsModal/ElementSettingModal";
// import ElementSettingModal from "./elementSettingsModal/ElementSettingModal";
type MainFormProps = {
  elements: FormElement[];
  onDelete: (id: string) => void;
  clickedElement: FormElement | null;
  setClickedElement: (element: FormElement | null) => void;
};

const MainForm = ({
  elements,
  onDelete,
  clickedElement,
  setClickedElement,
}: MainFormProps) => {
  const FormElmntContext = useContext(FormElementsContext);
  const { setNodeRef } = useDroppable({ id: "drop-area" });
  // const [openModal, setOpenModal] = useState<OpenModal>({
  //   openInputSetting: false,
  //   openSelectSetting: false,
  //   openRangeSetting: false,
  // });
    const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <div
      ref={setNodeRef}
      className="main-form   top-0 w-full min-h-screen border border-[#444444] rounded-[5px] py-[20px] px-[15px] bg-gray-50"
    >
      <h2 className="text-lg font-bold mb-4">My Form</h2>
      {elements.map((el) => (
        <div
          key={el.id}
          className="w-full h-[40px] mb-4 flex justify-between items-center gap-[10px] group"
          onClick={() => setClickedElement(el)}
          // onClick={() => setOpenModal(true)}
          style={{
            top: el.y || 0,
            left: el.x || 0,
            width: el.width || "auto",
            height: el.height || "auto",
          }}
        >
          {el.type === "input" && (
            <input
              type="text"
              className="border p-2 w-full h-full rounded text-[#9CA7C4]"
              placeholder={(el as InputElement).placeholder || ""}
              minLength={el.minLength}
              maxLength={el.maxLength}
            />
          )}
          {el.type === "select" && (
            <select
              className="border p-2 w-full h-full rounded text-[#9CA7C4]"
              // onClick={() =>
              //   setOpenModal((prv) => ({
              //     ...prv,
              //     openSelectSetting: true,
              //   }))
              // }
            >
              {/* <option>Choose an option</option>
              <option>Choose an option</option>
              <option>Choose an option</option> */}
              {(el as SelectElement).options.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          )}
          {el.type === "range" && (
            <input
              type="range"
              min={el.min}
              max={el.max}
              className="w-full h-full "
            />
          )}
          <button
            onClick={() => onDelete(el.id)}
            className=" top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <IoTrash size={20} color="red" />
          </button>
        </div>
      ))}
        {clickedElement && <ElementSettingModal element={clickedElement} />}
      {/* {clickedElement && <ElementSettingModal element={clickedElement} />} */}
      {/* {clickedElement && <SelectSettingModal element={clickedElement} />} */}
    </div>
  );
};

export default MainForm;
