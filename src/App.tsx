import "./App.css";
import Header from "./components/Header";
import ElementPalette from "./components/dashboard/ElementPalette";
import MainForm from "./components/dashboard/MainForm";
import { useState, createContext } from "react";
// import { DndContext } from "@dnd-kit/core";
import {
  DndContext,
  useDraggable,
  useDroppable,
  DragEndEvent,
} from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import {
  FormElement,
  FormElementType,
  InputElement,
  SelectElement,
  RangeElement,
} from "./types/formTypes";
import { nanoid } from "nanoid";
interface FormContextType {
  inputElements: InputElement[];
  setInputElements: React.Dispatch<React.SetStateAction<InputElement[]>>;
  selectElements: SelectElement[];
  setSelectElements: React.Dispatch<React.SetStateAction<SelectElement[]>>;
  rangeElements: RangeElement[];
  setRangeElements: React.Dispatch<React.SetStateAction<RangeElement[]>>;
}
type FormElementsContextType = {
  formData: FormElement[];
  setFormData: React.Dispatch<React.SetStateAction<FormElement[]>>;
};
export const FormElementsContext =
  createContext<FormElement | null>(null);



export const FormDataContext = createContext<FormElementsContextType| null>(null);



function App() {
  const [elements, setElements] = useState<FormElement[]>([]);
  const [clickedElement, setClickedElement] = useState<FormElement | null>(
    null
  );
  // const [inputElements, setInputElements] = useState<InputElement[]>([]);
  // const [selectElements, setSelectElements] = useState<SelectElement[]>([]);
  // const [rangeElements, setRangeElements] = useState<RangeElement[]>([]);
  const [formData, setFormData] = useState<FormElement[]>([]);
  const handleDrop = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && over.id === "drop-area") {
      const type = active.id as FormElementType;
      let newElement: FormElement;
      switch (type) {
        case "input":
          newElement = {
            id: nanoid(),
            type: "input",
            requiredType: true,
            requiredWhidth: false,
            requiredHeight: false,
            width: "100%",
            placeholder: "متن خود را وارد کنید",
          };
          break;
        case "select":
          newElement = {
            id: nanoid(),
            type: "select",
            required: false,
            options: ["گزینه 1", "گزینه 2", "گزینه 3"],
            width: "100%",
          };
          break;
        case "range":
          newElement = {
            id: nanoid(),
            type: "range",
            required: false,
            min: 0,
            max: 100,
          };
          break;
      }
      newElement = {
        ...newElement,
        x: Math.random() * 400,
        y: Math.random() * 400,
        width: 300,
        height: 40,
      };
      setElements((prev) => [...prev, newElement]);
    }
  };
  const handleSave = () => {
    //json save
    const jsonData = JSON.stringify(elements, null, 2);
    localStorage.setItem("my-form", jsonData);
    console.log("saved JSON", jsonData);
  };
  const handleDelete = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <FormDataContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {/* <FormElementsContext.Provider
        value={{
          inputElements,
          setInputElements,
          selectElements,
          setSelectElements,
          rangeElements,
          setRangeElements,
        }}
      > */}
        <div className="App ">
          <DndContext onDragEnd={handleDrop}>
            <Header />
            <main className="w-full md:w-11/12 lg:w-4/5 md:ml-auto md:mr-auto h-full flex flex-col md:flex-row-reverse justify-start md:justify-between items-center px-[18px] py-[18px] gap-[10px] md:gap-[50px]">
              <ElementPalette />
              <MainForm
                elements={elements}
                onDelete={handleDelete}
                clickedElement={clickedElement}
                setClickedElement={setClickedElement}
              />
            </main>
            <button
              onClick={handleSave}
              className="mt-4 ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              ذخیره فرم
            </button>
          </DndContext>
        </div>
      {/* </FormElementsContext.Provider> */}
    </FormDataContext.Provider>
  );
}
export default App;
