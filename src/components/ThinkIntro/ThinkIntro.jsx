import React from "react";

const ThinkIntro = () => {
  return (
    <div className="thingIntro-BG bg-contain bg-top bg-no-repeat">
      <div className=" flex flex-col-reverse md:flex-row gap-6 md:gap-20 items-center justify-between container pt-12  md:pt-32">
        <div className="grid gap-2 flex-1 grid-cols-2">
          <img
            className="w-full row-span-full  h-60 object-cover"
            src="https://i.ibb.co/thZ2R9N/eiliv-aceron-Zu-IDLSz3-XLg-unsplash.jpg"
            alt=""
          />
          <img
            className="w-full h-60 object-cover "
            src="https://i.ibb.co/FK7whLJ/chad-montano-Mq-T0asuo-Ic-U-unsplash.jpg"
            alt=""
          />
          <img
            className="w-full h-60 object-cover "
            src="https://i.ibb.co/5Gr3bNR/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg"
            alt=""
          />
          <img
            className="w-full h-60 object-cover "
            src="https://i.ibb.co/f2cGfg1/henrik-hjortshoj-Xt-YPj-MTNQUA-unsplash.jpg"
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            laboriosam exercitationem, cupiditate, facere eaque dolore dolorum
            in harum ut, saepe laudantium sequi quis! Quasi voluptas laboriosam
            maiores velit, nam praesentium architecto quidem ipsam obcaecati.
            Earum deserunt repellat repudiandae animi fuga officiis quam vitae
            praesentium, cum consequuntur neque, obcaecati saepe rem?
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
