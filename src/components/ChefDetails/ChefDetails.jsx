import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import {AiFillLike} from "react-icons/ai"
import { addToFavorite } from "../../Utitlies/fakeDb";

const ChefDetails = () => {
  const chef = useLoaderData();
  const navigate = useNavigate();
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
const handleGoBack = () => {
  navigate(-1)
}


const hadnleFavourite = (recipeId) => {
  console.log(chefId,recipeId);

  console.log(newObject);
  addToFavorite();
}



  return (
    <div className="container">
      <div className="card mt-8 md:mt-12 border thingIntro-BG md:items-center bg-no-repeat bg-top bg-contain gap-8 flex-col md:flex-row card-side p-5 md:p-10 bg-base-100 shadow-xl">
        <img
          className="md:h-96 h-56 w-96  object-fill rounded-2xl"
          src={chefImage}
          alt="Movie"
        />
        <div className="flex-1 space-y-2">
          <p>
            {" "}
            <span className="bg-orange-600 px-3 text-white font-semibold rounded-full">
              {chefId}
            </span>
          </p>
          <h2 className="card-title md:text-3xl font-bold text-orange-500">
            {chefName}
          </h2>
          <p className="md:text-lg text-gray-800">
            <span className="font-medium">Description:</span> {shortBio}
          </p>
          <p className="md:text-lg text-gray-800">
            <span className="font-medium">years Of Experience:</span>{" "}
            {yearsOfExperience}
          </p>
          <p className="md:text-lg text-gray-800">
            <span className="font-medium">Recipes Number:</span> {recipes.length}
          </p>
          <p className="text-lg flex items-center gap-1 text-gray-800">
            <AiFillLike className="text-2xl text-orange-500"></AiFillLike> {likeNumber}
          </p>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-3xl text-center mt-12 font-thin text-orange-600 font-mono">
          Recipe Length: {recipes.length}
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
            {recipes?.map(recipe => <Recipe hadnleFavourite={hadnleFavourite} key={recipe?.recipeId} recipe={recipe}></Recipe>)}
            </div>
            <div className="mt-14 text-center">
              <button onClick={handleGoBack} className="btn">Go to Back</button>
            </div>
      </div>
    </div>
  );
};

export default ChefDetails;
