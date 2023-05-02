import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";

const ChefCard = ({ chef }) => {
  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
  } = chef;
  return (
    <div className="col-12 col-md-6 mb-4  col-lg-4 ">
      <Card>
        <Card.Img style={{ height: "250px" }} variant="top" src={chefPicture} />
        <Card.Body>
          <Card.Title>{chefName}</Card.Title>
          <p>Experience: {yearsOfExperience}year</p>
          <p className="d-flex align-items-center justify-content-between">
            <span>Number Of Recipes: {numberOfRecipes}</span>
            <span className="d-flex align-items-center gap-2">
              <AiFillLike className="text-primary" /> {likes}
            </span>
          </p>
          <Button className="w-100" variant="primary">
            View Recipes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCard;
