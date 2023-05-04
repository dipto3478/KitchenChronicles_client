import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-container">
      <article className="text-light text-center">
        <h1 className="display-3 fw-bolder">
          <TypeAnimation
            sequence={[
              " Where ",
              1000,
              " Where Recipes ",
              1000,
              " Where Recipes Come ",
              1000,
              " Where Recipes Come to Life",
              1000,
            ]}
            speed={75}
            repeat={Infinity}
          />
        </h1>
        <p className="fs-5">
          A vibrant and colorful image of various ingredients and kitchen tools
          with the website's name and slogan overlaid in a fun and playful font.
        </p>
      </article>
    </section>
  );
};

export default Banner;
