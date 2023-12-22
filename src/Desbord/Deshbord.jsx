import { useContext, useState } from "react";
import { IoHome } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
const Deshbord = () => {
  const [open, setOpen] = useState(false);

const {  user} = useContext(AuthContext)
console.log(user);
  return (
    <div className="  flex">
      <div
        className={`${
          open ? "w-72" : "w-24"
        } duration-300  h-screen  p-5 pt-8 bg-gray-500 relative `}
      >
        <img
          src="https://i.ibb.co/9TJnwCz/control.png"
          alt="logo"
          className=" absolute cursor-pointer -right-3 top-9 w-7 rounded-full border-2 border-b-green-600"
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src={user?.photoURL}
            alt=""
            className={` cursor-pointer rounded-[50%] w-16 duration-500 `}
          />

          <h1
            className={` text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            } `}
          >
               {
          user ? <>
          <span>{user?.displayName}</span>  </> :
          
          <><li> profile </li></>
        }
          </h1>
        </div>
        <ul className=" pt-6">
          <li className="flex mt-4 ml-5  gap-x-4 items-center">
            <h1 className={` cursor-pointer duration-500 `}>
              <IoHome />
            </h1>

            <h1
              className={` text-white origin-left  font-medium text-xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              <Link to={"/"}> Home</Link>{" "}
            </h1>
          </li>

          <li className="flex mt-4 ml-5  gap-x-4 items-center">
            <h1 className={` cursor-pointer duration-500 `}>
              <IoHome />
            </h1>

            <h1
              className={` text-white origin-left  font-medium text-xl duration-300 ${
                !open && "scale-0"} `}
            >

              <Link to={"create"}>create new tasks </Link>
            </h1>
          </li>

          <li className="flex mt-4 ml-5  gap-x-4 items-center">
            <h1 className={` cursor-pointer duration-500 `}>
              <IoHome />
            </h1>

            <h1
              className={` text-white origin-left  font-medium text-xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              <Link to={"previous"}> Previous tasks</Link>
            </h1>
          </li>
        </ul>
      </div>
      <div className=" p-7 bg-slate-200 w-full mx-auto text-2xl font-semibold ">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Deshbord;
