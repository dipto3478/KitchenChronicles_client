import React from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefContainer = ({ chefsData }) => {
  return (
    <section className="container  my-5">
      <h3 className="text-center my-5">Chefs Section</h3>
      <article className="row">
        {chefsData.map((chef) => (
          <ChefCard key={chef.chef.id} chef={chef}></ChefCard>
        ))}
      </article>
    </section>
  );
};

export default ChefContainer;
