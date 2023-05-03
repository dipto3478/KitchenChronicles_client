import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <section
      style={{ height: "calc(100vh - 100px)" }}
      className="container d-flex justify-content-center "
    >
      <article className="w-50 my-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Tell us the differences between uncontrolled and controlled
              components.
            </Accordion.Header>
            <Accordion.Body>
              In React, controlled components refer to components that have
              their state and behavior controlled by the parent component. These
              components rely on props passed down from the parent component to
              update their state and behavior. Uncontrolled components refer to
              components that manage their own state internally. They use a ref
              to access the DOM element's current value and update the state
              accordingly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How to validate React props using PropTypes?
            </Accordion.Header>
            <Accordion.Body>
              React provides a PropTypes library to validate the props passed to
              a component. PropTypes is a runtime type checking library that
              ensures that the props received by a component conform to the
              expected data type and shape.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Tell us the difference between nodejs and express js.
            </Accordion.Header>
            <Accordion.Body>
              Node.js is a platform for building the i/o applications which are
              server-side event-driven and made using JavaScript. Express.js is
              a framework based on Node.js which is used for building
              web-application using approaches and principles of Node.js
              event-driven architecture.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is a custom hook, and why will you create a custom hook?
            </Accordion.Header>
            <Accordion.Body>
              Custom React JS hooks offer reusability as when a custom hook is
              created, it can be reused easily, which makes the code cleaner and
              reduces the time to write the code. It also enhances the rendering
              speed of the code as a custom hook does not need to be rendered
              again and again while rendering the whole code.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
    </section>
  );
};

export default Blog;
