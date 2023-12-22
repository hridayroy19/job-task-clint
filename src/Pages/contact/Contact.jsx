

const Contact = () => {
    return (
        <div className="px-20 bg-gray-200">
        <h1 className=" lg:text-4xl font-bold text-center py-2 lg:py-5">Have Questions? <br />CONTACT US 
        </h1>
    <div className=" grid md:grid-cols-2 grid-cols-1 ">
<div data-aos="fade-right">
<div className=" ml-16 mb-3 lg:ml-1" >
            <h2 className=" font-bold lg:text-2xl">Ask Our Team</h2>
             <p className=" mt-2 font-semibold"> Want to contact us directly? No problem. <br />
              We are always here for you.</p>

              <div className="avatar-group mt-6 -space-x-6">
<div className="avatar">
<div className="w-12">
  <img src="https://i.ibb.co/LzWxcQc/assignment-helps-fbdf10d1.webp" />
</div>
</div>
<div className="avatar">
<div className="w-12">
  <img src="https://i.ibb.co/7zn0Gc0/editing-help-service-d5ba1cce.webp" />
</div>
</div>
<div className="avatar">
<div className="w-12">
  <img src="https://i.ibb.co/8NSMWkR/every-student-ment-f7a30282.webp" />
</div>
</div>
<div className="avatar placeholder">
<div className="w-12 bg-neutral-focus text-neutral-content">
  <span>+99</span>
</div>
</div>
</div>  
<div className="mt-9">
<div className="flex items-center gap-2">
{/* <BsFillTelephoneFill></BsFillTelephoneFill> */}
<p className="  font-bold">  0177770077</p>
     
</div>
<div className="flex items-center gap-2">
    {/* <BsFillEnvelopeFill></BsFillEnvelopeFill> */}
    <h2>hrhridoyroy@gmail.com </h2>
</div>


<button className="btn mt-6 bg-green-500 btn-outline btn-secondary">  Start Live chart</button>

</div>

</div>
</div>
      <div data-aos="fade-left">
      <div className="w-full">
        <div className="card shrink-0  ">
  <form  >
   <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
   <div className="form-control">
      <label className="label">
      </label>
      <input type="text" name="name" placeholder="Your Name" className="input" required />
    </div>
    <div className="form-control">
      <label className="label">
      </label>
      <input type="email" name="email" placeholder="Your Email" className="input" required />
    </div>
    <div className="form-control">
      <label className="label">
      </label>
      <input type="text" name="phone" placeholder="Your Namber" className="input" required />
    </div>
    <div className="form-control">
      <label className="label">
      </label>
      <input type="text" name="subjcet" placeholder="Subjcet" className="input" required />
    </div>
    <div className="form-control">
      <label className="label">
      </label>
      <input type="text" name="massage" placeholder="Send Massage" className="input " required />
    </div>
    <div className="form-control mt-6">

    </div>
   </div>
   <button type="submit" className="btn btn-primary w-full btn-outline mt-4 ">SUBMITE</button>
  </form>
</div>
        </div>
      </div>
    </div>









    </div>
    );
};

export default Contact;