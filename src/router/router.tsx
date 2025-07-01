import { createBrowserRouter } from "react-router-dom";
import FormList from "../pages/formTablePage/FormsTablePage";
import HomePage from "../pages/homePage/HomePage";
import FormDetailsPage from "../pages/formTablePage/formDetailsPage/FormDetailsPage";
import ViewJson from "../pages/viewJson/ViewJson";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/formList",
    element: <FormList />,
    
  },
{
    path: "/formList/form",
    children: [
      {
        path: "/formList/form/:id",
        element: <FormDetailsPage />,
      },
    ],
  },


  {
    path: "/view-json",
    element: <ViewJson />,
  },
]);
export default router;
