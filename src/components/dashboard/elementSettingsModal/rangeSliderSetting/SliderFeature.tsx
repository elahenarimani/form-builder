import React, { useContext, useState } from "react";
import { InputElement, RangeElement } from "../../../../types/formTypes";
import { ElementContext } from "../../../../App";
type SliderFeatureProps = {
  setSliderInfo: React.Dispatch<React.SetStateAction<RangeElement>>;
  min: number;
  max: number;
  step: number;
};
const SliderFeature = ({
  min,
  max,
  step,
  setSliderInfo,
}: SliderFeatureProps) => {
  //   const [minLength1, setMinLength1] = useState<string>("");
  //   const FormContext = useContext(ElementContext);
  //   const [maxLength1, setMaxLength1] = useState<string>("");
  return (
    <div className="Min-Max-Length-wrapper w-full h-[275px] flex flex-col justify-start">
      <div className="Min-Max-Length-title w-full justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Slider Features
        </p>
      </div>
      <div className="Min-Max-Length w-full h-[180px] border-[1px] border-[#d1d5db] rounded-[5px] flex flex-col  justify-start items-start gap-x-5 mb-2 p-[18px]">
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            min:
          </label>
          <input
            type="number"
            className="border rounded p-2 w-full outline-none"
            value={min}
            aria-label="min"
            onChange={(e) =>
              setSliderInfo((prev) => ({
                ...prev,
                min: Number(e.target.value),
              }))
            }
          />
        </div>
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            Max:
          </label>
          <input
            type="text"
            className="border rounded p-2 w-full outline-none"
            value={max}
            aria-label="max"
            onChange={(e) =>
              setSliderInfo((prev) => ({
                ...prev,
                max: Number(e.target.value),
              }))
            }
          />
        </div>
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            step:
          </label>
          <input
            type="number"
            className="border rounded p-2 w-full outline-none"
            value={step}
            aria-label="max "
            onChange={(e) =>
              setSliderInfo((prev) => ({
                ...prev,
                step: Number(e.target.value),
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SliderFeature;
