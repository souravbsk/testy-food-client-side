import React from "react";

const ThinkIntro = () => {
  return (
    <div className="thingIntro-BG bg-contain pt-8 bg-top bg-no-repeat">
      <div className=" flex flex-col-reverse md:flex-row gap-6 md:gap-20 items-center justify-between container pt-12  md:pt-32">
        <div className="grid gap-2 flex-1 grid-cols-2">
          <img
            className="w-full row-span-full  h-60 md:object-cover"
            src="https://i.ibb.co/f4fY9ph/main-qimg-626ddb90a7489ac24b3910cf640f1706-lq.jpg"
            alt=""
          />
          <img
            className="w-full h-60 md:object-cover"
            src="https://i.ibb.co/mtpxvkC/Shutterstock-1916557661.jpg"
            alt=""
          />
          <img
            className="w-full h-60 md:object-cover "
            src="https://i.ibb.co/tcFwgvx/rosogolla-650x400-51445247410.jpg"
            alt=""
          />
          <img
            className="w-full h-60 md:object-cover "
            src="https://i.ibb.co/r31hV9J/photo-1630409346824-4f0e7b080087.png"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col space-y-3 md:space-y-6">
          <div>
            <h2 className="text-orange-600 text-2xl font-light font-mono">
              Our Introduction
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Give yourself a lifetime of cooking confidence
            </h1>
          </div>
          <p>
          Welcome to our restaurant! Our passion for food is reflected in every dish we serve. From the freshest ingredients to the perfect presentation, we strive to provide our guests with a memorable dining experience. Our menu is carefully crafted to showcase a variety of flavors, with something for everyone to enjoy. Whether you are looking for a romantic dinner for two, a family gathering, or a business lunch, we have the perfect atmosphere to suit your needs. Come join us for a delicious meal and let us show you why we are the best restaurant in town!
          </p>
          <div>
            <button className="btn primary-btn">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkIntro;
