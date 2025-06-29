import { useState, createContext, useEffect } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
// import Button from "./components/Button";
import {
  FormElement,
  FormElementType,
  InputElement,
  SelectElement,
  RangeElement,
  FinalForm,
} from "../../types/formTypes";
import { Outlet, useNavigate } from "react-router-dom";
import ElementPalette from "./components/dashboard/ElementPalette";
import Header from "../../components/header/Header";
import Button from "../../components/Button";
import MainForm from "./components/dashboard/MainForm";
import { useCombinedStore } from "../../zustand/useCombinedStore";
// import { useFormStore } from "../../zustand/formStore";

type ElementsContextType = {
  //true
  elements: FormElement[];
  setElements: React.Dispatch<React.SetStateAction<FormElement[]>>;
  finalForm: FinalForm[];
  setFinalForm: React.Dispatch<React.SetStateAction<FinalForm[]>>;
};
export const ElementContext = createContext<ElementsContextType | null>(null); //true
function HomePage() {
  const [elements, setElements] = useState<FormElement[]>([]);
  const [formName, setFormName] = useState("");
  // const { finalForm, setFinalForm, log, finalFormName, element} = useCombinedStore();
  //  const { elements, setElements, log } = useCombinedStore();
  // const test = useFormStore(state => state.num);
  // const test1increase = useFormStore(state => state.increaseCounterNumber)

    const [finalForm, setFinalForm] = useState<FinalForm[]>(() => {
    const saved = localStorage.getItem("saved-forms");
    return saved ? JSON.parse(saved) : [];

  });
  const [clickedElement, setClickedElement] = useState<FormElement | null>(
    null
  );
  const navigate = useNavigate();
  const [opensettingModal, setOpensettingModal] = useState<boolean>(false);
  const handleDrop = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && over.id === "drop-area") {
      const type = active.id as FormElementType;
      let newElement: FormElement;
      switch (type) {
        case "input":
          newElement = {
            id: uuidv4(),
            type: "input",
            requiredType: false,
            requiredWidth: false,
            requiredHeight: false,
            width: "100%",
            height: "100%",
            placeholder: "Enter text",
            typeInput: "",
            minLength: 0,
            maxLength: 100,
          };
          break;
        case "select":
          newElement = {
            id: uuidv4(),
            type: "select",
            // required: false,
            options: ["option 1", "option 2", "option 3"],
            width: "100%",
            height: "100%",
            requiredSelect: false,
            requiredWidth: false,
            requiredHeight: false,
          };
          break;
        case "range":
          newElement = {
            id: uuidv4(),
            type: "range",
            // required: false,
            min: 0,
            max: 100,
            requiredRange: false,
            requiredWidth: false,
            requiredHeight: false,
            step: 0,
            width: "100%",
            height: "100%",
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
  // useEffect(() => {
  //   console.log("final form:", finalForm);
  // }, [finalForm]);
  // const handleSaveAsTable = () => {
  //   if (!formName) {
  //     alert("please entre form name");
  //     return;
  //   }
  //   const newForm: FinalForm = {
  //     id: uuidv4(),
  //     name: formName,
  //     elements: elements,
  //   };
  //   const saved = localStorage.getItem("saved-forms");
  //   const parsed: FinalForm[] = saved ? JSON.parse(saved) : [];
  //   const updated = [...parsed, newForm];
  //   localStorage.setItem("saved-forms", JSON.stringify(updated));
  //   setFormName("");
  //   navigate("/formList");
  // };
  useEffect(() => {
    console.log("finalform :", finalForm);
  }, [finalForm]);
  useEffect(() => {
    console.log("form context:", elements);
  }, [elements]);

  const handleSaveAsTable = () => {
    // if (!formName) {
    //   alert("please entre form name");
    //   return;
    // }
    // const newForm: FinalForm = {
    //   id: uuidv4(),
    //   name: formName,
    //   elements: elements,
    // };
    // const saved = localStorage.getItem("saved-forms");
    // console.log(saved)
    // const parsed: FinalForm[] = saved ? JSON.parse(saved) : [];
    // console.log(parsed)
    // const updated = [...parsed, newForm];
    // console.log(updated)
    // localStorage.setItem("saved-forms", JSON.stringify(updated));
    // setFormName("");
    // navigate("/formList");
  };

  //   useEffect(() => {
  //   const saved = localStorage.getItem("saved-forms");
  //   if (saved) {
  //     const parsed: FinalForm[] = JSON.parse(saved);
  //     setFinalForm(parsed);
  //   }
  // }, []);

  useEffect(() => {
    console.log({ finalform: finalForm });
  }, [finalForm]);
  // const handleSaveAsJson = () => {
  //   //json save
  //   const jsonData = JSON.stringify(elements, null, 2);
  //   localStorage.setItem("my-form", jsonData);
  //   console.log("saved JSON", jsonData);
  // };
  const handleDelete = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };
  const saveSettingData = (id: string) => {
    setOpensettingModal(true);
    console.log(opensettingModal);
    console.log(id);
  };
  return (
    <ElementContext.Provider
      value={{
        elements,
        setElements,
        finalForm,
        setFinalForm,
      }}
    >
      <div className=" pb-[18px]">
        <DndContext onDragEnd={handleDrop}>
          {/* <Header /> */}
         
          <main className="w-full md:w-11/12 lg:w-4/5 md:ml-auto md:mr-auto h-full flex flex-col md:flex-row-reverse justify-start md:justify-between items-center px-[18px] py-[18px] gap-[10px] md:gap-[50px]">
            <ElementPalette />
            <MainForm
              onDelete={handleDelete}
              formName={formName}
              setFormName={setFormName}
              saveSettingData={saveSettingData}
              clickedElement={clickedElement}
              setClickedElement={setClickedElement}
              opensettingModal={opensettingModal}
              setOpensettingModal={setOpensettingModal}
            />
          </main>
          <div className="w-full h-full flex justify-center justify-centre gap-[20px] ">
            <Button
              className="w-[130px] bg-white px-4 py-2 border-[1px] border-[#d1d5db] rounded-[50px] text-gray-700  flex justify-center justify-centre cursor-pointer"
              // onClickHandler={() => handleSaveAsJson()}
            >
              Save as JSON
            </Button>
            <Button
              className="w-[130px] bg-[#1ABC9C] px-4 py-2 rounded-[50px] text-white  flex justify-center justify-centre cursor-pointer"
              onClickHandler={() => handleSaveAsTable()}
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
            >
              Save
            </Button>
          </div>
        </DndContext>
        <Outlet />
      </div>
    </ElementContext.Provider>
  );
}
export default HomePage;
function uuid() {
  throw new Error("Function not implemented.");
}
