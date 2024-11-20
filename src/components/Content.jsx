import React from "react";
import imageIlutrative from "../assets/Images/image.jpg";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../assets/Docs/resume.pdf";
import image from "../assets/images/daniel.jpg";

const Content = () => {
  return (
    <div className="hero min-h-full bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="max-w-sm rounded-lg shadow-2xl"
          src={image}
          alt="Logo"
          width="500"
        />
        <div className=" text-center w-10/12">
          <div className="text-5xl flex justify-center">
            <h2 className="font-bold">
              Hi, my name is{" "}
              <font className="text-amber-700 uppercase">Daniel alfaro</font>
            </h2>
          </div>

          <p className="py-6">
            Welcome to my web page, my name is Daniel Alfaro Alfaro. I am
            software developer, here you can reed someting about my experience,
            skills, etc.
          </p>
          <div className="w-12/12 m-1 mb-3 flex">
            <div className="w-6/12 flex justify-end pr-2">
              <Button
                className="pr-2"
                color="warning"
                variant="outlined"
                endIcon={<DownloadIcon />}
              >
                <a href={resume} download="Resume Daniel Alfaro">
                  Resume
                </a>
              </Button>
            </div>
            <div className="w-6/12 flex justify-start">
              <Button
                color="warning"
                variant="outlined"
                startIcon={<DownloadIcon />}
              >
                Cover Letter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
