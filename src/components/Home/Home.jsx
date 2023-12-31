import React from "react";
import Banner from "../Banner/Banner";
import ChefContainer from "../ChefContainer/ChefContainer";
import { useLoaderData } from "react-router-dom";
import Sponsor from "../Sponsor/Sponsor";
import Favorite from "../Favorite/Favorite";

const Home = () => {
  const chefsData = useLoaderData();
  // console.log(chefsData);
  return (
    <div>
      <Banner />
      <Sponsor />
      <ChefContainer chefsData={chefsData} />
      <Favorite />
    </div>
  );
};

export default Home;
