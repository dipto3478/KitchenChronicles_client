import React from "react";
import Banner from "../Banner/Banner";
import ChefContainer from "../ChefContainer/ChefContainer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chefsData = useLoaderData();
  return (
    <div>
      <Banner />
      <ChefContainer chefsData={chefsData} />
    </div>
  );
};

export default Home;
