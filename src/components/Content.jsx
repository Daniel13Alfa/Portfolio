import React from "react";
import imageIlutrative from "../assets/Images/image.jpg";

const Content = () => {
  return (
    <div className="pt-5 pb-20 min-h-full bg-black">
      <div className="text-center hero-content flex-col lg:flex-row-reverse">
        <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/vector-gratis/ilustracion-concepto-programacion_114360-1351.jpg?size=626&ext=jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Develop Frontend software solutions
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/vector-gratis/fondo-ingenieria-software_1284-3394.jpg?size=626&ext=jpg&ga=GA1.1.389922818.1697063589&semt=ais"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Develop Backend software solutions
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/vector-gratis/concepto-procesamiento-flujo-datos-grandes-base-datos-nube_39422-458.jpg?size=626&ext=jpg&ga=GA1.1.389922818.1697063589&semt=ais"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Basic database sknowledge
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold ">
            Software Developer, Full Stack
          </h1>
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
