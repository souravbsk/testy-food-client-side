import React from "react";

const Banner = () => {
  return (
    <div className="banner-img h-screen flex items-center bg-cover pt-20 w-full bg-center bg-no-repeat">
      <div className="container flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold">
            EnJoy Cooking
          </h1>
          <button className="btn primary-btn mt-5">
            Learn More
          </button>
         
        </div>
        <div className="flex-1">

</div>
      </div>
    </div>
  );
};

export default Banner;
