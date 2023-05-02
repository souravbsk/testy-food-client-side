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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            asperiores dolores, nisi enim fugit a facilis, optio qui magnam
            neque, delectus quam ducimus atque laborum repellat adipisci quos
            doloremque! Nemo.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2"> How to validate React props using PropTypes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ab!
            Voluptate voluptates eum iste, error impedit quod, nobis optio
            recusandae doloribus autem veritatis. Obcaecati, earum excepturi
            modi doloremque porro hic vitae pariatur aliquam illum velit
            laudantium magni rerum officia, voluptatum quae. Reprehenderit, rem
            quisquam. Voluptatum illo quo numquam dolore beatae!
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2">Tell us the difference between nodejs and express js.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            accusamus assumenda distinctio maiores nihil. Ipsam accusantium
            atque ratione ducimus adipisci. Facere quaerat rerum nobis harum
            magni sit in? In, illum?
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2">What is a custom hook, and why will you create a custom hook?</h2>
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
