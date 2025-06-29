import AsyncSelect from "react-select/async";
import { FinalForm } from "../../types/formTypes";
import { useNavigate } from "react-router-dom";
import { useCombinedStore } from "../../zustand/useCombinedStore";
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
  if (!finalForm) return null;
  const loadOptions = (inputValue: string): Promise<SelectOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = finalForm
          .filter((form: FinalForm) =>
            form.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((form: FinalForm) => ({
            label: form.name,
            value: form.id,
          }));
        resolve(filtered || []);
      }, 300);
    });
  };
  const handleChange = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      navigate(`/formList/${selectedOption.value}`);
    }
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-1/2 bg-black bg-opacity-40 z-50 flex items-start justify-start pt-0"
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
          placeholder="Enter your form name..."
          onChange={handleChange}
          styles={{
            input: (base) => ({
              ...base,
              direction: "ltr",
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
          }}
        />
      </div>
    </div>
  );
}
