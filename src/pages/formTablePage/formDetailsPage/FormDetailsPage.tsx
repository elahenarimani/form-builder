// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useCombinedStore } from '../../../zustand/useCombinedStore';

// const FormDetailsPage = () => {
//   const { finalForm } = useCombinedStore();
//   const { id } = useParams();

//   const form = finalForm.find((f) => f.id === id);

//   if (!form) {
//     return <p className="text-center mt-10 text-red-500">فرم پیدا نشد</p>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-[#1ABC9C] mb-8">
//           {form.name}
//         </h1>

//         <form className="space-y-6">
//           {form.elements.map((element) => {
//             // const label = element.label || "بدون عنوان";

//             switch (element.type) {
//               case 'input':
//                 return (
//                   <div key={element.id} className="flex flex-col space-y-2">
//                     {/* <label className="text-sm font-semibold text-gray-700">{label}</label> */}
//                     <input
//                       type={element.typeInput}
//                       placeholder={element.placeholder}
//                       minLength={element.minLength}
//                       maxLength={element.maxLength}
//                       className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]"
//                     />
//                   </div>
//                 );

//               case 'select':
//                 return (
//                   <div key={element.id} className="flex flex-col space-y-2">
//                     {/* <label className="text-sm font-semibold text-gray-700">{label}</label> */}
//                     <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]">
//                       {element.options.map((opt, idx) => (
//                         <option key={idx} value={opt}>
//                           {opt}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 );

//               case 'range':
//                 return (
//                   <div key={element.id} className="flex flex-col space-y-2">
//                     {/* <label className="text-sm font-semibold text-gray-700">{label}</label> */}
//                     <input
//                       type="range"
//                       min={element.min}
//                       max={element.max}
//                       step={element.step}
//                       className="w-full accent-[#1ABC9C]"
//                     />
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span>Min: {element.min}</span>
//                       <span>Max: {element.max}</span>
//                       <span>Step: {element.step}</span>
//                     </div>
//                   </div>
//                 );

//               default:
//                 return null;
//             }
//           })}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormDetailsPage;

import React from "react";
import { useParams } from "react-router-dom";
import { useCombinedStore } from "../../../zustand/useCombinedStore";

const FormDetailsPage = () => {
  const { finalForm } = useCombinedStore();
  const { id } = useParams();

  const form = finalForm.find((f) => f.id === id);

  if (!form) {
    return <p className="text-center mt-10 text-red-500">Form not found</p>;
  }
  const containerBaseHeight = 600; // ارتفاع مرجع برای تبدیل درصد به پیکسل

  const maxHeight = form.elements.reduce((max, el) => {
    let height = 0;
    if (typeof el.height === "number") {
      height = el.height;
    } else if (typeof el.height === "string" && el.height.endsWith("%")) {
      const perc = parseFloat(el.height);
      if (!isNaN(perc)) {
        height = (perc / 100) * containerBaseHeight;
      }
    }

    return Math.max(max + height);
  }, 0);
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-[#1ABC9C] mb-8">
          {form.name}
        </h1>

        <div
          className="
        
         w-full  border border-dashed border-gray-300 rounded-xl bg-gray-100 flex flex-col justify-between items-start p-[18px]"
          style={{ minHeight: maxHeight + 50 }}
        >
          {form.elements.map((element) => {
            const style = {
              // position: "absolute" as const,
              // left: typeof element.x === "number" ? element.x : 0,
              // top: typeof element.y === "number" ? element.y : 0,
              width:
                typeof element.width === "number"
                  ? `${element.width}px`
                  : element.width,
              height:
                typeof element.height === "number"
                  ? `${element.height}px`
                  : element.height,
            };

            const label = element.label || "Untitled Form";

            switch (element.type) {
              case "input":
                return (
                  <div key={element.id} style={style}>
                    <label className="block text-sm text-gray-700 mb-1">
                      {label}
                    </label>
                    <input
                      type={element.typeInput}
                      placeholder={element.placeholder}
                      minLength={
                        typeof element.minLength === "number"
                          ? element.minLength
                          : typeof element.minLength === "string"
                          ? parseInt(element.minLength)
                          : undefined
                      }
                      maxLength={
                        typeof element.maxLength === "number"
                          ? element.maxLength
                          : typeof element.maxLength === "string"
                          ? parseInt(element.maxLength)
                          : undefined
                      }
                      className="w-full h-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]"
                    />
                  </div>
                );
              case "select":
                return (
                  <div key={element.id} style={style}>
                    <label className="block text-sm text-gray-700 mb-1">
                      {label}
                    </label>
                    <select className="w-full h-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]">
                      {element.options.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              case "range":
                return (
                  <div key={element.id} style={style}>
                    <label className="block text-sm text-gray-700 mb-1">
                      {label}
                    </label>
                    <input
                      type="range"
                      min={element.min}
                      max={element.max}
                      step={element.step}
                      className="w-full accent-[#1ABC9C]"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Min: {element.min}</span>
                      <span>Max: {element.max}</span>
                      <span>Step: {element.step}</span>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FormDetailsPage;
