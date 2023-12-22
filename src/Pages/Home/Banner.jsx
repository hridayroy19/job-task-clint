import { Link } from "react-router-dom";


const Banner = () => {
    return (
<div  data-aos="flip-left">


<div className="hero bg-blue-100 opacity-90 h-[90vh] ">
    <div className="hero-content items-center flex-col lg:gap-14 lg:flex-row-reverse ">
      <img src="https://i.ibb.co/0CZDSRw/best-project-management-platforms-featured-image-scaled.jpg" className=" w-[50%]  rounded-3xl mt-2 opacity-70 " />
      <div className="">
        {/* <h4 className="text-3xl font-bold text-[#111]">---SALE FEVER---</h4> */}
        <h1 className=" lg:py-7 lg:text-5xl text-xl  font-bold text-[#111]">You have solutions for different types of tasks</h1> 
            <p className=" font-medium text-[#111]  lg:text-2xl  ">
            Taskify: Simplify Your Tasks
 </p>


             <button
    className="text-[#4441f0] mb-4  mt-6  text-[17px] font-semibold">
  <a className="flex items-center text-center  gap-2 bg-green-500 p-2 rounded-md"> <Link to={'deshbord'}>Let’s Explore</Link> </a>
  </button>
      </div>
     
    </div>
  </div>
  </div>












    );
};

export default Banner;