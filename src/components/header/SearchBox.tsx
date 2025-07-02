import AsyncSelect from "react-select/async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCombinedStore } from "../../zustand/useCombinedStore";
import { FinalForm } from "../../types/formTypes";
type SelectOption = {
  label: string;
  value: string;
};
type ISearchProp = {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function SearchBox({
  isSearchOpen,
  setIsSearchOpen,
}: ISearchProp) {
  const { finalForm } = useCombinedStore();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  ); //true
  if (!finalForm) return null;
  const loadOptions = (inputValue: string): Promise<SelectOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered: SelectOption[] = finalForm
          .filter((form: FinalForm) =>
            form.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((form) => ({
            label: form.name,
            value: form.id,
          }));
        resolve(filtered);
      }, 300);
    });
  };
  const handleChange = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      const formId = finalForm.find(
        (form) => form.id === selectedOption.value
      )?.id;
      navigate(`/formList/${formId}`);
      setSelectedOption(null); //
    }
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-40 z-50 flex items-start justify-start pt-0"
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        className="  w-[90%] md:w-[426px] relative   border border-gray-300 rounded-lg  outline-none mt-[5px] ml-[18px]"
        onClick={(e) => e.stopPropagation()}
      >
        <AsyncSelect
          autoFocus
          cacheOptions
          defaultOptions
          loadOptions={loadOptions}
          placeholder="Search form name..."
          value={selectedOption}
          onChange={(option) => {
            setSelectedOption(option);
            handleChange(option);
          }}
          styles={{
            input: (base) => ({
              ...base,
              direction: "ltr",
              color: "black",
            }),
            placeholder: (base) => ({
              ...base,
              color: "gray",
            }),
            control: (base) => ({
              ...base,
              border: 0,
              boxShadow: "none",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "white",
              color: "white",
            }),
            option: (base, { isFocused, isSelected }) => ({
              ...base,
              backgroundColor: isSelected
                ? "#169e88"
                : isFocused
                ? "#1ABC9C"
                : "transparent",
              color: "black",
              cursor: "pointer",
            }),
            singleValue: (base) => ({
              ...base,
              color: "black",
            }),
          }}
        />
      </div>
    </div>
  );
}
