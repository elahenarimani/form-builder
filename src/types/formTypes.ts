
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
  required?: boolean;
   width?: number | string;
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
};
export type FormElement = InputElement | SelectElement | RangeElement;
// export interface Position {
//   x: number;
//   y: number;
// }
// export interface Size {
//   width: number;
//   height: number;
// }

export interface Validation {
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;   // برای اسلایدر
}
export interface FormElementBase {
  id: string;
  type: FormElementType;
  // position: Position;  // موقعیت دقیق المان در صفحه (مثلاً پیکسل یا درصد)
  // size: Size;          // طول و عرض المان (مثلاً پیکسل یا درصد)
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
export type OptionHeightType= {
  value: number;
  label: string;
};