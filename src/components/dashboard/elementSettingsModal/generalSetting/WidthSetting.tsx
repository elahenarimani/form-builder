// import React, { useContext, useState } from "react";
// import Select from "react-select";
// import {
//   FormElement,
//   InputElement,
//   OptionWidthType,
//   RangeElement,
//   SelectElement,
// } from "../../../../types/formTypes";
// import { ElementContext } from "../../../../App";
// const inputWidthOptions: OptionWidthType[] = [
//   { value: "50%", label: "50%" },
//   { value: "60%", label: "60%" },
//   { value: "70%", label: "70%" },
//   { value: "80%", label: "80%" },
//   { value: "90%", label: "90%" },
// ];
// type InputProps = {
//   setForminfo?: React.Dispatch<React.SetStateAction<InputElement>>;
//   setSelectInfo?: React.Dispatch<React.SetStateAction<SelectElement>>;
//   setSliderInfo?: React.Dispatch<React.SetStateAction<RangeElement>>;
//   width: string | number;
//   forminfo?: InputElement;
//   selectInfo?: SelectElement;
//   sliderInfo?: RangeElement;
//   modalElement: FormElement | null;
//       setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
// };
// const WidthSetting = ({
//   setForminfo,
//   setSelectInfo,
//   setSliderInfo,
//   width,
//   forminfo,
//   selectInfo,
//   sliderInfo,
// }: InputProps) => {
//   const [selectedWidth, setSelectedWidth] = useState<OptionWidthType | null>(
//     null
//   );
//   const FormContext = useContext(ElementContext);
//   return (
//     <div className="w-full h-[80px] flex flex-col justify-start items-start">
//       <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
//         Width
//       </label>
//       <Select
//         defaultValue={selectedWidth}
//         onChange={(selectedWidth) => {
//           setSelectedWidth(selectedWidth);
//           const width = selectedWidth ? selectedWidth.label : "";
//           const type = forminfo?.type || selectInfo?.type || sliderInfo?.type;
//           switch (type) {
//             case "input":
//               setForminfo?.((prev) => ({ ...prev, width }));
//               break;
//             case "select":
//               setSelectInfo?.((prev) => ({ ...prev, width }));
//               break;
//             case "range":
//               setSliderInfo?.((prev) => ({ ...prev, width }));
//               break;
//             default:
//               break;
//           }
//         }}
//         options={inputWidthOptions}
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
// export default WidthSetting;
import React, { useContext, useState } from "react";
import Select from "react-select";
import {
  FormElement,
  InputElement,
  OptionWidthType,
  RangeElement,
  SelectElement,
} from "../../../../types/formTypes";
import { ElementContext } from "../../../../App";
const inputWidthOptions: OptionWidthType[] = [
  { value: "50%", label: "50%" },
  { value: "60%", label: "60%" },
  { value: "70%", label: "70%" },
  { value: "80%", label: "80%" },
  { value: "90%", label: "90%" },
];
type InputProps = {
  setForminfo?: React.Dispatch<React.SetStateAction<InputElement>>;
  setSelectInfo?: React.Dispatch<React.SetStateAction<SelectElement>>;
  setSliderInfo?: React.Dispatch<React.SetStateAction<RangeElement>>;
  width: string | number;
  forminfo?: InputElement;
  selectInfo?: SelectElement;
  sliderInfo?: RangeElement;
  modalElement: FormElement | null;
      setModalElement: React.Dispatch<React.SetStateAction<FormElement | null>>;
};
const WidthSetting = ({
  setForminfo,
  setSelectInfo,
  setSliderInfo,
  width,
  forminfo,
  selectInfo,
  sliderInfo,
  modalElement,
  setModalElement,
}: InputProps) => {
  const [selectedWidth, setSelectedWidth] = useState<OptionWidthType | null>(
    null
  );
  const FormContext = useContext(ElementContext);
  return (
    <div className="w-full h-[80px] flex flex-col justify-start items-start">
      <label className="block mb-1 mt-1 text-sm font-medium text-gray-700 text-left">
        Width
      </label>
      <Select
        defaultValue={selectedWidth}
        onChange={(selectedWidth) => {
          setSelectedWidth(selectedWidth);
          const width = selectedWidth ? selectedWidth.label : "";
          const type = modalElement?.type;
          switch (type) {
            case "input":
              setModalElement?.((prev) => {
                if (!prev) return prev;
                return { ...prev, width };
              });
              break;
            case "select":
              setModalElement?.((prev) => {
                if (!prev) return prev;
                return { ...prev, width };
              });
              break;
            case "range":
              setModalElement?.((prev) => {
                if (!prev) return prev;
                return { ...prev, width };
              });
              break;
            default:
              break;
          }
        }}
        // onChange={(selectedWidth) => {
        //   setSelectedWidth(selectedWidth);
        //   const width = selectedWidth ? selectedWidth.label : "";
        //   const type = forminfo?.type || selectInfo?.type || sliderInfo?.type;
        //   switch (type) {
        //     case "input":
        //       setForminfo?.((prev) => ({ ...prev, width }));
        //       break;
        //     case "select":
        //       setSelectInfo?.((prev) => ({ ...prev, width }));
        //       break;
        //     case "range":
        //       setSliderInfo?.((prev) => ({ ...prev, width }));
        //       break;
        //     default:
        //       break;
        //   }
        // }}
        options={inputWidthOptions}
        isClearable
        placeholder=""
        className="w-full"
        menuPortalTarget={typeof window !== "undefined" ? document.body : null}
        styles={{
          container: (provided) => ({
            ...provided,
            width: "100%",
          }),
          control: (provided, state) => ({
            ...provided,
            width: "100%",
            border: "1px solid #d1d5db",
            boxShadow: "none",
            borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
            "&:hover": {
              borderColor: "#a1a1aa",
            },
          }),
          menu: (provided) => ({
            ...provided,
            width: "100%",
            zIndex: 99999,
          }),
          menuPortal: (base) => ({
            ...base,
            zIndex: 99999,
          }),
          option: (provided) => ({
            ...provided,
            textAlign: "left",
          }),
          singleValue: (provided) => ({
            ...provided,
            textAlign: "left",
          }),
          placeholder: (provided) => ({
            ...provided,
            textAlign: "left",
          }),
        }}
      />
    </div>
  );
};
export default WidthSetting;
