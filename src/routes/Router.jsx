import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Blogs from "../components/Blogs/Blogs";
import Profile from "../components/Profile/Profile";
import About from "../components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://test-food-server-souravbsk.vercel.app/chefs"),
      },
      {
        path: "/chefrecipe/:chefId",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://test-food-server-souravbsk.vercel.app/chefrecipe/${params?.chefId}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-account",
        element: <Profile></Profile>,
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
]);

export default router;
