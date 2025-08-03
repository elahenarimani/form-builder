import { FormElementType, InputElement } from "../../../../../types/formTypes";
type InputPreviewProps = {
  el: InputElement;
  inputValue: { [key: string]: string };
  handleInputChange: (inputId: string, value: string) => void;
  setActiveType: (type: FormElementType) => void;
};
const InputPreview = ({
  el,
  inputValue,
  handleInputChange,
  setActiveType,
}: InputPreviewProps) => {
  return (
    <div className="input w-full h-full  ">
      <input
        type={(el as InputElement).typeInput}
        className={`p-2 w-full h-[40px] rounded text-[#9CA7C4] outline-none border 
            ${
              (el as InputElement).requiredType
                ? "border-red-500"
                : "border-gray-300"
            }`}
        aria-label="describe input"
        readOnly
        onClick={() => {
          setActiveType("input");
        }}
        value={(el as InputElement).inputContent || ""}
        onChange={(e) => handleInputChange(el.id, e.target.value)}
      />
    </div>
  );
};

export default InputPreview;
