import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLaout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/SignUp/Register";
import About from "../Pages/About/About";
import PrivetRoute from "./PrivetRoute";
import Deshbord from "../Desbord/Deshbord";
import DeshHome from "../Desbord/Home";


const Router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/about",
          element:<PrivetRoute><About></About></PrivetRoute>
        }

      ],     
    
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    // deshbor releted
    {
      path:"deshbord",
      element:<Deshbord></Deshbord>,
      children:[
        {
          path:"home",
          element:<DeshHome></DeshHome>
        }
      ]
    
    }
])
   


export default Router;