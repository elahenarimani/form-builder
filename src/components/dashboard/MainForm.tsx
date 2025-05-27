import { useDroppable } from "@dnd-kit/core";
import { FormElement } from "../../types/formTypes";
import { IoTrash } from "react-icons/io5";
import { useState } from "react";
import ElementSettingModal from "./elementSettingsModal/ElementSettingModal";
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
  const { setNodeRef } = useDroppable({ id: "drop-area" });
  // const [clickedElement , setClickedElement] = useState<FormElement | null>(null)
  return (
    <div
      ref={setNodeRef}
      className="main-form relative  w-full min-h-screen border border-[#444444] rounded-[5px] py-[20px] px-[15px] bg-gray-50"
    >
      <h2 className="text-lg font-bold mb-4">My Form</h2>
      {elements.map((el) => (
        <div
          key={el.id}
          className="w-full h-[40px] mb-4 flex justify-between items-center gap-[10px] group"
          onClick={() => setClickedElement(el)}
          style={{
            position: "absolute",
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
              placeholder="Enter text"
            />
          )}
          {el.type === "select" && (
            <select className="border p-2 w-full h-full rounded text-[#9CA7C4]">
              <option>Choose an option</option>
              <option>Choose an option</option>
              <option>Choose an option</option>
            </select>
          )}
          {el.type === "range" && (
            <input type="range" min={0} max={100} className="w-full h-full " />
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
          // onClose ={() => setClickedElement(null)}
        />
      )}
    </div>
  );
};

export default MainForm;
