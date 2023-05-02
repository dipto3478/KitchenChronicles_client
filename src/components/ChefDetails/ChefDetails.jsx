import React from "react";
import { useParams } from "react-router-dom";

const ChefDetails = () => {
  const chef = useParams;
  console.log(chef);
  return <div>this is ChefDetails</div>;
};

export default ChefDetails;
