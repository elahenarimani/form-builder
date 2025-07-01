import React, { useState } from "react";
import { FormElement } from "../../../../../../types/formTypes";
type ValidationProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const ValidationSetting = ({
  modalElement,
  setModalElement,
}: ValidationProps) => {
  // const [requiredType, setRequiredType] = useState(false);
  // const [requiredWidth, setRequiredWidth] = useState(false);
  // const [requiredHeight, setRequiredHeight] = useState(false);

  // const [requiredFeild, setRequiredFeild] = useState(false);
  // const [requiredMinLength, setRequiredMinLength] = useState(false);
  // const [requiredMaxLength, setRequiredMaxLength] = useState(false);
  // const [requiredTypeInput, setRequiredTypeInput] = useState(false);
  return (
    <div className="validation-wrapper h-full xl:h-[150px] w-full  flex flex-col justify-between">
      <div className="validation-title w-full flex justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Validation
        </p>
      </div>
      <div className="validation w-full h-full border-[1px] border-[#d1d5db] rounded-[5px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-y-[15px] mb-2 p-[18px]">
        {" "}
        {/* <div className="flex justify-start items-center gap-[5px] ">
          <label className="text-sm">Required Type</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={false}
            checked={requiredType}
            onChange={(e) => {
              setRequiredType(e.target.checked);
              setModalElement((prv) => {
                if (!prv) return null;
                if (prv) {
                  return {
                    ...prv,
                    requiredType: e.target.checked,
                  };
                } else {
                  return prv;
                }
              });
            }}
          />
        </div> */}
        {/* <div className="flex justify-start items-center gap-[10px] ">
          <label className="text-sm">Required Width</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredWidth}
            onChange={(e) => {
              setRequiredWidth(e.target.checked);
              setModalElement((prv) => {
                if (!prv) return null;
                if (prv) {
                  return {
                    ...prv,
                    requiredWidth: e.target.checked,
                  };
                } else {
                  return prv;
                }
              });
            }}
          />
        </div> */}
        {/* <div className="flex justify-start items-center gap-[10px]">
          <label className="text-sm">Required Height</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredHeight}
            onChange={(e) => {
              setRequiredHeight(e.target.checked);
              setModalElement((prv) => {
                if (!prv) return null;
                if (prv) {
                  return {
                    ...prv,
                    requiredHeight: e.target.checked,
                  };
                } else {
                  return prv;
                }
              });
            }}
          />
        </div> */}
        <div className="flex justify-start items-center gap-[5px] ">
          <label className="text-sm">Required Field</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={false}
            checked={(modalElement as any)?.requiredFeild ?? false}
            onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return {
                  ...prv,
                  requiredFeild: e.target.checked,
                };
              });
            }}
          />
        </div>
        <div className="flex justify-start items-center gap-[10px] ">
          <label className="text-sm">Required Min Length</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={(modalElement as any)?.requiredMinLength ?? false}
            onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return {
                  ...prv,
                  requiredMinLength: e.target.checked,
                };
              });
            }}
          />
        </div>
        <div className="flex justify-start items-center gap-[10px]">
          <label className="text-sm">Required Max Length</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={(modalElement as any)?.requiredMaxLength ?? false}
            onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return {
                  ...prv,
                  requiredMaxLength: e.target.checked,
                };
              });
            }}
          />
        </div>
        <div className="flex justify-start items-center gap-[5px] ">
          <label className="text-sm">Required Type Input</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={false}
            checked={(modalElement as any)?.requiredTypeInput ?? false}
             onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return {
                  ...prv,
                  requiredTypeInput : e.target.checked,
                };
              });
            }}
          />
        </div>
        {/* <div className="flex justify-center items-center gap-[10px] ">
          <label className="text-sm">Required Width</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredWidth}
            onChange={(e) => {
              setRequiredWidth(e.target.checked);
              setModalElement((prv) => {
                if (!prv) return null;
                if (prv) {
                  return {
                    ...prv,
                    requiredWidth: e.target.checked,
                  };
                } else {
                  return prv;
                }
              });
            }}
          />
        </div>
        <div className="flex justify-end items-center gap-[10px]">
          <label className="text-sm">Required Height</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredHeight}
            onChange={(e) => {
              setRequiredHeight(e.target.checked);
              setModalElement((prv) => {
                if (!prv) return null;
                if (prv) {
                  return {
                    ...prv,
                    requiredHeight: e.target.checked,
                  };
                } else {
                  return prv;
                }
              });
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ValidationSetting;
