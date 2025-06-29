export type FormElementType = "input" | "select" | "range";
export interface BaseElement {
  id: string;
  type: FormElementType;
  x?: number;
  y?: number;
  width: number | string;
  height: number | string;
  requiredWidth: boolean;
  requiredHeight: boolean;
}
export type InputElement = BaseElement & {
  type: "input";
  requiredType: boolean;
  width?: number | string;
  height?: number | string;
  minLength: number;
  maxLength: number;
  placeholder?: string;
  typeInput: string;
};
export type SelectElement = BaseElement & {
  type?: "select";
  // required?: boolean;
  options: string[];
  requiredSelect: boolean;
};
export type RangeElement = BaseElement & {
  type: "range";
  requiredRange: boolean;
  min: number | string;
  max: number | string;
  step: number | string;
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
// export type FormType = {
//   id: string;
//   typeInput: string;
//   width: number | string;
//   heightInput: number | string;
//   validationInput: boolean;
//   validationWidth: boolean;
//   validationHeight: boolean;
//   minLengthInput: number;
//   maxLengthInput: number;
//   // single: string;
//   // multi: string;
// };
export type OpenModal = {
  openInputSetting: boolean;
  openSelectSetting: boolean;
  openRangeSetting: boolean;
};
export type SelectEtting = {
  value: string;
  label: string;
};
export type FinalForm ={
  id:string;
  name:string;
  elements:FormElement[]
}

export type FormState ={
  // elements: FormElement[];
  finalForm: FinalForm[];
  finalFormName:string;
  element:FormElement[]
  // setElements: (els: FormElement[]) => void;
  // addFinalForm: (form: FinalForm) => void;
  setFinalForm: (forms: FinalForm[]) => void;
  // num: number;
  // increaseCounterNumber : ()=>void
  log:()=>void
}
