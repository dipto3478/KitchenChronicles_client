import React from "react";
import Marquee from "react-fast-marquee";
import "./Favorite.css";

import cats from "../../assets/favourite/pexels-cats-coming-674574.jpg";
import chan from "../../assets/favourite/pexels-chan-walrus-958545.jpg";
import chitokan from "../../assets/favourite/pexels-chitokan-c-2087748.jpg";
import dana from "../../assets/favourite/pexels-dana-tentis-691114.jpg";
import devon from "../../assets/favourite/pexels-devon-rockola-954677.jpg";
import marvin from "../../assets/favourite/pexels-marvin-ozz-2474661.jpg";
import sydney from "../../assets/favourite/pexels-sydney-troxell-718742.jpg";
const Favorite = () => {
  return (
    <div className="container mb-5">
      <h3 className="text-center fw-bolder my-5">Our Favorite Items</h3>
      <Marquee speed={30} pauseOnHover={true}>
        <img src={cats} className="image_f" alt="" />
        <img src={chan} className="image_f" alt="" />
        <img src={chitokan} className="image_f" alt="" />
        <img src={dana} className="image_f" alt="" />
        <img src={devon} className="image_f" alt="" />
        <img src={marvin} className="image_f" alt="" />
        <img src={sydney} className="image_f" alt="" />
      </Marquee>
    </div>
  );
};

export default Favorite;
