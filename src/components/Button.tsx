import React from "react";
interface Props {
  onClickHandler?: () => void ;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
const Button = ({ onClickHandler, className, disabled, children }: Props) => {
  return (
    <div>
      <button
        onClick={() => onClickHandler?.()}
        className={`${className} ${disabled ? 'hover:opacity-50 hover:cursor-not-allowed' : ''}`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;