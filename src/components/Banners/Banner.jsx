import React from "react";

const Banner = () => {
  return (
    <div className="banner-img md:h-screen flex items-center bg-cover py-14 md:pt-20 w-full bg-center bg-no-repeat">
      <div className="container flex flex-col md:flex-row">
        <div className="flex-1 space-y-6">
          <h1 className="text-white text-3xl md:text-7xl font-extrabold">
            EnJoy Cooking
          </h1>
          <p className="text-white">
            Discover the delicious and diverse flavors of Bengali cuisine at our
            restaurant! With an emphasis on seafood, rice, and vegetables,
            Bengali food is a fusion of flavors and spices that create unique
            and unforgettable dishes. From spicy fish curries to sweet desserts
            like rasgulla, our menu has something for everyone.
          </p>
          <button className="btn primary-btn">Learn More</button>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Banner;
