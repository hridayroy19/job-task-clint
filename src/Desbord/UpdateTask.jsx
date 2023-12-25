import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
  const loder = useLoaderData();
  console.log(loder);

  const handelUpdatedProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const descriptions = form.descriptions.value;
    const deadlines = form.deadlines.value;
    const priority = form.priority.value;
    const update = {
      title,
      descriptions,
      deadlines,
      priority,
    };
    console.log(update);

    fetch(` http://localhost:5000/crateTask/${loder._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Update!");
        }
      });
  };

  return (
    <div data-aos="zoom-out-down">
      <form onSubmit={handelUpdatedProduct}>
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
                  defaultValue={loder.title}
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text"> Descriptions </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="descriptions"
                  defaultValue={loder.descriptions}
                  name="descriptions"
                  className="input input-bordered bg-white text-black w-full "
                />
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
                  placeholder="deadlines"
                  name="deadlines"
                  defaultValue={loder.deadlines}
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text text-white">Priority</span>
              </label>
              <select
                name="priority"
                defaultValue={loder.priority}
                className="select select-bordered select-warning w-full"
              >
                <option disabled selected>
                  Select a Priority ?
                </option>
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
