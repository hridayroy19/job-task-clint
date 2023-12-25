import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/Provider";
import { Link } from "react-router-dom";


const Previous = () => {

    
const { user } = useContext(AuthContext);
console.log(user);
const [allTask, setAlltask] = useState([]);
const [selectedUserId, setSelectedUserId] = useState(null);
console.log(allTask);
const task = allTask.filter((task) => task._id === selectedUserId)
console.log(task)

useEffect(() => {
  const url =`http://localhost:5000/crateTask?email=${user?.email}`;
  fetch(url)
    .then(res => res.json())
    .then(task => {
      setAlltask(task);
    })
}, [user?.email]);

const handleDeletetask = (id) => {
  console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/crateTask/${id}`,{
            method: 'DELETE'
      })
      .then(res => res.json())
      .then(task => {
        if(task.deletedCount > 0){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          const remaining = allTask?.filter((task) => task._id !== id);
          setAlltask(remaining)
        }
      })
      
    }
  });
  
  };

  return (
    <div >
    <h1 className="text-center my-12 uppercase font-bold text-3xl lg:5xl">Previous Task</h1>
    <div className="overflow-x-auto bg-slate-200 ">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Deadlines</th>
            <th>Priority</th>
            <th>descriptions</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="">
          {/* row  */}
          {
            allTask?.length && allTask.map((task,) => (
              <tr key={task._id}>
               
                <td>
                  {task.title}
                </td>
                <td>
                  {task.deadlines}

                </td>
                <td>
                  {task.priority}
                </td>          
                <td>
                  {task.descriptions
}
                </td>                      
                <td>
                  <Link to={`updateTask/${task._id}`}><button className="btn  btn-outline"> update</button> </Link>
                </td>
                <td>
                  <button onClick={() => handleDeletetask(task?._id)} className="btn btn-outline"> Delete </button>
                </td>
                <td>
                  {task.price}
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  </div>

  );
};

export default Previous;
