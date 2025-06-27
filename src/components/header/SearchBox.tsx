import  { useContext } from "react";
import AsyncSelect from "react-select/async";
import { FinalForm } from "../../types/formTypes";
import { ElementContext } from "../../pages/homePage/HomePage";
import { useNavigate } from "react-router-dom";
type SelectOption = {
  label: string;
  value: string;
};
export default function SearchBox() {
  const FormContext = useContext(ElementContext);
  const navigate = useNavigate();
  if (!FormContext?.finalForm) return null;
  const loadOptions = (inputValue: string): Promise<SelectOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = FormContext?.finalForm
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
    <div className="w-full min-h-screen fixed inset-0  bg-black bg-opacity-40 z-50 flex items-start justify-end ">
      <div className=" p-6 rounded-lg  w-[90%] max-w-md relative ">
        <AsyncSelect
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
            color: "rgba(30,58,138)",
          }),
        }}
      />
      </div>
    </div>
  );
}
