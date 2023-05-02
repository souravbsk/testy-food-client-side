import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import Loading from "../components/Loading/Loading";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch("https://test-food-server-souravbsk.vercel.app/chefs")
      },
      {
        path:"/chefrecipe/:chefId",
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://test-food-server-souravbsk.vercel.app/chefrecipe/${params?.chefId}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/loading",
        element:<Loading></Loading>
      }
    ]
  },
]);


export default router