import React from "react";
import Header from "./Header";
import imageIlutrative from "../assets/Images/diagrama_rest.png";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="dark:bg-black text-white w-12/12 ">
      <Header />
      <br></br>
      <div className="justify-items-center">
        <div className="flex card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
      <h1>Hi this is Projects</h1>
      <a href="https://daniel13alfa.github.io/HospitalWeb/"> my web</a>
      <Footer />
    </div>
  );
};
export default About;
