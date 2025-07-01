import React from "react";
type IInputProp = {
  valueState: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  ariaLabel:string;
  type?:string
};
const Input = ({
  valueState,
  onChangeHandler,
  placeholder,
  className,
  ariaLabel,
  type
}: IInputProp) => {
  return (
    <div>
      <input
        value={valueState}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={className}
        aria-label={ariaLabel}
        type={type}
      />
      
    </div>
  );
};

export default Input;
