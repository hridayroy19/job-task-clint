import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import toast from "react-hot-toast";

const Login = () => {
  const { logIn, siginGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      password,
      email,
    };
    console.log(data);
    logIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast("Success full login!", {
        icon: "👏",
      });
      navigate("/");
    });

   
  };

  const handelGoogle = () => {
    siginGoogle()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.erro(error);
      });
  };








  return (
    <div
      className="hero min-h-screen opacity-90  "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/4Tg3h85/9db2c0dbc29802cdd540db19a0da8e8b.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div>
            <div className="hero bg-slate-400 opacity-70 rounded-2xl  min-h-[70vh] items-center ">
              <div className="hero-content flex-col">
                {/* <h2 className="text-black text-3xl font-bold"> Register Now </h2> */}
                <div className="card flex-shrink-0 w-full max-w-sm  ">
                  <div className="card-body w-auto ">
                    <form onSubmit={handlLogin}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email"
                          name="email"
                          className="input required: input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          name="password"
                          className="input required: input-bordered"
                        />
                        <label className="label">
                          <a
                            href="#"
                            className="label-text-alt link link-hover font-bold "
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-2">
                        <button className="btn btn-primary font-bold">
                          Login{" "}
                        </button>
                      </div>
                    </form>
                    <p className=" font-semibold text-black">
                      {" "}
                      Crate New account{" "}
                      <Link to={"/register"}>
                        {" "}
                        <button className="uppercase ml-2 underline font-extrabold ">
                          {" "}
                          SigUp
                        </button>{" "}
                      </Link>{" "}
                    </p>
                  </div>
                </div>
                <div
                  onClick={handelGoogle}
                  className="flex justify-center bg-gray-800 text-white items-center space-x-2 border m-3 p-2 border-blue-300 border-rounded cursor-pointer"
                >
                  {/* <FaGoogle size={32} /> */}

                  <p>Continue with Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
