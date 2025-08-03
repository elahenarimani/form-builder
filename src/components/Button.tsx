import React from "react";
interface Props {
  onClickHandler?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  type?:"submit";
}
const Button = ({ onClickHandler, className, disabled, children,type}: Props) => {
  return (
    <div>
      <button
        onClick={() => onClickHandler?.()}
        className={`${className} ${
          disabled ? "hover:opacity-50 hover:cursor-not-allowed" : ""
        }`}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
