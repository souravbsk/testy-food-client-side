/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Category from "../Category/Category";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://test-food-server-souravbsk.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="container mt-12 md:mt-20">
      <div className="text-center">
        <h2 className="text-gray-900 text-2xl md:text-4xl font-bold ">
          Recipe Categories
        </h2>
      </div>
      <div>
        <Swiper
           // install Swiper modules

           autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
           modules={[Navigation,Pagination,Autoplay]}
           loop={true}
           pagination={{
            clickable: true,
          }}
           breakpoints={{
             0:{
               slidesPerView: 1,
               spaceBetween:10,
             },
             480:{
               slidesPerView:2,
               spaceBetween:20
             },
             760:{
               slidesPerView:3,
               spaceBetween:30
             }
 
           }}
           onSwiper={(swiper) => console.log(swiper)}
           // onSlideChange={ () => console.log("swiper")}
           
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Category category={category}></Category>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
