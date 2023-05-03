/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Pdf from "react-to-pdf";
import { FaFileDownload } from "react-icons/fa";

const Blogs = () => {
  const ref = React.createRef();
  return (
    <div className="my-12 md:my-20">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <div className="text-center">
            <button className="btn" onClick={toPdf}>
              <span className="text-lg me-2 text-red-500">
                <FaFileDownload></FaFileDownload>
              </span>{" "}
              Download Pdf
            </button>
          </div>
        )}
      </Pdf>
      <div className=" container mt-6 px-6" ref={ref}>
        <h1 className=" mb-5 text-3xl font-semibold">
          Question & Answer
        </h1>
        <div className="space-y-4 divide-y-2">
          <div>
            <h2 className="text-2xl font-medium mb-2">
              Tell us the differences between uncontrolled and controlled
              components.
            </h2>
            <p>
              In React, these concepts apply to form elements such as input,
              textarea, and select.
              <ul>
                <li>
                  Uncontrolled components are like regular HTML form elements,
                  where the browser handles the state of the input element. You
                  set an initial value for the input using the value or
                  defaultValue attribute, and then the browser updates the state
                  of the input element as the user interacts with it. You can
                  get the value of the input using a ref to access the DOM node.
                </li>
                <li>
                  Controlled components are React components that manage the
                  state of the input element. You set the initial value of the
                  input using the component's state, and then update the state
                  of the component in response to user input using an onChange
                  handler. You can get and set the value of the input using the
                  component's state.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2">
              {" "}
              How to validate React props using PropTypes
            </h2>
            <p>
              Props type is a react built in type checker. we can use it to define props specific data type. it help us also debugging.
              When we can use proptype to define props specific data type , you can't pass other data type. You must pass the define data type. either you got an error;
              we can use it validation purpose .
              basically we use this children component . where we pass props value.
              first import PropTypes from "prop-types"
              after import we need to add children component with propstype property. like ComponentName.propstype =. now define the specific data type each props in curly bracket . definitely we define proptype like key-value .

              <br />
              example :
              proposName : propType.string


            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2">
              Tell us the difference between nodejs and express js.
            </h2>
            <p>
             NodeJs is a Javascript run time . Node.js is an open source and cross-platform runtime environment for executing JavaScript code. node js built with chrome v8 engine source code. and also some c++ code. controller are not provided . routing is not also  provided. it 
             Uses a non-blocking, event-driven I/O model, single-threaded model,Efficient for processing multiple requests with less CPU usage
             <br />
             express Js is node js framework . which is a smaller framework that  built on top of Node.js. Provides a set of features and tools that make it easier to build web applications and APIs. is designed to used very flexible way. if we compare it to nede js.. express is easier to learning.
             Express js Provide way to handle HTTP requests, define routes, and manage middleware. it Written by Javascript

            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>
              when we have a login which is need to be used by multiple component. we can write that logic to custom Hook . react have my build hook like useState, useEffect, useRef etc
              . but custom code create a developer. for his need. custom hook start with use . Example : useDuplicate.
              <br />
              There are many reasons to create a custom hook such as:
              <ul>
                <li>it's avoiding duplicate code.</li>
                <li>Custom hook can make  code easier to read and maintain.</li>
                <li>Custom hooks can make your code more testable by separating concerns and reducing the amount of code you need to test.</li>
                <li> This can improve the reliability and quality of your code.</li>
                  <li>which can make your components more focused on their core functionality.</li>

              </ul>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
