/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Pdf from "react-to-pdf";
import { FaFileDownload } from "react-icons/fa";

const Blogs = () => {
  const ref = React.createRef();
  return (
    <div className="container my-12 md:my-20">
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
      <div className="mt-6 px-6" ref={ref}>
        <h1 className="text-center mb-5 text-3xl font-semibold">
          Question & Answer
        </h1>
        <div className="space-y-4 divide-y-2">
          <div>
            <h2 className="text-2xl font-medium mb-2">
              Tell us the differences between uncontrolled and controlled
              components.
            </h2>
            <p className="text-orange-600">
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
             NodeJs is a Javascript run time . which is use server side to run our javascript code.
             <br />
             express Js is node js framework . which enables developers to run Node on the server

            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              repudiandae doloremque iure. Incidunt quis perferendis eaque vitae
              error explicabo enim deleniti nam culpa eos, doloribus tenetur ad,
              magni quas soluta!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
