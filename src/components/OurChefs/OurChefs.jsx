/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import Chef from '../Chef/Chef';

const OurChefs = ({chefs}) => {
    return (
        <div className='container py-32'>
            <div className='text-center'>
                <h2 className='text-gray-900 text-4xl font-bold '>Meet Our Chefs</h2>
            </div>
            <div className='grid grid-cols-3 gap-12 mt-8'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>

        </div>
    );
};

export default OurChefs;