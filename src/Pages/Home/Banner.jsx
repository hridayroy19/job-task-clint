import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
           <div className="hero min-h-[65vh] " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <button className="btn btn-primary text-xl font-bold"> <Link to={"deshbord"}>Lets Explore</Link> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;