/* eslint-disable react/prop-types */
import React from 'react';
import {AiFillLike} from "react-icons/ai"
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chef = ({chef}) => {
    const {chefImage,chefName,chefId,likeNumber,yearsOfExperience,recipesNumber,recipes} = chef;
    return (
      
          <LazyLoad height={420} threshold={0.95} offset={100}>
        <div className="card overflow-hidden shadow-md glass">
        <img className='h-56 object-top w-full object-fill' src={chefImage} alt={chefName}/>
        <div className="p-5 space-y-1">
          <h2 className="card-title">{chefName}</h2>
          <p><span className='text-lg font-medium'>Experience:</span> {yearsOfExperience} year</p>
          <p><span className='text-lg font-medium'>recipe:</span> {recipes.length}</p>
          <div className="flex justify-between items-center">
            <p className='flex items-center gap-1'><AiFillLike className='text-2xl text-orange-500'></AiFillLike>{likeNumber}</p>
            <Link to={`/chefrecipe/${chefId}`}>
            <button className="btn duration-300 primary-btn">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
        </LazyLoad>
    );
};

export default Chef;