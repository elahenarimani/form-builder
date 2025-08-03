import { createBrowserRouter } from "react-router-dom";
import FormList from "../pages/formTablePage/FormsTablePage";
import HomePage from "../pages/homePage/HomePage";
import FormDetailsPage from "../pages/formTablePage/formDetailsPage/FormDetailsPage";
import ViewJson from "../pages/viewJson/ViewJson";
import Test from "../pages/test/Test";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/signUp/SignUp";



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
//   {
//   path: "/formList",
//   children: [
//     {
//       index: true,
//       element: <FormList />,
//     },
//     {
//       path: "form/:id",
//       element: <FormDetailsPage />,
//     },
//   ],
// }
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
  {
    path: "/test",
    element: <Test />,
  },
]);
export default router;
