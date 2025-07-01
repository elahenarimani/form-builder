import React, { useEffect, useState } from "react";
import { FormElement } from "../../../../../../types/formTypes";
type SliderFeatureProps = {
  modalElement: FormElement | null;
  setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const SliderFeature = ({
  modalElement,
  setModalElement,
}: SliderFeatureProps) => {
  // const [minSlider, setMinSlider] = useState<
  //   string | number | readonly string[] | undefined
  // >(undefined);
  // const [maxSlider, setMaxSlider] = useState<
  //   string | number | readonly string[] | undefined
  // >(undefined);
  // const [stepSlider, setStepSlider] = useState<
  //   string | number | readonly string[] | undefined
  // >(undefined);
// useEffect(()=> {
//   if (modalElement) {
//   (modalElement as any).min = undefined;
//   (modalElement as any).max = 0;
// }
// },[])
  return (
    <div className="Min-Max-Length-wrapper w-full h-[300px] flex flex-col justify-start">
      <div className="Min-Max-Length-title w-full justify-between items-start">
        <p className="mb-2 mt-2 text-sm font-medium text-gray-700 !text-left">
          Slider Features
        </p>
      </div>
      <div className="Min-Max-Length w-full h-[250px] border-[1px] border-[#d1d5db] rounded-[5px] flex flex-col  justify-start items-start gap-x-5 mb-2 p-[18px]">
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            min:
          </label>
          <input
            type="number"
            className="border rounded p-2 w-full outline-none"
            aria-label="min"
            value={(modalElement as any)?.min ?? null}
            onChange={(e) => {
              setModalElement((prv) => {
                if (prv) {
                  return {
                    ...prv,
                    min: Number(e.target.value),
                  };
                } else {
                  return null;
                }
              });
            }}
          />
        </div>
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            Max:
          </label>
          <input
            type="number"
            className="border rounded p-2 w-full outline-none"
             aria-label="max"
            value={(modalElement as any)?.max ?? null}
            onChange={(e) => {
              setModalElement((prv) => {
                if (prv) {
                  return {
                    ...prv,
                    max: Number(e.target.value),
                  };
                } else {
                  return null;
                }
              });
            }}
          />
        </div>
        <div className="w-full mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
            step:
          </label>
          <input
            type="number"
            className="border rounded p-2 w-full outline-none"
            aria-label="max "
            value={(modalElement as any)?.step ?? null}
            onChange={(e) => {
              setModalElement((prv) => {
                if (prv) {
                  return {
                    ...prv,
                    step: Number(e.target.value),
                  };
                } else {
                  return null;
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default SliderFeature;
