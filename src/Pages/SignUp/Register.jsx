import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const Register = () => {
  const {  crateUser , updateUserProfile } = useContext(AuthContext);

const navigate = useNavigate()

    const handleRegister= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        const data ={
          name,
          email,
          photo,
          password
        }
        console.log(data);

      crateUser(data.email ,data.name, data.password
        , data.photo)
     .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)

      updateUserProfile(data.name , data.photo)
      .then(()=>{
        // send database information
          const userInfo ={
            name: data.name,
              email: data.email ,
              photo:data.photo        
      }
      console.log(userInfo);
      })
      navigate("/")

    })}

    return (
        <div className="hero min-h-screen opacity-90  " style={{backgroundImage: 'url(https://i.ibb.co/4Tg3h85/9db2c0dbc29802cdd540db19a0da8e8b.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <div>
                   <div className="hero bg-slate-400 opacity-70 rounded-2xl  min-h-[70vh] items-center ">
                <div className="hero-content flex-col">
                 {/* <h2 className="text-black text-3xl font-bold"> Register Now </h2> */}
                  <div className="card flex-shrink-0 w-full max-w-sm  ">
                    <div className="card-body w-auto ">
                 <form  onSubmit={handleRegister}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name"  className="input required: input-bordered" />
                      </div>
                      <div className="form-control">
                      <label className="label">
                        <span className="label-text ">photo url</span>
                      </label>
                      <input type="url" placeholder="photo url" name="url"  className="input required: input-bordered" />
                    </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email"  className="input required: input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input required: input-bordered" />
                        <label className="label">
                       <a href="#" className="label-text-alt link link-hover font-bold ">Forgot password?</a>
                         </label>
                      </div>
                      <div className="form-control mt-2">
                        <button className="btn btn-primary font-bold"> Register</button>
                      </div>
                 </form>
                 <p className=" font-semibold text-black "> All ready have a account <Link to={"/login"}>  <button className="uppercase ml-2 underline font-extrabold " > Login</button> </Link> </p>
                    </div>
                  </div>
              
                 
                </div>
              </div>
                </div>
        
          </div>
        </div>
        </div>
    );
};

export default Register;