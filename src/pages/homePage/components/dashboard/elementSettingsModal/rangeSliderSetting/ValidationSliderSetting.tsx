import React, { useState } from "react";
import { FormElement, RangeElement } from "../../../../../../types/formTypes";
type SliderProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const ValidationSliderSetting = ({
  modalElement,
  setModalElement,
}: SliderProps) => {
  const [requiredSlider, setRequiredSlider] = useState(false);
  const [requiredWidth, setRequiredWidth] = useState(false);
  const [requiredHeight, setRequiredHeight] = useState(false);
  return (
    <div className="validation-wrapper w-full h-[150px] flex flex-col justify-between">
      <div className="validation-title w-full flex justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Validation
        </p>
      </div>
      <div className="validation w-full h-full border-[1px] border-[#d1d5db] rounded-[5px] flex flex-row flex-wrap justify-between items-center gap-[30px] mb-2 p-[18px]">
        {" "}
        <div className="flex justify-between items-center gap-[5px] ">
          <label className="text-sm">Required Slider</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={true}
            checked={requiredSlider}
            onChange={(e) => {
              setRequiredSlider(e.target.checked);
              setModalElement((prv) => {
                // console.log(prv)
                if (!prv) return null;
                if (prv) {
                  return {
                    ...prv,
                    requiredRange: e.target.checked,
                  };
                } else {
                  return prv;
                }
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center gap-[10px] ">
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
        <div className="flex justify-between items-center gap-[10px]">
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
        </div>
      </div>
    </div>
  );
};
export default ValidationSliderSetting;
