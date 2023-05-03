import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <section className="container py-5">
        <article className="d-flex flex-column justify-content-center align-items-center">
          <h3>Contact us</h3>
          <p>
            If you want to know more about our latest cake parties and special
            discount offers, please subscribe below form and we’ll send you a
            mail once a week.
          </p>
          <div className="d-flex align-items-center gap-3">
            <input
              className="py-1 "
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
            <button className="btn btn-success">Subscribe</button>
          </div>
        </article>
      </section>
      <section style={{ borderTop: "2px solid white" }} className="container  ">
        <article className="row py-3 ">
          <div className="col-12 col-md-6">
            <p> Copyright 2023. Designed by DD Designs.</p>
          </div>
          <div className="col-12 col-md-6">
            <ul className="d-flex gap-3 align-items-center list-unstyled justify-content-end">
              <li className="fw-bold">Follow Us </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaWhatsapp />
              </li>
            </ul>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
