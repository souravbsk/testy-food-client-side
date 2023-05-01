/* eslint-disable react/prop-types */
import React from 'react';
import {AiFillLike} from "react-icons/ai"

const Chef = ({chef}) => {
    console.log(chef);
    const {chefImage,chefName,id,likeNumber,yearsOfExperience} = chef;
    return (
        <div className="card overflow-hidden shadow-md glass">
        <img className='h-72 object-top w-full object-cover' src={chefImage} alt={chefName}/>
        <div className="p-5 space-y-3">
          <h2 className="card-title">{chefName}</h2>
          <p><span className='text-xl font-medium'>Experience:</span> {yearsOfExperience} year</p>
          <div className="flex justify-between items-center">
            <p className='flex items-center gap-1'><AiFillLike className='text-2xl text-gray-900'></AiFillLike>{likeNumber}</p>
            <button className="btn primary-btn">View Recipe</button>
          </div>
        </div>
      </div>
    );
};

export default Chef;