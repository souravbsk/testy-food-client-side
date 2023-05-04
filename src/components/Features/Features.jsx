import React from 'react';
import {GiChickenOven, GiCirclingFish, GiCoffeeCup, GiFruitBowl} from "react-icons/gi"
const Features = () => {
    return (
        <div className='container mt-12 md:mt-20'>
            <div className='grid md:grid-cols-4 gap-4 md:gap-8'>
                <div className='flex space-y-3 text-center p-3 md:p-5 flex-col items-center justify-center'>
                    <p className='bg-orange-400 inline-block text-5xl px-4 py-4 rounded-full text-white'><GiCirclingFish></GiCirclingFish></p>
                    <h2 className='text-2xl font-medium text-gray-900'>Fish</h2>
                    <p className='text-gray-500'>A small river padma flows by their place and supplies it with the necessary regalia</p>
                </div>
                <div className='flex space-y-3 text-center p-3 md:p-5 flex-col items-center justify-center'>
                    <p className='bg-orange-400 inline-block text-5xl px-4 py-4 rounded-full text-white'><GiChickenOven></GiChickenOven></p>
                    <h2 className='text-2xl font-medium text-gray-900'>Chicken</h2>
                    <p className='text-gray-500'>A small river padma flows by their place and supplies it with the necessary regalia</p>
                </div>
                <div className='flex space-y-3 text-center p-3 md:p-5  flex-col items-center justify-center'>
                    <p className='bg-orange-400 inline-block text-5xl px-4 py-4 rounded-full text-white'><GiCoffeeCup></GiCoffeeCup></p>
                    <h2 className='text-2xl font-medium text-gray-900'>Coffee</h2>
                    <p className='text-gray-500'>A small river padma flows by their place and supplies it with the necessary regalia</p>
                </div>
                <div className='flex space-y-3 text-center p-3 md:p-5  flex-col items-center justify-center'>
                    <p className='bg-orange-400 inline-block text-5xl px-4 py-4 rounded-full text-white'><GiFruitBowl></GiFruitBowl></p>
                    <h2 className='text-2xl font-medium text-gray-900'>Fruit</h2>
                    <p className='text-gray-500'>A small river padma flows by their place and supplies it with the necessary regalia</p>
                </div>
            </div>
        </div>
    );
};

export default Features;