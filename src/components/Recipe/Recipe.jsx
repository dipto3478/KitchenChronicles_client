import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Recipe = ({ item }) => {
  const [disBtn, setDisBtn] = useState(false);
  const handleBtn = () => {
    toast.success(" ✌Added Your Favorite List👍");
    setDisBtn(true);
  };
  const { cookingMethod, img, ingredients, name, rating } = item;
  // console.log(item);
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <Card>
        <Card.Img style={{ height: "300px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong className="me-2">Ingredients:</strong>
            {ingredients.map((it) => (
              <span>{it},</span>
            ))}
          </Card.Text>
          <Card.Text>
            <strong>Cooking Method:</strong> {cookingMethod}
          </Card.Text>
          <div className="d-flex align-items-center gap-3 mb-3">
            <Rating
              style={{ maxWidth: 100 }}
              value={Math.round(rating || 0)}
              readOnly
            />
            <span>{rating}</span>
          </div>
          <Button
            onClick={handleBtn}
            disabled={disBtn}
            className="w-100"
            variant="primary"
          >
            Favorite
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipe;
