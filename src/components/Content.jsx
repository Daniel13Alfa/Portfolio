import React from "react";
import imageIlutrative from "../assets/Images/image.jpg";

const Content = () => {
  return (
    <div className="hero min-h-full dark:bg-gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="max-w-sm rounded-lg shadow-2xl"
          src={imageIlutrative}
          width="300"
        />
        <div>
          <h1 className="text-5xl font-bold ">
            Software Developer, Full Stack
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
