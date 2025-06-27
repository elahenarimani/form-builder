// // import React, { useContext, useState } from "react";
// // import Select from "react-select";
// // import {
// //   FormElement,
// //   InputElement,
// //   OptionInputType,
// // } from "../../../../types/formTypes";
// // import { ElementContext } from "../../../../App";
// // const inputTypeOptions: OptionInputType[] = [
// //   { value: "Text", label: "Text" },
// //   { value: "Number", label: "Number" },
// //   { value: "Color", label: "Color" },
// //   { value: "Radio", label: "Radio" },
// //   { value: "Checkbox", label: "Checkbox" },
// // ];
// // type InputProps = {
// //   setForminfo: React.Dispatch<React.SetStateAction<InputElement>>;
// //   typeInput: string;
// //   modalElement: FormElement | null;
// //   setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
// // };
// // const InputTypeSetting = ({ setForminfo, typeInput }: InputProps) => {
// //   const [selectedInputType, setSelectedInputType] =
// //     useState<OptionInputType | null>(null);
// //   const FormContext = useContext(ElementContext);
// //   return (
// //     <div className="w-full h-[80px] flex flex-col justify-start items-start  ">
// //       <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
// //         Type
// //       </label>
// //       <Select
// //         defaultValue={selectedInputType}
// //         onChange={(selectedInputType) => {
// //           setSelectedInputType(selectedInputType);
// //           setForminfo((prv) => ({
// //             ...prv,
// //             typeInput: selectedInputType ? selectedInputType?.label : "",
// //           }));
// //           console.log(typeInput);
// //         }}
// //         options={inputTypeOptions}
// //         isClearable
// //         placeholder=""
// //         className="w-full"
// //         menuPortalTarget={typeof window !== "undefined" ? document.body : null}
// //         styles={{
// //           container: (provided) => ({
// //             ...provided,
// //             width: "100%",
// //           }),
// //           control: (provided, state) => ({
// //             ...provided,
// //             width: "100%",
// //             border: "1px solid #d1d5db",
// //             boxShadow: "none",
// //             borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
// //             "&:hover": {
// //               borderColor: "#a1a1aa",
// //             },
// //           }),
// //           menu: (provided) => ({
// //             ...provided,
// //             width: "100%",
// //             zIndex: 99999,
// //           }),
// //           menuPortal: (base) => ({
// //             ...base,
// //             zIndex: 99999,
// //           }),
// //           option: (provided) => ({
// //             ...provided,
// //             textAlign: "left",
// //           }),
// //           singleValue: (provided) => ({
// //             ...provided,
// //             textAlign: "left",
// //           }),
// //           placeholder: (provided) => ({
// //             ...provided,
// //             textAlign: "left",
// //           }),
// //         }}
// //       />
// //     </div>
// //   );
// // };
// // export default InputTypeSetting;
// import React, { useContext, useEffect, useState } from "react";
// import Select from "react-select";
// import {
//   FormElement,
//   InputElement,
//   OptionInputType,
// } from "../../../../types/formTypes";
// import { ElementContext } from "../../../../App";
// const inputTypeOptions: OptionInputType[] = [
//   { value: "Text", label: "Text" },
//   { value: "Number", label: "Number" },
//   { value: "Color", label: "Color" },
//   { value: "Radio", label: "Radio" },
//   { value: "Checkbox", label: "Checkbox" },
// ];
// type InputProps = {
//   // setForminfo: React.Dispatch<React.SetStateAction<InputElement>>;
//   // typeInput: string;
//   modalElement: FormElement | null;
//   setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
// };
// const InputTypeSetting = ({
//   // setForminfo,
//   // typeInput,
//   modalElement,
//   setModalElement,
// }: InputProps) => {
//   const [selectedInputType, setSelectedInputType] =
//     useState<OptionInputType | null>(null);
//   const FormContext = useContext(ElementContext);
//   // console.log({ inputtypeeee: modalElement?.type });
//   useEffect(() => {
//   console.log("modalElement changed:", modalElement);
// }, [modalElement]);
//   return (
//     <div className="w-full h-[80px] flex flex-col justify-start items-start  ">
//       <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
//         Type
//       </label>
//       <Select
//         defaultValue={selectedInputType}
//         onChange={(selectedInputType) => {
//           setSelectedInputType(selectedInputType);
//           setModalElement((prv) => {
//             if (!prv) return null;
//             if (prv?.type === "input") {
//               return {
//                 ...prv,
//                 typeInput: selectedInputType ? selectedInputType.label : "",
//               };
//             } else {
//               return prv;
//             }
//             //  console.log({inputtypeeee: modalElement})
//           });
//         }}
//         options={inputTypeOptions}
//         isClearable
//         placeholder=""
//         className="w-full"
//         menuPortalTarget={typeof window !== "undefined" ? document.body : null}
//         styles={{
//           container: (provided) => ({
//             ...provided,
//             width: "100%",
//           }),
//           control: (provided, state) => ({
//             ...provided,
//             width: "100%",
//             border: "1px solid #d1d5db",
//             boxShadow: "none",
//             borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
//             "&:hover": {
//               borderColor: "#a1a1aa",
//             },
//           }),
//           menu: (provided) => ({
//             ...provided,
//             width: "100%",
//             zIndex: 99999,
//           }),
//           menuPortal: (base) => ({
//             ...base,
//             zIndex: 99999,
//           }),
//           option: (provided) => ({
//             ...provided,
//             textAlign: "left",
//           }),
//           singleValue: (provided) => ({
//             ...provided,
//             textAlign: "left",
//           }),
//           placeholder: (provided) => ({
//             ...provided,
//             textAlign: "left",
//           }),
//         }}
//       />
//     </div>
//   );
// };
// export default InputTypeSetting;
