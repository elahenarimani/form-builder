import { createBrowserRouter } from "react-router-dom";
import FormList from "../pages/formTable/FormsTable";
import HomePage from "../pages/homePage/HomePage";


const router = createBrowserRouter([
   {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/formList",
    element: <FormList />,
  },
  
]);
export default router;
