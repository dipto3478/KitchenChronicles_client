import React from "react";
import { useRouteError } from "react-router-dom";
import image from "../../assets/error.jpg";

const ErrorPage = () => {
  const { error, state } = useRouteError();
  console.log(error);

  return (
    <section className="container">
      <article
        style={{ height: "100vh" }}
        className="row d-flex align-items-center justify-content-center gap-md-0 gap-3"
      >
        <div className="col-12 col-md-6 text-danger text-center">
          <h1 className="fw-bolder ">Oops!</h1>
          <h3>
            <span>Error</span> {state || 404}
          </h3>
          <p>{error?.message}</p>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
        <div className="col-12 col-md-6">
          <img className="img-fluid" src={image} alt="error img" />
        </div>
      </article>
    </section>
  );
};

export default ErrorPage;
