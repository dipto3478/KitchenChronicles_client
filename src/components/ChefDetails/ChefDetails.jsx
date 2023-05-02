import React from "react";
import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefDetails = () => {
  const chef = useLoaderData();
  // console.log(chef.chef);

  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numRecipes,
    likes,
    bio,
    recipes,
  } = chef.chef;
  return (
    <section className="container py-5">
      <article className="row d-flex align-items-center justify-content-center gap-5 gap-md-0">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            style={{ height: "500px" }}
            className="img-fluid  "
            src={chefPicture}
            alt={chefName}
          />
        </div>
        <div className="col-12 col-md-6">
          <h3>Name: {chefName}</h3>
          <p>Experience : {yearsOfExperience}year</p>
          <p className="d-flex align-items-center gap-5">
            <span>Number Of Recipes: {numRecipes}</span>
            <span className="d-flex align-items-center gap-2">
              <AiFillLike className="text-primary" /> {likes}
            </span>
          </p>
          <p className="text-muted">
            <strong>Bio:</strong> {bio}
          </p>
        </div>
      </article>
      <div className="container">
        <h4 className="fw-bold text-center text-decoration-underline my-5">
          Items Recipe
        </h4>
        <article className="row d-flex align-items-center">
          {recipes.map((item) => (
            <Recipe key={item.r_id} item={item}></Recipe>
          ))}
        </article>
      </div>
    </section>
  );
};

export default ChefDetails;
