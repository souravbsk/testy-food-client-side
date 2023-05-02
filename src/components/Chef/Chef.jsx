/* eslint-disable react/prop-types */
import React from 'react';
import {AiFillLike} from "react-icons/ai"
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {chefImage,chefName,chefId,likeNumber,yearsOfExperience,recipesNumber} = chef;
    return (
        <div className="card overflow-hidden shadow-md glass">
        <img className='h-72 object-top w-full object-cover' src={chefImage} alt={chefName}/>
        <div className="p-5 space-y-3">
          <h2 className="card-title">{chefName}</h2>
          <p><span className='text-xl font-medium'>Experience:</span> {yearsOfExperience} year</p>
          <p><span className='text-xl font-medium'>recipe:</span> {recipesNumber}</p>
          <div className="flex justify-between items-center">
            <p className='flex items-center gap-1'><AiFillLike className='text-2xl text-orange-500'></AiFillLike>{likeNumber}</p>
            <Link to={`/chefrecipe/${chefId}`}>
            <button className="btn primary-btn">View Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Chef;