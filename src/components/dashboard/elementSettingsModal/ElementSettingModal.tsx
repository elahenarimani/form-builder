import React, { useState } from "react";
import { FormElement } from "../../../types/formTypes";
import InputSetting from "./inputSetting/InputTypeSetting";
import WidthSetting from "./generalSetting/WidthSetting";
type elementSettingsPrpps = {
  element: FormElement;
  //  onClose: () => void;
};
const ElementSettingModal = ({ element }: elementSettingsPrpps) => {
  const [localStorageElement, setLocalStorageElement] = useState<FormElement[]>(
    []
  );
  return (
    <div className="modal-wrapper overflow-visible fixed w-full h-screen bg-black/30 flex justify-center items-start z-50 top-0 left-0 right-0 p-[18px] ">
      <div className="modal overflow-visible w-full h-full bg-white p-4 rounded-[10px] ">
        <h2 className="font-bold mb-3">{element.type} setting</h2>
        <div className="flex flex-row justify-center items-center gap-5 mb-[5px] overflow-visible">
          {/* <label className="block mb-1">Require:</label> */}
          {/* <input
            type="checkbox"
            defaultChecked={element.required}
            aria-label="Required checkbox?"
          ></input> */}
        </div>
        {element.type === "input" && (
          <div className="w-full h-full flex flex-col justify-start items-center  mb-[5px] overflow-visible !gap-0">
            <InputSetting />
            <WidthSetting />
          </div>
        )}
        {element.type === "select" && (
          <div>
            <label className="block mb-1">Options:</label>
            <input
              type="text"
              defaultValue={
                Array.isArray(element.options) ? element.options.join(",") : ""
              }
              className="border rounded p-2 w-full"
            />
          </div>
        )}
        {element.type === "range" && (
          <div>
            <div className="mb-4">
              <label className="block mb-1">Min:</label>
              <input
                type="number"
                defaultValue={element.min}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Max:</label>
              <input
                type="number"
                defaultValue={element.max}
                className="border rounded p-2 w-full"
              />
            </div>
          </div>
        )}
        <div className="flex justify-end gap-2 mt-4">
          <button className="bg-gray-400 px-4 py-2 rounded text-white">
            لغو
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded text-white">
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElementSettingModal;
