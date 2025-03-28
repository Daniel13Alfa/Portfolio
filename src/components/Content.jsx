import React from "react";
import imageIlutrative from "../assets/Images/image.jpg";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import imagenD from "./daniel.jpg";

const Content = () => {
  return (
    <div className="hero min-h-full bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Logo"
          src={imagenD}
          width="500"
        />
        <div className=" text-center w-12/12">
          <div className="text-5xl flex justify-center">
            <h2 className="font-bold">
              Hi, my name is{" "}
              <font className="text-amber-700 uppercase">Daniel alfaro</font>
            </h2>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-10/12 py-6 text-center">
              <h1 className="text-justify">
                Welcome to My Web Page! I am a software developer with a passion
                for creating innovative solutions and improving the digital
                experience. On this page, you can learn more about my
                professional journey, skills, and the projects I've worked on.
                Feel free to explore the sections to understand my expertise,
                experience, and the technologies I specialize in. Whether you're
                interested in my coding proficiency, problem-solving abilities,
                or previous work, I hope this page gives you a deeper insight
                into what I can offer. Thank you for visiting!
              </h1>
            </div>
          </div>
          <div className="w-11/12 pt-2 pb-2 flex justify-center">
            <div className="w-31 md:w-35 lg:w-45 justify-items-start">
              <p>Name: </p>
              <p>Date of birth:</p>
              <p>Address:</p>
              <p>Email:</p>
              <p>Phone:</p>
            </div>
            <div className="pl-3 w-35 md:w-35 lg:w-45 justify-items-start">
              <p>Daniel Alfaro Alfaro </p>
              <p>09/22/1995</p>
              <p>Atlanta Georgia USA</p>
              <p>alfaro-13@hotmail.com</p>
              <p>404-596-2488</p>
            </div>
          </div>
          <div className="w-12/12 m-1 mb-3 flex">
            <div className="w-6/12 justify-items-end">
              <div className="w-30 md:w-60 lg:w-80 flex justify-end pr-2">
                <Button
                  className="pr-2"
                  color="warning"
                  variant="outlined"
                  endIcon={<DownloadIcon />}
                >
                  Resume
                </Button>
              </div>
            </div>
            <div className="w-6/12">
              <div className="w-30 md:w-60 pl-2 lg:w-80 flex justify-start">
                <Button
                  color="warning"
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                >
                  C Letter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
