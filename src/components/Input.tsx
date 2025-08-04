import React from "react";

type IInputProp = {
  valueState?: string ;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
  type?: string;
  minLength?: number ;
  maxLength?: number ;
  style?:{
    width:string,
    height:string
  };
  onClick?:()=>void

};
const Input = ({
  valueState,
  onChangeHandler,
  placeholder,
  className,
  ariaLabel,
  type,
  minLength,
  maxLength,
  style,
  onClick,
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
        minLength={minLength}
        maxLength={maxLength}
        style={style}
        onClick={onClick}
      />
    </div>
  );
};

export default Input;
