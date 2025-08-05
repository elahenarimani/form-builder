import ReactSlider from "react-slider"

import { FormElementType, RangeElement } from "../../../../../types/formTypes"
import { useState } from "react"
type RangePreviewProps = {
  el: RangeElement
  setActiveType: (type: FormElementType) => void
}
const RangePreview = ({ el, setActiveType }: RangePreviewProps) => {
  const min = el.min ? +el.min : 0
  const max = el.max ? +el.max : 100
  const step = el.step ? +el.step : 5
    const [value, setValue] = useState<[number, number]>([min, max])
  return (
    <div
      className="range-slider w-full h-full "
      onClick={() => setActiveType("range")}
    >
      <div className="px-3 bg-white border rounded border-gray-300">
        <ReactSlider
          className="horizontal-slider w-full h-[40px]"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(val) => setValue(val as [number, number])}
          ariaLabel={["Thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
        />
      </div>
    </div>
  )
}
export default RangePreview
