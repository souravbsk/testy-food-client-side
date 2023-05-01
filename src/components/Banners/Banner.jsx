import React from "react";

const Banner = () => {
  return (
    <div className="banner-img h-[100vh] flex items-center bg-cover pt-20 w-full bg-center bg-no-repeat">
      <div className=" container">
        <h1 className="text-white text-5xl md:text-8xl font-extrabold">
          EnJoy Cooking
        </h1>
        <button className="px-5 bg-orange-500 text-white text-2xl font-medium py-3 rounded mt-5">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
