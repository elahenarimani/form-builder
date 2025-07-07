import React from "react";
import { FormElementType, RangeElement } from "../../../../../types/formTypes";
import ReactSlider from "react-slider";
type RangePreviewProps = {
  el: RangeElement;
  setActiveType: (type: FormElementType) => void;
};
const RangePreview = ({ el, setActiveType }: RangePreviewProps) => {
  return (
    <div
      className={`w-[300px] h-[40px] rounded border pl-5 pr-5 bg-white ${
        el.requiredRange ? "border-red-500" : "border-gray-300"
      }`}
      style={{
        width: el.requiredWidth && el.width ? `${el.width}px` : "300px",
        height: el.requiredHeight && el.height ? `${el.height}px` : "auto",
        overflow: "hidden",
      }}
      onClick={() => setActiveType("range")}
    >
      <ReactSlider
        className="w-full h-[40px] horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={Number(el.min) || 0}
        max={Number(el.max) || 100}
        step={Number(el.step) || 1}
        defaultValue={[Number(el.min) || 0, Number(el.max) || 100]}
        ariaLabel={["Thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
      />
    </div>
  );
};

export default RangePreview;
