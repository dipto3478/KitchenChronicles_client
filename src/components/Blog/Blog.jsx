import React, { useRef } from "react";

import { PDFExport } from "@progress/kendo-react-pdf";

const Blog = () => {
  const pdfExportComponent = useRef();
  return (
    <section className="container h-100 d-flex flex-column align-items-center justify-content-center ">
      <PDFExport
        ref={pdfExportComponent}
        paperSize="A4"
        margin="2cm"
        repeatHeaders={true}
      >
        <article className="my-5">
          <div>
            <h4>
              Tell us the differences between uncontrolled and controlled
              components.
            </h4>
            <p>
              In React, controlled components refer to components that have
              their state and behavior controlled by the parent component. These
              components rely on props passed down from the parent component to
              update their state and behavior. Uncontrolled components refer to
              components that manage their own state internally. They use a ref
              to access the DOM element's current value and update the state
              accordingly.
            </p>
          </div>
          <div>
            <h4> How to validate React props using PropTypes?</h4>
            <p>
              {" "}
              React provides a PropTypes library to validate the props passed to
              a component. PropTypes is a runtime type checking library that
              ensures that the props received by a component conform to the
              expected data type and shape.
            </p>
          </div>
          <div>
            <h4>Tell us the difference between nodejs and express js.</h4>
            <p>
              Node.js is a platform for building the i/o applications which are
              server-side event-driven and made using JavaScript. Express.js is
              a framework based on Node.js which is used for building
              web-application using approaches and principles of Node.js
              event-driven architecture.
            </p>
          </div>
          <div>
            <h4>
              What is a custom hook, and why will you create a custom hook?
            </h4>
            <p>
              Custom React JS hooks offer reusability as when a custom hook is
              created, it can be reused easily, which makes the code cleaner and
              reduces the time to write the code. It also enhances the rendering
              speed of the code as a custom hook does not need to be rendered
              again and again while rendering the whole code.
            </p>
          </div>
        </article>
      </PDFExport>
      <button
        className="btn btn-info mb-5"
        onClick={() => pdfExportComponent.current.save()}
      >
        Download PDF
      </button>
    </section>
  );
};

export default Blog;
