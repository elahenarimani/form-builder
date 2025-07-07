import React from "react";
import "./rangePreview.css"
import { FormElementType, RangeElement } from "../../../../../types/formTypes";
import ReactSlider from "react-slider";
type RangePreviewProps = {
  el: RangeElement;
  setActiveType: (type: FormElementType) => void;
};
const RangePreview = ({ el, setActiveType }: RangePreviewProps) => {
  return (
    <div
    className="a w-[300px] h-full "
    //   style={{
    //     width: el.requiredWidth && el.width ? `${el.width}px` : "300px",
    //     height: el.requiredHeight && el.height ? `${el.height}px` : "auto",
    //     overflow: "hidden",
    //   }}
      onClick={() => setActiveType("range")}
    >
      <div className="px-3 bg-white border rounded border-gray-300">
        <ReactSlider
        className="horizontal-slider w-full h-[40px]"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={Number(el.min) || 0}
        max={Number(el.max) || 100}
        step={Number(el.step) || 1}
        value={[Number(el.min) || 0, Number(el.max) || 100]}
        ariaLabel={["Thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
      />
      </div>
    </div>
  );
};

export default RangePreview;
