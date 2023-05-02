import React from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefContainer = ({ chefsData }) => {
  return (
    <>
      <h3>Chefs Section</h3>
      <section>
        {chefsData.map((chef) => (
          <ChefCard></ChefCard>
        ))}
      </section>
    </>
  );
};

export default ChefContainer;
