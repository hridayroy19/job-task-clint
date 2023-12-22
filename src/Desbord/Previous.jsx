import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Previous = () => {
  const task = useLoaderData();
  const [lodeuser, setLodeuser] = useState(task);

  const handeldelet = (_id) => {
    console.log("delet", _id);
    axios
      .delete(`https://job-task-server-one-beta.vercel.app/crateTask/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          toast.success("Successfully delete");
          const remaining = lodeuser.filter((user) => user._id !== _id);
          setLodeuser(remaining);
        }
      });
  };

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

    
           </div>
           </div>
         </div>  )
                }

            </div>

    // <div>
    //   <div className="flex justify-evenly ">
    //     <h2 className="text-xl">All Task </h2>
    //     <h2 className="text-xl">Total Task: {task.length}</h2>
    //   </div>
    //   <div className="overflow-x-auto">
    //     <table className="table table-zebra ">
    //       {/* head */}
    //       <thead>
    //         <tr>
    //           <th></th>
    //           <th>title</th>
    //           <th>Discription</th>
    //           <th>deadlines</th>
    //           <th> priority</th>
    //           <th> Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {task.map((user, index) => (
    //           <tr key={user._id}>
    //             <th>{index + 1}</th>
    //             <td>{user.title}</td>
    //             <td>{user.deadlines}</td>
    //             <td>{user.deadlines}</td>
    //             <td>{user.priority}</td>
    //             <td>
    //             <button onClick={()=>handeldelet(task._id)} className=" btn btn-outline mt-9 text-xl text-black w-[120px] "> Delete</button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default Previous;
