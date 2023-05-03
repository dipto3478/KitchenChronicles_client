import React from "react";
import cokacola from "../../assets/cokacola.png";
import ford from "../../assets/kisspng-ford-motor-company-logo-car-ford-custom-5b74d9bda2b754.8529003615343845736665.png";
import hyundai from "../../assets/kisspng-hyundai-motor-company-hyundai-accent-car-hyundai-e-logo-design-5ac0b7e5e98f30.2036571715225794299567.png";
import pizza from "../../assets/kisspng-pizza-hut-wingstreet-the-pizza-company-logo-pizza-hut-logos-download-5ca6865f251259.4227281515544172471519.png";
import toyota from "../../assets/kisspng-toyota-car-company-logo-corporation-5afad17f2ee5d5.5573603815263870711921.png";
import udemay from "../../assets/kisspng-udemy-inc-company-logo-california-udemy-logo-svg-vector-amp-png-transparent-vect-5ba41f2bef1d03.7576467015374825399794.png";
import mercedes from "../../assets/mercedes.png";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
  return (
    <section className="container">
      <h3 className="text-center fw-bolder my-5">Our Sponsor</h3>
      <Marquee>
        <img style={{ width: "150px" }} className="me-5" src={ford} alt="" />
        <img
          style={{ width: "150px" }}
          className="me-5"
          src={cokacola}
          alt=""
        />
        <img style={{ width: "150px" }} className="me-5" src={hyundai} alt="" />
        <img style={{ width: "150px" }} className="me-5" src={pizza} alt="" />
        <img style={{ width: "150px" }} className="me-5" src={toyota} alt="" />
        <img style={{ width: "150px" }} className="me-5" src={udemay} alt="" />
        <img
          style={{ width: "150px" }}
          className="me-5"
          src={mercedes}
          alt=""
        />
      </Marquee>
    </section>
  );
};

export default Sponsor;
