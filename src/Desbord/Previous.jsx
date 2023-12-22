import { useLoaderData } from "react-router-dom";

const Previous = () => {

    const task=useLoaderData()
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
         
         <span className=" btn btn-outline mt-9 text-xl text-black w-[120px] "> Delete</span>
       </div>
     </div>  )
            }
      





        </div> 
    );
};

export default Previous;