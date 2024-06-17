import React from "react";
import imageIlutrative from "../assets/Images/image.jpg";

const Content = () => {
  return (
    <div className="hero min-h-full bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="max-w-sm rounded-lg shadow-2xl"
          src="https://w0.peakpx.com/wallpaper/988/361/HD-wallpaper-landscape-city-vertical-sky-clouds-sunlight-dark-palm-trees-urban-street-lantern-blue-orange.jpg"
          width="300"
        />
        <div className="text-center w-10/12">
          <h1 className="text-5xl font-bold">Hi, I Am A Software Engineer</h1>
          <p className="py-6">
            Welcome to my web page, my name is Daniel Alfaro Alfaro. I am
            software developer, here you can reed someting about my experience,
            skills, etc.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
