/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import "@smastrom/react-rating/style.css";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { toast } from "react-hot-toast";
import LazyLoad from "react-lazy-load";

const Recipe = ({ recipe }) => {
  const { recipeName, image, recipeId, ratings, cookingMethod, ingredients } =
    recipe;
  const [Favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    toast.success(recipeName + "add to favourite");
    setFavorite(true);
  };

  return (
    <LazyLoad offset={300}>
      <div className="card border bg-base-100 shadow-xl">
        <figure className="px-10 pt-5 md:pt-10">
          <img src={image} alt="Shoes" className="rounded-full border" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title md:text-2xl">{recipeName}</h2>
          <p>Cooking Method: {cookingMethod}</p>
          <p className="font-semibold">Ingredients :</p>
          <ul
            className="list-inside list-disc px-3 md:ps-5
          "
          >
            {ingredients.map((ingred, i) => (
              <li key={i}>{ingred}</li>
            ))}
          </ul>
          <div className="card-actions">
            <p className="flex items-center gap-1">
              <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
              <span>{ratings}</span>
            </p>
            <button className="text-3xl text-red-500">
              {Favorite ? (
                <MdOutlineFavorite></MdOutlineFavorite>
              ) : (
                <MdOutlineFavoriteBorder
                  onClick={handleFavorite}
                ></MdOutlineFavoriteBorder>
              )}
            </button>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Recipe;
