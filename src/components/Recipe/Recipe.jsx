/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import '@smastrom/react-rating/style.css'
import {MdOutlineFavoriteBorder,MdOutlineFavorite} from "react-icons/md"
import { toast } from "react-hot-toast";

const Recipe = ({ recipe }) => {
  const { recipeName, image, recipeId, ratings, cookingMethod, ingredients } =
    recipe;
    const [Favorite,setFavorite] = useState(false)

const handleFavorite = () => {
    toast.success(recipeName  + " successfully added")
    setFavorite(true)
}

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-full shadow-2xl border"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{recipeName}</h2>
        <p>Cooking Method: {cookingMethod}</p>
        <p className="font-semibold">Ingredients :</p>
        <ul
          className="list-inside list-disc ps-5
        "
        >
          {ingredients.map((ingred, i) => (
            <li key={i}>{ingred}</li>
          ))}
        </ul>
        <div className="card-actions">
          <p className="flex items-center gap-1">
            <Rating
              style={{ maxWidth: 100 }}
              value={ratings}
              readOnly
            />
            <span>{ratings}</span>
          </p>
          <button className="text-3xl text-red-500">
            {
                Favorite ?
                <MdOutlineFavorite></MdOutlineFavorite>
                :

            <MdOutlineFavoriteBorder onClick={handleFavorite} ></MdOutlineFavoriteBorder>
            }
            </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
