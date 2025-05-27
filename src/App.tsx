import "./App.css";
import Header from "./components/Header";
import ElementPalette from "./components/dashboard/ElementPalette";
import MainForm from "./components/dashboard/MainForm";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { FormElement, FormElementType } from "./types/formTypes";
import { nanoid } from "nanoid";
// interface {
//    clickedElement :FormElement | null;
//    setClickedElement : ()=> void;
// }
function App() {
  const [elements, setElements] = useState<FormElement[]>([]);
  const [clickedElement, setClickedElement] = useState<FormElement | null>(
    null
  );
  //  const [openModal , setOpenModal] = useState<Boolean>(false)

  //   const handleDrop = (event: any) => {
  //   const { active, over } = event;
  //   if (over && over.id === 'drop-area') {
  //     const newElement: FormElement = {
  //       id: nanoid(),
  //       type: active.id,

  //     };
  //     setElements([...elements, newElement]);
  //   }
  // };
 const handleDrop = (event: any) => {
  const { active, over } = event;

  if (over && over.id === "drop-area") {
    const type = active.id as FormElementType;

    let newElement: FormElement;

    switch (type) {
      case "input":
        newElement = {
          id: nanoid(),
          type: "input",
          required: false,
          width: "100%",
        };
        break;
      case "select":
        newElement = {
          id: nanoid(),
          type: "select",
          required: false,
          options: ["گزینه ۱", "گزینه ۲"],
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

    // اضافه کردن موقعیت و سایز
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
    const jsonData = JSON.stringify(elements, null, 2);
    localStorage.setItem("my-form", jsonData);
    console.log("saved JSON", jsonData);
  };
  const handleDelete = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };
  return (
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
  );
}
export default App;
