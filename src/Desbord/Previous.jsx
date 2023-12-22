import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Previous = () => {

    const task=useLoaderData()
    const [lodeuser, setLodeuser] = useState(task);

    const handeldelet = (_id) => {
      console.log("delet", _id);
      axios.delete(
          `http://localhost:5000/crateTask/${_id}`,
        )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          if (data.deletedCount > 0) {
            toast.success("Successfully delete");
            const remaining = lodeuser.filter((user) => user._id !== _id);
            setLodeuser(remaining);
          }
        });

      }




    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 py-6 gap-3 items-center ">

            {

                task.map((task)=> 
                <div key={task._id}  className=" card bg-slate-50 w-[400px]  text-primary-content">
       <div className="card-body">
         <h2 className="card-title text-black "> {task.title}</h2>
         <p className="text-black"> { task.descriptions} </p>
         <div className="card-actions flex justify-between">
           <h3 className=" text-xl text-black">priority:{task.priority} </h3>
           <h3 className=" text-xl text-black"> Date:{
                 task.deadlines
           } </h3> 


         </div>
         
       <div className="flex justify-between">
       <button onClick={()=>handeldelet(task._id)} className=" btn btn-outline mt-9 text-xl text-black w-[120px] "> Delete</button>
 
   <Link to={`update/${task._id}`}>
  <button className=" btn btn-primary mt-9 text-xl text-black w-[120px]  "> update</button>

 </Link>
       </div>
       </div>
     </div>  )
            }
      





        </div> 
    );
};

export default Previous;