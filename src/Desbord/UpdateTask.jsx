// import { useForm } from "react-hook-form";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";
// import { useContext } from "react";
// import Swal from "sweetalert2";

// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../Provider/Provider";
import Swal from "sweetalert2";



const UpdateTask = () => {
    const {title,deadlines, descriptions, priority, _id} = useLoaderData();
    
    // const { user } = useContext(AuthContext);
    // const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
    
        console.log(data)
          const taskItem = {
           name: data.title,
           notes: data.deadlines,
           priority: data. priority,
           title: data.descriptions,
          }
          console.log(taskItem)
        
          fetch(`http://localhost:5000/crateTask/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(taskItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.matchedCount) {
            // reset()
          Swal.fire({
              title: 'success!!',
              text: 'Item Details Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
      }
      })
       
      };
    return (
        <div data-aos="zoom-out-down">
        <form onSubmit={onSubmit}>
  <div className="text-center bg-blue-200 p-10 mb-14 mt-11 ">
    <h2 className="text-2xl font-bold"> Crate a New Task </h2>

    {/* fomre name  row */}
    <div className="md:flex justify-between">
      <div className="form-control w-1/2 ">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Task name"
            name="title"
            defaultValue={title}
            className="input  input-bordered bg-white text-black w-full "
          />
        </label>
      </div>

      <div className="form-control w-1/2 ml-4 ">
        <label className="label">
          <span className="label-text"> Descriptions </span>
        </label>
        <label className="input-group">
       

          <input type="text"
          defaultValue={descriptions}
      placeholder="descriptions" name="descriptions" className="input input-bordered bg-white text-black w-full "/>
        </label>
      </div>
    </div>
    {/* fomre supplier */}
    <div className="md:flex justify-between">
      <div className="form-control w-1/2 ">
        <label className="label">
          <span className="label-text"> Deadlines </span>
        </label>

        <label className="input-group">
          <input
            type="date"
            defaultValue={deadlines}
            placeholder="deadlines"
            name="deadlines"
            className="input input-bordered bg-white text-black w-full "
          />
        </label>
      </div>

      <div className="form-control w-1/2 ml-4 ">

                        <label className="label">
                          <span className="label-text text-white">
                              Priority
                          </span>
                      </label>
                      <select name="priority" defaultValue={priority} className="select select-bordered select-warning w-full">
                          <option disabled selected>Select a Priority ?</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                      </select>






      </div>
    </div>
    <div className="mt-4 ">
      <button className="btn btn-block btn-outline text-white ">
        Submite
      </button>
    </div>
  </div>
</form>
  </div>
    );
};

export default UpdateTask;