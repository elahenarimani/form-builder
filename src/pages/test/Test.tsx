import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormElement, FinalForm } from "../../types/formTypes";
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
