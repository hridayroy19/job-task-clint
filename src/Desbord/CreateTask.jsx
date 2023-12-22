import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/Provider";

const CreateTask = () => {
 const { user}=useContext(AuthContext)
 console.log(user);

    const handelAddtasl = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const descriptions = form.descriptions.value;
        const deadlines = form.deadlines.value;
        const priority = form.priority.value;
        const newproduct = {
            title,
            descriptions,
            deadlines,
            priority,
            email:user?.email


         
        };
        console.log(newproduct);

        fetch("http://localhost:5000/crateTask", {
            method: "POST",
            headers: {
              "content-type":"application/json",
            },
            body: JSON.stringify(newproduct),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                  },
                });
      
                Toast.fire({
                  icon: "success",
                  title: "Add Task successfully",
                });
              }
            });


    }


    return (
        <div data-aos="zoom-out-down">
              <form onSubmit={handelAddtasl}>
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
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text"> Descriptions </span>
              </label>
              <label className="input-group">
             

                <input type="text"
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



              {/* <select className="input input-bordered bg-white text-black w-full">
                  <option disabled selected>
                  Technology and Electronics
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select> */}
              <label className="input-group">
                <input
                  type="date"
                  placeholder="deadlines"
                  name="deadlines"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="chose priority"
                  name="priority"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
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

export default CreateTask;