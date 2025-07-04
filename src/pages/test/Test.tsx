import { useState, createContext, useEffect } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import { FormElement, FormElementType, FinalForm } from "../../types/formTypes";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Button from "../../components/Button";
import { useCombinedStore } from "../../zustand/useCombinedStore";
import Drop from "./drop.tsx/Drop";
import Drag from "./drag/Darg";

function Test() {
  const {
    element,
    deleteElement,
    addElement,
    addForm,
    finalForm,
    clearElements,
  } = useCombinedStore();
  const [formName, setFormName] = useState("");
  const [clickedElement, setClickedElement] = useState<FormElement | null>(
    null
  );
  const navigate = useNavigate();
  const [opensettingModal, setOpensettingModal] = useState<boolean>(false);
  // const handleDrop = (event: DragEndEvent) => {
  //   const { active, over } = event;
  //   if (over && over.id === "drop-area") {
  //     const type = active.id as FormElementType;
  //     let newElement: FormElement;
  //     switch (type) {
  //       case "input":
  //         newElement = {
  //           id: uuidv4(),
  //           type: "input",
  //           requiredType: false,
  //           requiredWidth: false,
  //           requiredHeight: false,
  //           width: "100%",
  //           height: "100%",
  //           placeholder: "Enter text",
  //           typeInput: "",
  //           minLength: 0,
  //           maxLength: 100,
  //           requiredField: false,
  //           requiredMinLength: false,
  //           requiredMaxLength: false,
  //           requiredTypeInput: false,
  //         };
  //         break;
  //       case "select":
  //         newElement = {
  //           id: uuidv4(),
  //           type: "select",
  //           options: ["option 1", "option 2", "option 3"],
  //           typeSelect: "",
  //           width: "100%",
  //           height: "100%",
  //           requiredSelect: false,
  //           requiredWidth: false,
  //           requiredHeight: false,
  //         };
  //         break;
  //       case "range":
  //         newElement = {
  //           id: uuidv4(),
  //           type: "range",
  //           min: 0,
  //           max: 100,
  //           requiredRange: false,
  //           requiredMinRange: false,
  //           requiredMaxRange: false,
  //           requiredStep: false,
  //           step: 0,
  //           width: "100%",
  //           height: "100%",
  //           requiredWidth: false,
  //           requiredHeight: false,
  //         };
  //         break;
  //     }
  //     newElement = {
  //       ...newElement,
  //       x: Math.random() * 400,
  //       y: Math.random() * 400,
  //       width: 300,
  //       height: 40,
  //     };
  //     // if (event?.delta && over?.rect) {
  //     //   const offsetX = over.rect.left;
  //     //   const offsetY = over.rect.top;

  //     //   const x = event.delta.x + offsetX;
  //     //   const y = event.delta.y + offsetY;

  //     //   newElement = {
  //     //     ...newElement,
  //     //     x,
  //     //     y,
  //     //     width: 300,
  //     //     height: 40,
  //     //   };
  //     // }
  //     addElement(newElement);
  //   }
  // };


//   const handleDrop = (event: DragEndEvent) => {
//   const { active, over } = event;

//   if (over && over.id === "drop-area") {
//     const type = active.id as FormElementType;
//     let newElement: FormElement;

//     switch (type) {
//       case "input":
//         newElement = {
//           id: uuidv4(),
//           type: "input",
//           requiredType: false,
//           requiredWidth: false,
//           requiredHeight: false,
//           width: "100%",
//           height: "100%",
//           placeholder: "Enter text",
//           typeInput: "",
//           minLength: 0,
//           maxLength: 100,
//           requiredField: false,
//           requiredMinLength: false,
//           requiredMaxLength: false,
//           requiredTypeInput: false,
//         };
//         break;

//       case "select":
//         newElement = {
//           id: uuidv4(),
//           type: "select",
//           options: ["option 1", "option 2", "option 3"],
//           typeSelect: "",
//           width: "100%",
//           height: "100%",
//           requiredSelect: false,
//           requiredWidth: false,
//           requiredHeight: false,
//         };
//         break;

//       case "range":
//         newElement = {
//           id: uuidv4(),
//           type: "range",
//           min: 0,
//           max: 100,
//           requiredRange: false,
//           requiredMinRange: false,
//           requiredMaxRange: false,
//           requiredStep: false,
//           step: 0,
//           width: "100%",
//           height: "100%",
//           requiredWidth: false,
//           requiredHeight: false,
//         };
//         break;

//       default:
//         return;
//     }

//     // گرفتن موقعیت دقیق موس نسبت به drop-area
//     if (event.activatorEvent && over.rect) {
//       const mouseEvent = event.activatorEvent as MouseEvent;
//       const dropAreaRect = over.rect;

//       const x = mouseEvent.clientX - dropAreaRect.left;
//       const y = mouseEvent.clientY - dropAreaRect.top;

//       newElement = {
//         ...newElement,
//         x,
//         y,
//         width: 300,
//         height: 40,
//       };
//     }

//     addElement(newElement);
//   }
// };
  useEffect(() => {
    console.log("finalform :", finalForm);
  }, [finalForm]);
  useEffect(() => {
    console.log("homePage:", element);
  }, [element]);
  const handleSaveAsTable = () => {
    if (!formName) {
      alert("Form name cannot be empty");
      navigate("/");
      return;
    }
    const newForm: FinalForm = {
      id: uuidv4(),
      name: formName,
      elements: element,
    };
    const exists = finalForm.some((form) => form.name === newForm.name);
    if (!exists) {
      addForm(newForm);
    } else {
      alert("This form name is already used. Please choose a different name");
      navigate("/");
      return;
    }
    clearElements();
    setFormName("");
    navigate("/formList");
  };
  useEffect(() => {
    console.log({ finalform: finalForm });
  }, [finalForm]);
  const handleDelete = (id: string) => {
    deleteElement(id);
  };
  const saveSettingData = (id: string) => {
    setOpensettingModal(true);
    console.log(opensettingModal);
    console.log(id);
  };
  const handleSaveAsJson = () => {
    if (!formName) {
      alert("Form name cannot be empty");
      navigate("/");
      return;
    }
    const newForm: FinalForm = {
      id: uuidv4(),
      name: formName,
      elements: element,
    };
    const exists = finalForm.some((form) => form.name === newForm.name);
    if (!exists) {
      addForm(newForm);
    } else {
      alert("This form name is already used. Please choose a different name");
      navigate("/");
      return;
    }
    clearElements();
    setFormName("");
    navigate("/view-json");
  };
  return (
    <div className=" pb-[18px]">
      
        <Header />
        <main className="w-full  md:w-11/12 lg:w-4/5 md:ml-auto md:mr-auto h-full flex flex-col md:flex-row-reverse justify-start md:justify-between items-center md:items-start px-[18px] py-[18px] gap-[10px] md:gap-[50px]">
          <Drag />
          <Drop
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
            onClickHandler={handleSaveAsJson}
          >
            Save as JSON
          </Button>
          <Button
            className="w-[130px] bg-primary px-4 py-2 rounded-[50px] text-white  flex justify-center justify-centre cursor-pointer"
            onClickHandler={() => handleSaveAsTable()}
          >
            Save
          </Button>
        </div>
    
      <Outlet />
    </div>
  );
}
export default Test;
// function uuid() {
//   throw new Error("Function not implemented.");
// }
