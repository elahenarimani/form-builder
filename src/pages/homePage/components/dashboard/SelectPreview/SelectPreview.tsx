// import React from "react";
// import Select from "react-select";

// import { FormElementType, SelectElement } from "../../../../../types/formTypes";
// type Props = {
//   el: SelectElement;
//   setActiveType: React.Dispatch<React.SetStateAction<FormElementType>>;
// };
// const SelectPreview = ({ el, setActiveType }: Props) => {
//   const options = el.options.map((opt) => ({
//     value: opt,
//     label: opt,
//   }));
//   const isMulti = el.selectMode === "multi";
//   return (
//     <div onClick={() => setActiveType("select")} className="select w-full">
//       <Select
//         isMulti={isMulti}
//         options={options}
//         placeholder={
//           isMulti ? "Select multiple options..." : "Select an option..."
//         }
//         classNamePrefix="react-select"
//         className="w-full"
//         isDisabled={options.length === 0}
//         styles={{
//           control: (provided, state) => ({
//             ...provided,
//             borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
//             boxShadow: "none",
//             "&:hover": {
//               borderColor: "#d1d5db",
//             },
//           }),
//           menu: (provided) => ({
//             ...provided,
//             zIndex: 9999,
//           }),
//           menuPortal: (base) => ({
//             ...base,
//             zIndex: 9999,
//           }),
//           option: (provided, state) => ({
//             ...provided,
//             backgroundColor:
//               state.isFocused || state.isSelected
//                 ? "rgba(26, 188, 156, 0.5)"
//                 : "white",
//             color: "black",
//             cursor: "pointer",
//           }),
//         }}
//       />
//     </div>
//   );
// };
// export default SelectPreview;
import React from "react"
import { FormElementType, SelectElement } from "../../../../../types/formTypes"
import SingleSelect from "./SingleSelect"
import MultiSelect from "./MultiSelect"
type Props = {
  el: SelectElement
  setActiveType: React.Dispatch<React.SetStateAction<FormElementType>>
}
const SelectPreview = ({ el, setActiveType }: Props) => {
  if (!el.selectMode) {
    return (
      <div className="w-full h-full bg-white">
        <p className="p-2 w-full h-[87px] 2xl:h-[40px] rounded text-[#9CA7C4] outline-none border border-gray-300 ">"Please select the select type (single or multiple) from the settings."</p>
      </div>
    )
  }
  return (
    <div>
      {el.selectMode === "multi" ? (
        <MultiSelect el={el} setActiveType={setActiveType} />
      ) : (
        <SingleSelect el={el} setActiveType={setActiveType} />
      )}
    </div>
  )
}

export default SelectPreview
