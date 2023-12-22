import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLaout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/SignUp/Register";
import About from "../Pages/About/About";
import PrivetRoute from "./PrivetRoute";
import Deshbord from "../Desbord/Deshbord";
import DeshHome from "../Desbord/Home";
import CreateTask from "../Desbord/CreateTask";
import Previous from "../Desbord/Previous";
import PrivetRouter from "./PrivetRoute";


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
          element:<PrivetRouter><About></About></PrivetRouter>
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
      element:<PrivetRoute><Deshbord></Deshbord></PrivetRoute>,
      children:[
        {
          path:"home",
          element:<DeshHome></DeshHome>
        },
        {
          path:"create",
          element:<CreateTask></CreateTask>
        },
        {
          path:"previous",
          element:<Previous></Previous>,
          loader:()=>fetch("http://localhost:5000/crateTask")
        }
      ]
    
    }
])
   


export default Router;