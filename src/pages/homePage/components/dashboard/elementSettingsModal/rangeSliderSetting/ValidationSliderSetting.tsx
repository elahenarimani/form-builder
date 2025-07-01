import React from "react";
import { FormElement } from "../../../../../../types/formTypes";
type SliderProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const ValidationSliderSetting = ({
  modalElement,
  setModalElement,
}: SliderProps) => {
  // const [requiredSlider, setRequiredSlider] = useState(false);
  // const [requiredWidth, setRequiredWidth] = useState(false);
  // const [requiredHeight, setRequiredHeight] = useState(false);
  return (
    <div className="validation-wrapper w-full h-full xl:h-[150px] flex flex-col justify-between">
      <div className="validation-title w-full flex justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Validation
        </p>
      </div>
      <div className="validation w-full h-full border-[1px] border-[#d1d5db] rounded-[5px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-y-[15px] mb-2 p-[18px]">
        {" "}
        {/* <div className="flex justify-start items-center gap-[10px]">
          <label className="text-sm">Required Range</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={false}
            className="w-4 h-4 accent-[#1ABC9C] rounded-[10px]"
            checked={(modalElement as any)?.requiredRange ?? false}
            onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return { ...prv, requiredRange: e.target.checked };
              });
            }}
          />
        </div> */}
        <div className="flex justify-start items-center gap-[10px]">
          <label className="text-sm">Required Min Range</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={false}
            className="w-4 h-4 accent-[#1ABC9C] rounded-[10px]"
            checked={(modalElement as any)?.requiredMinRange ?? false}
            onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return { ...prv, requiredMinRange: e.target.checked };
              });
            }}
          />
        </div>
        <div className="flex justify-start items-center gap-[10px]">
          <label className="text-sm">Required Max Range</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={false}
            className="w-4 h-4 accent-[#1ABC9C] rounded-[10px]"
            checked={(modalElement as any)?.requiredMaxRange ?? false}
            onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return { ...prv, requiredMaxRange: e.target.checked };
              });
            }}
          />
        </div>
        <div className="flex justify-start items-center gap-[10px]">
          <label className="text-sm">Required Step</label>
          <input
            type="checkbox"
            aria-label="required or not"
            defaultChecked={false}
            className="w-4 h-4 accent-[#1ABC9C] rounded-[10px]"
            checked={(modalElement as any)?.requiredStep ?? false}
            onChange={(e) => {
              setModalElement((prv) => {
                if (!prv) return null;
                return { ...prv, requiredStep: e.target.checked };
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ValidationSliderSetting;
