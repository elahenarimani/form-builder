import React, { useContext, useEffect } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ElementContext } from "../homePage/HomePage";
import Header from "../../components/header/Header";
import { useCombinedStore } from "../../zustand/useCombinedStore";

const FormsTable = () => {
  const { finalForm, setFinalForm, log, finalFormName, element} = useCombinedStore();
  const FormContext = useContext(ElementContext);
  // useEffect(() => {
  //   const saved = localStorage.getItem("saved-forms");
  //   console.log(saved);
  //   if (saved) {
  //     console.log(FormContext?.finalForm);
  //     const result = !!JSON.parse(saved);
  //     console.log(result);
  //     console.log(FormContext?.finalForm);
  //     const final = FormContext?.setFinalForm(
  //       !!JSON.parse(saved) ? JSON.parse(saved) : []
  //     );
  //     console.log(FormContext?.finalForm);
  //     console.log(final);
  //   }
  // }, []);
  const navigate = useNavigate();

  //     const [finalFormm , setFinalForm] = useState<FinalForm[] >([{
  //     id:"12",
  //     name:"salam",
  //     elements :FormContext?.elements ||[],
  //   },
  //   {
  //     id:"13",
  //     name:"bye",
  //     elements :FormContext?.elements || [],
  //   }

  // ])
  // useEffect(() => {
  //   console.log({ finalform: FormContext?.finalForm });
  // }, [FormContext?.finalForm]);
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full md:w-11/12 lg:w-4/5 md:ml-auto md:mr-auto h-full px-[18px] py-[18px] ">
        <h1 className="text-xl font-bold my-[18px] text-center">Forms List</h1>
        {finalForm.length === 0 ? (
          <p>No form</p>
        ) : (
          <div className="overflow-hidden rounded-[5px] border border-[#444444]">
            <table className=" w-full h-full table-fixed py-[20px] px-[15px] bg-gray-50">
              <thead className="bg-gray-200">
                <tr>
                  <th className=" border w-[10%] truncate whitespace-nowrap overflow-hidden">
                    Index
                  </th>
                  <th className=" border w-[50%] whitespace-normal">Title</th>
                  <th className=" border w-[20%] whitespace-normal">
                    Number of fields
                  </th>
                  <th className=" border w-[20%] whitespace-normal">Preview</th>
                </tr>
              </thead>
              <tbody>
                {finalForm.map((form, index) => (
                  <tr key={form.id} className="text-center">
                    <td className="p-2 border whitespace-normal">
                      {index + 1}
                    </td>
                    <td className="p-2 border truncate whitespace-nowrap overflow-hidden">
                      {form.name}
                    </td>
                    <td className="p-2 border whitespace-normal">
                      {form.elements.length}
                    </td>
                    <td
                      className="p-2 border whitespace-normal flex justify-center items-center w-full h-full cursor-pointer"
                      onClick={() => navigate(`/formList/${form.id}`)}
                    >
                      <IoEyeOutline />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default FormsTable;
