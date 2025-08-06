import { createBrowserRouter } from "react-router-dom";

import FormList from "../pages/formTablePage/FormsTablePage";
import HomePage from "../pages/homePage/HomePage";
import FormDetailsPage from "../pages/formTablePage/formDetailsPage/FormDetailsPage";
import ViewJson from "../pages/viewJsonPage/ViewJson";
import LogIn from "../pages/logInPage/LogIn";
import SignUp from "../pages/signUpPage/SignUp";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogIn/>,
  },
  {
    path:"/register",
    element:<SignUp/>
  },
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
        path: ":id",
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
