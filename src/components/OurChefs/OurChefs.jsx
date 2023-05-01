/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import Chef from '../Chef/Chef';

const OurChefs = ({chefs}) => {
    return (
        <div className='container mt-12 md:mt-20'>
            <div className='text-center'>
                <h2 className='text-gray-900 text-2xl md:text-5xl font-bold '>Meet Our Chefs</h2>
            </div>
            <div className='grid md:grid-cols-3 gap-12 mt-8'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>

        </div>
    );
};

export default OurChefs;