import { createBrowserRouter } from "react-router-dom";
import FormList from "../pages/formTablePage/FormsTablePage";
import HomePage from "../pages/homePage/HomePage";
import FormDetailsPage from "../pages/formTablePage/formDetailsPage/FormDetailsPage";
import ViewJson from "../pages/viewJson/ViewJson";
import Test from "../pages/test/Test";

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
  {
    path: "/test",
    element: <Test />,
  },
]);
export default router;
