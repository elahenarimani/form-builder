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
  inputContent: string | number;
  requiredType: boolean; //will remove
  width?: number | string;
  height?: number | string;
  requiredInputContent: boolean;
  requiredMinLength: boolean;
  requiredMaxLength: boolean;
  requiredTypeInput: Boolean;
};
export type SelectElement = BaseElement & {
  type: "select";
  label?: string;
  typeSelect: string;
  // required?: boolean;
  options: string[];
  requiredSelect: boolean;
  selectMode?: "single" | "multi";
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
  finalForm: FinalForm[];
  finalFormName: string;
  element: FormElement[];
  setFinalForm: (forms: FinalForm[]) => void;
  log: () => void;
};
