export type FormElementType = "input" | "select" | "range";
export interface BaseElement {
  id: string;
  type?: FormElementType;
  x?: number;
  y?: number;
  width?: number | string;
  height?: number;
}
export type InputElement = BaseElement & {
  type: "input";
  requiredType?: boolean;
  requiredWhidth?: boolean;
  requiredHeight?: boolean;
  width?: number | string;
  height?: number | string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
};
export type SelectElement = BaseElement & {
  type?: "select";
  // required?: boolean;
  options: string[];
  requiredSelect?: boolean;
  requiredWidth?: boolean;
  requiredHeight?: boolean;
};
export type RangeElement = BaseElement & {
  type: "range";
  required?: boolean;
  min: number;
  max: number;
  // step: number;
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
  value: number;
  label: string;
};
export type OptionHeightType = {
  value: number;
  label: string;
};
export type FormType = {
  id: string;
  typeInput: string;
  widthInput: number | string;
  heightInput: number | string;
  validationInput: boolean;
  validationWidth: boolean;
  validationHeight: boolean;
  minLengthInput: number;
  maxLengthInput: number;
  // single: string;
  // multi: string;
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
export type folan = {
  selectOptions: "";
  heightInput: "";
  widthInput: "";
  validationInput: false;
  validationWidth: false;
  validationHeight: false;
};
