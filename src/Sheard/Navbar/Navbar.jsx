import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { useContext } from "react";

const Navbar = () => {

  const { user , logOut,} = useContext(AuthContext);

  const handelLogOut =()=>{
    logOut()
    .then(()=>{ })
    .catch( error => console.log(error));
  }


    return (
        <div className="  bg-blue-200 lg:px-20 mx-auto ">
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink
            to="/"
            className={({ isActive, isPending })  =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
            
          >
            Home
          </NavLink>
      <NavLink
            to="/about"
            className={({ isActive, isPending })  =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
            
          >
            About
          </NavLink>
      <NavLink
            to="/contact"
            className={({ isActive, isPending })  =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
            
          >
            Contact
          </NavLink>
      </ul>
    </div>
    <a className=" font-extrabold text-xl">Task Management</a>
  </div>
  <div className="navbar-center hidden gap-2 lg:flex">
    <ul className="menu gap-4 uppercase font-semibold menu-horizontal px-1">
    <NavLink
            to="/"
            className={({ isActive, isPending })  =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
            
          >
            Home
          </NavLink>
      <NavLink
            to="/about"
            className={({ isActive, isPending })  =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
            
          >
            About
          </NavLink>
      <NavLink
            to="/contact"
            className={({ isActive, isPending })  =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
            
          >
            Contact
          </NavLink>
      <NavLink
            to="/deshbord"
            className={({ isActive, isPending })  =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
            
          >
            
            Deshbord
          </NavLink>
    </ul>
  </div>
  <div className="navbar-end">


{
          user ? <> <button className=" btn btn-outline font-bold " onClick={handelLogOut} >  LogOut </button> </> :
          
          <><> <Link to={"/login"}>
          <button className="font-bold text-xl  "> LOGIN </button>
        </Link></></>
        }

  </div>
</div>
        </div>
    );
};

export default Navbar;