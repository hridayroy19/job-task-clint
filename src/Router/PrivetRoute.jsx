/* eslint-disable react/prop-types */


import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";

const PrivetRouter = ({children}) => {


// console.log(location.pathname)

    const { user,  isLoading,}=useContext(AuthContext);

if( isLoading){
    return <span className="loading loading-spinner text-info"></span>
}


    if(user){
        return children;
    }
    return <Navigate to={"/login"} ></Navigate>;
};

export default PrivetRouter;