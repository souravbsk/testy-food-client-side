import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefDetails from "../components/ChefDetails/ChefDetails";

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
        element:<ChefDetails></ChefDetails>,
        loader:({params}) => fetch(`https://test-food-server-souravbsk.vercel.app/chefrecipe/${params?.chefId}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);


export default router