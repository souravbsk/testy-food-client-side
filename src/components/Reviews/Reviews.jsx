import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";


const Reviews = () => {
    return (
        <div className='container mt-12 md:mt-20'>
<div className="text-center mb-8 md:mb-12">
        <h2 className="text-gray-900 text-2xl md:text-4xl font-bold ">
         Client Reviews
        </h2>
      </div>
            <div>
            <Swiper
           // install Swiper modules

           autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
           modules={[Navigation,Pagination,Autoplay]}
           loop={true}
           pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={10}

           
           onSwiper={(swiper) => console.log(swiper)}
           // onSlideChange={ () => console.log("swiper")}
           
        >
         
            <SwiperSlide >
            <div className='flex md:w-6/12 pb-8 mx-auto max-w-full text-center flex-col items-center'>
                <img src="https://preview.colorlib.com/theme/marco/img/user.png.webp" alt="" />
                <div className='space-y-1'>
                    <h2 className='text-xl font-medium'>Hulda Sulton</h2>
                    <div className='flex items-center justify-center'>
                        <Rating className='text-center' style={{ maxWidth: 100 }} value={4.5} readOnly></Rating>
                    </div>
                    <p>
“I had an amazing experience at this restaurant! The food was delicious and the service was top-notch. I highly recommend trying the Kalkata biriyani, it was a real standout. Will definitely be returning!”</p>
                
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide > 
            <div className='flex md:w-6/12 pb-8 mx-auto max-w-full text-center flex-col items-center'>
                <img src="https://preview.colorlib.com/theme/marco/img/user.png.webp" alt="" />
                <div className='space-y-1'>
                    <h2 className='text-xl font-medium'>Hulda Sulton</h2>
                    <div className='flex items-center justify-center'>
                        <Rating style={{ maxWidth: 100 }} value={4.5} readOnly></Rating>
                    </div>
                    <p>
“If you are looking for a great place to eat, look no further! This restaurant has it all - delicious food, excellent service, and a cozy atmosphere. The macher jhol was absolutely incredible. I cant wait to come back and try more!”</p>
                
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide >
            <div className='flex md:w-6/12 pb-8 mx-auto max-w-full text-center flex-col items-center'>
                <img src="https://preview.colorlib.com/theme/marco/img/user.png.webp" alt="" />
                <div className='space-y-1'>
                    <h2 className='text-xl font-medium'>Hulda Sulton</h2>
                    <div className='flex items-center justify-center'>
                        <Rating style={{ maxWidth: 100 }} value={4.5} readOnly></Rating>
                    </div>
                    <p>
“I recently visited this restaurant and was blown away by the quality of the food. Everything we tried was fresh, flavorful, and beautifully presented. The staff was friendly and attentive, and the atmosphere was perfect for a night out. Highly recommend!”</p>
                
                </div>
            </div>
            </SwiperSlide>
            
  
        </Swiper>
            </div>
         
        </div>
    );
};

export default Reviews;