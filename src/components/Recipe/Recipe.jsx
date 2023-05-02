/* eslint-disable react/prop-types */
import React from "react";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  const { recipeName, image, recipeId, ratings, cookingMethod, ingredients } =
    recipe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-full shadow-2xl border" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{recipeName}</h2>
          <p>Cooking Method: {cookingMethod}</p>
          <p className="font-semibold">Ingredients :</p>
        <ul className="list-inside list-disc ps-5
        ">
            {
                ingredients.map((ingred,i) => <li key={i}>{ingred}</li>)
            }
        </ul>
        <div className="card-actions">
          <button className="btn primary-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
