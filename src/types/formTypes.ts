import { error } from "console";

export type FormElementType = "input" | "select" | "range";
export interface BaseElement {
  id: string;
  type: FormElementType;
  x?: number;
  y?: number;
  width: number | string;
  height: number | string;
  requiredWidth: boolean; //will remove
  requiredHeight: boolean; //will remove
}
export type InputElement = BaseElement & {
  type: "input";
  label?: string;
  typeInput: string;
  placeholder?: string;
  minLength: number | string | null;
  maxLength: number | string | null;
  requiredType: boolean; //will remove
  width?: number | string;
  height?: number | string;
  requiredField: boolean;
  requiredMinLength: boolean;
  requiredMaxLength: boolean;
  requiredTypeInput: Boolean;
  // const [requiredFeild, setRequiredFeild] = useState(false);
  //   const [requiredMinLength, setRequiredMinLength] = useState(false);
  //   const [requiredMaxLength, setRequiredMaxLength] = useState(false);
  //   const [requiredTypeInput, setRequiredTypeInput] = useState(false);

  //  type: "input";
  // label?: string;
  // typeInput: string;
  // placeholder?: string;
  // minLength: number;
  // maxLength: number;
  // requiredType: boolean;
};
export type SelectElement = BaseElement & {
  type: "select";
  label?: string;
  typeSelect: string;
  // required?: boolean;
  options: string[];
  requiredSelect: boolean;

  //  type: "select";
  // label?: string;
  // options: string[];
  // requiredSelect: boolean;
  // multiple?: boolean;
};
export type RangeElement = BaseElement & {
  type: "range";
  label?: string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  requiredRange: boolean;
  requiredMinRange: boolean;
  requiredMaxRange: boolean;
  requiredStep: boolean;

  // type: "range";
  //   label?: string;
  //   min: number | string;
  //   max: number | string;
  //   step: number | string;
  //   requiredRange: boolean;
};
export type FormElement = InputElement | SelectElement | RangeElement;
export interface Validation {
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
}
export interface FormElementBase {
  id: string;
  type: FormElementType;
  label?: string;
  required?: boolean;
}

export type OptionInputType = {
  value: string;
  label: string;
};
export type OptionWidthType = {
  value: string;
  label: string;
};
export type OptionHeightType = {
  value: string;
  label: string;
};
export type OpenModal = {
  openInputSetting: boolean;
  openSelectSetting: boolean;
  openRangeSetting: boolean;
};
export type SelectEtting = {
  value: string;
  label: string;
};
export type FinalForm = {
  id: string;
  name: string;
  elements: FormElement[];
};

export type FormState = {
  // elements: FormElement[];
  finalForm: FinalForm[];
  finalFormName: string;
  element: FormElement[];
  // setElements: (els: FormElement[]) => void;
  // addFinalForm: (form: FinalForm) => void;
  setFinalForm: (forms: FinalForm[]) => void;
  // num: number;
  // increaseCounterNumber : ()=>void
  log: () => void;
};
// export type errorsType = {
//   requiredField?: boolean;
//   requiredMinLength: boolean;
//   requiredMaxLength: boolean;
//   requiredTypeInput: boolean;
//   requiredRange: boolean;
//   requiredMinRange: boolean;
//   requiredMaxRange: boolean;
//   requiredStep: boolean;
//   requiredSelect: boolean;

// if (modalElement?.type === "input") {
//   if (!modalElement?.requiredField) {

//   }
//   if (!modalElement?.requiredMinLength) {
//   }
//   if (!modalElement.requiredMaxLength) {
//   }
//   if (!modalElement?.requiredTypeInput) {
//   }
// } else if (modalElement?.type === "range") {
//   if (!modalElement?.requiredRange) {
//   }
//   if (!modalElement?.requiredMinRange) {
//   }
//   if (!modalElement?.requiredMaxRange) {
//   }
//   if (!modalElement?.requiredStep) {
//   }
// } else if (modalElement?.type === "select") {
//   if (!modalElement?.requiredSelect) {
//   }
// }
// };
