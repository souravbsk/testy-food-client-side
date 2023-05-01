/* eslint-disable react/prop-types */
import React from 'react';

const Category = ({category}) => {
    const {img,categoryTitle,id} = category
    return (
        <div className='my-12 py-4 shadow-md border-2 rounded-md'>
            <figure>
                <img className='h-60 w-60 mx-auto shadow-xl object-fill rounded-full' src={img} alt="" />
            </figure>
            <h2 className='text-2xl mt-5 font-light text-center text-orange-400'>{categoryTitle}</h2>
        </div>
    );
};

export default Category;