import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Experience = () => {
  return (
    <div className="bg-black bg-center text-white">
      <Header />
      <p className="text-center text-5xl">Experience & Education</p>
      <br></br>
      <div className="w-full">
        <div className=" content-center w-12/12 pt-2 ">
          <h1 className="text-center">
            Using the tools and knowledge required for my profession, with the
            purpose of helping companies to reach their goals and meet the
            requirements necessary. By contributing my skills as well as
            learning for others. In order, to find a successful, and mutual
            agreement. In result, give me the opportunity to grow as a person
            and as an engineer. (Looking for employment opportunities in
            Software Development/Engineering).
          </h1>
        </div>
        <br></br>
        <div className="flex">
          <div className="w-6/12"></div>
          <div className="w-6/12 rounded-xl  hover:bg-gray-950 first-line:hover:text-red-500 pr-4">
            <div className="justify-items-end">
              <div className="text-center text-3xl w-8/12 ">
                <h1>SANTANDER</h1>
              </div>
            </div>
            <br></br>
            <div className="flex">
              <div className="w-4/12 rounded-xl pl-4">
                <h1 className="text-xl">2024 - present</h1>
              </div>
              <div className="w-8/12 rounded-xl">
                <h2 className="text-center">
                  Using the tools and knowledge required for my profession, with
                  the purpose of helping companies to reach their goals and meet
                  the requirements necessary. By contributing my skills as well
                  as learning for others. In order, to find a successful, and
                  mutual agreement. In result, give me the opportunity to grow
                  as a person and as an engineer. (Looking for employment
                  opportunities in Software Development/Engineering).
                </h2>
              </div>
            </div>
          </div>
        </div>
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
      </div>
      <Footer />
    </div>
  );
};
export default Experience;
