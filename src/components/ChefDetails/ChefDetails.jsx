import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import {AiFillLike} from "react-icons/ai"

const ChefDetails = () => {
  const chef = useLoaderData();
  const {
    chefImage,
    chefName,
    chefId,
    likeNumber,
    yearsOfExperience,
    recipesNumber,
    shortBio,
    recipes,
  } = chef;

  return (
    <div className="pt-32 container">
      <div className="card border thingIntro-BG items-center bg-no-repeat bg-top bg-contain gap-8 flex-col md:flex-row card-side p-10 bg-base-100 shadow-xl">
        <img
          className="h-96 w-96  object-fill rounded-2xl"
          src={chefImage}
          alt="Movie"
        />
        <div className=" flex-1 space-y-2">
          <p>
            {" "}
            <span className="bg-orange-600 px-3 text-white font-semibold rounded-full">
              {chefId}
            </span>
          </p>
          <h2 className="card-title text-3xl font-bold text-orange-500">
            {chefName}
          </h2>
          <p className="text-lg text-gray-800">
            <span className="font-medium">Description:</span> {shortBio}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-medium">years Of Experience:</span>{" "}
            {yearsOfExperience}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-medium">Recipes Number:</span> {recipesNumber}
          </p>
          <p className="text-lg flex items-center gap-1 text-gray-800">
            <AiFillLike className="text-2xl text-orange-500"></AiFillLike> {likeNumber}
          </p>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-3xl mt-12 font-thin text-orange-600 font-mono">
          Recipe Length: {recipesNumber}
        </h3>
        <div className="grid grid-cols-3 gap-8 mt-8">
            {recipes?.map(recipe => <Recipe key={recipe?.recipeId} recipe={recipe}></Recipe>)}
            </div>
      </div>
    </div>
  );
};

export default ChefDetails;
