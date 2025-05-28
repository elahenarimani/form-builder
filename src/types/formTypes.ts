export type FormElementType = "input" | "select" | "range";
export interface BaseElement {
  id: string;
  type: FormElementType;
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
  type: "select";
  required?: boolean;
  options: string[];
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
  value: number;
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
