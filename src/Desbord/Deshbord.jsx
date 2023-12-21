import { useState } from "react";
import { IoHome } from "react-icons/io5";
const Deshbord = () => {

    const [ open , setOpen ]= useState(false);
    
    return (
        <div className=" flex">
         <div className={`  ${open ? "w-72" : "w-24"} duration-300  h-screen p-5 pt-8 bg-emerald-200 relative `}> 
         <img  src="https://i.ibb.co/9TJnwCz/control.png" alt="logo" className=" absolute cursor-pointer -right-3 top-9 w-7 rounded-full border-2 border-b-green-600" onClick={()=>setOpen(!open)} />

          <div className="flex gap-x-4 items-center">
            <img src="https://i.ibb.co/ZdQfZhz/logo.png" alt="" className={` cursor-pointer duration-500 `} />

            <h1 className={` text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"} `}> 
            Deshbor</h1>
          </div>
           <ul className=" pt-6">

           <li className="flex mt-4 ml-5  gap-x-4 items-center">
            {/* <img src="https://i.ibb.co/ZdQfZhz/logo.png" alt="" className={` cursor-pointer duration-500 `} /> */}
           <h1 className={` cursor-pointer duration-500 `} >
           <IoHome/>
           </h1>

            <h1 className={` text-white origin-left  font-medium text-xl duration-300 ${!open && "scale-0"} `}> 
           Home </h1>
          </li>
          
           </ul>



          </div>
         <div className=" p-7 text-2xl font-semibold "> <h1> home page</h1> </div>

        </div>
    );
};

export default Deshbord;