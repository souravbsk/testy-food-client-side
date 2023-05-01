/* eslint-disable react/prop-types */
import React from 'react';

const Chef = ({chef}) => {
    console.log(chef);
    const {chefImage,chefName,id,likeNumber,yearsOfExperience} = chef;
    return (
        <div className="card overflow-hidden shadow-md glass">
        <img className='h-72 object-top w-full object-cover' src={chefImage} alt={chefName}/>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p><span className='text-xl font-medium'>Experience:</span> {yearsOfExperience} year</p>
          <div className="card-actions justify-end">
            <button className="btn primary-btn">View Recipe</button>
          </div>
        </div>
      </div>
    );
};

export default Chef;