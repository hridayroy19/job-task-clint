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
import Contact from "../Pages/contact/Contact";
import DragDrop from "../Desbord/DragDrop";
// import DragDrop from "../Desbord/DeagDrop";
// import Update from "../Desbord/Update";
// import Update from "../Desbord/Update";
import IconBox from '../../public/test (1).png'
import UpdateTask from "../Desbord/UpdateTask";
import ErrorPage from "../Pages/Errorpage/Error";

const TASKS = [
  {
    id: 1,
    status: "New Order",
    image: IconBox,
    time: "8 hrs",
    days: "5 days left"
  },
  {
    id: 2,
    status: "In Progress",
    image: IconBox,
    time: "6 hrs",
    days: "6 days left",
    done: false
  },
  {
    id: 3,
    status: "Completed",
    image: IconBox,
    time: "13 hrs",
    days: "4 days left"
  },
  {
    id: 4,
    status: "New Order",
    image: IconBox,
    time: "22 hrs",
    days: "2 days left",
    done: true
  },
  {
    id: 5,
    status: "In Progress",
    image: IconBox,
    time: "2 hrs",
    days: "1 day left",
    newOrder: true,
    done: false
  },
  {
    id: 6,
    status: "Completed",
    image: IconBox,
    time: "20 hrs",
    days: "11 days left",
    done: true
  },
  {
    id: 5,
    status: "Delivered",
    image: IconBox,
    time: "2 hrs",
    days: "1 day left",
    done: false
  }
];

const Router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/about",
          element:<PrivetRouter><About></About></PrivetRouter>
        },
        {

          path:"/contact",
          element:<Contact></Contact>
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
        },
        {
             path:"previous/updateTask/:id",
             element:<UpdateTask></UpdateTask>,
             loader:({params})=> fetch(`http://localhost:5000/crateTask/${params.id}`)
        },
        {
          path:"update",
          element:<DragDrop tasks={TASKS}></DragDrop>
        },
       
      ]
    
    }
])
   


export default Router;