import { useNavigate } from "react-router-dom"

import { IoEyeOutline } from "react-icons/io5"

import { useCombinedStore } from "../../zustand/useCombinedStore"
import Header from "../../components/header/Header"
import { useEffect } from "react"
const FormsTable = () => {
  const { finalForm, isAuthenticated, userEmail } = useCombinedStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
    }
  }, [isAuthenticated, navigate])
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full md:w-11/12 lg:w-4/5 md:ml-auto md:mr-auto h-full px-[18px] py-[18px] ">
        <h1 className="text-xl font-bold my-[18px] text-center">Forms List</h1>
        {finalForm.length === 0 ? (
          <p className="w-full h-full text-center mt-10 text-red-500">
            No form
          </p>
        ) : (
          <div className="overflow-hidden !rounded-[15px] border-4 border-white  ">
            <table className=" w-full h-full table-fixed p-2 bg-primary/50">
              <thead className="bg-primary ">
                <tr>
                  <th className="p-2 border border-gray-50 w-[10%] truncate whitespace-nowrap overflow-hidden">
                    Index
                  </th>
                  <th className="p-2 border border-gray-50  w-[50%] whitespace-normal">
                    Title
                  </th>
                  <th className="p-2 border border-gray-50  w-[20%] whitespace-normal">
                    Number of fields
                  </th>
                  <th className="p-2 border border-gray-50  w-[20%] whitespace-normal">
                    Preview
                  </th>
                </tr>
              </thead>
              <tbody>
                {finalForm
                  .filter((form) => form.owner === userEmail)
                  .map((form, index) => (
                    <tr key={form.id} className="text-center">
                      <td className="p-2 border border-gray-50 whitespace-normal">
                        {index + 1}
                      </td>
                      <td className="p-2 border border-gray-50 truncate whitespace-nowrap overflow-hidden">
                        {form.name}
                      </td>
                      <td className="p-2 border border-gray-50 whitespace-normal">
                        {form.elements.length}
                      </td>
                      <td
                        className="p-2 border border-gray-50 whitespace-normal flex justify-center items-center w-full h-full cursor-pointer"
                        onClick={() => navigate(`/formList/form/${form.id}`)}
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
  )
}
export default FormsTable
