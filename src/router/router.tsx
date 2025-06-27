import { createBrowserRouter } from "react-router-dom";
import FormList from "../pages/formTablePage/FormsTablePage";
import HomePage from "../pages/homePage/HomePage";
import FormDetailsPage from "../pages/formTablePage/formDetailsPage/FormDetailsPage";


const router = createBrowserRouter([
   {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/formList",
    element: <FormList />,
      children: [
      {
        path: "/formList/:id",
        element: <FormDetailsPage />,
      },
    ],
  },
  
]);
export default router;
