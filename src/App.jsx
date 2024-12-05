import { useState } from "react";
import "./App.css";

//here we import all the components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Skills from "./components/Skills";
import resume from "./assets/Docs/resume.pdf";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black bg-center text-white">
      <Header />
      <div>
        <Content />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-5/12 md:w-32 lg:w-48 pt-2 pb-2 flex">
          <div className="w-16 md:w-32 lg:w-48 justify-start flex ">
            <p>Nombre: </p>
          </div>
          <div className="pl-3 w-18 md:w-32 lg:w-48 ">
            <p>Daniel Alfaro ALfaro </p>
          </div>
        </div>

        <div className="w-5/12 md:w-32 lg:w-48 pt-2 pb-2">
          <h1 className="text-justify">
            <p className="text-center text-5xl">OBJETIVE</p>
            <br></br>
            Using the tools and knowledge required for my profession, with the
            purpose of helping companies to reach their goals and meet the
            requirements necessary. By contributing my skills as well as
            learning for others. In order, to find a successful, and mutual
            agreement. In result, give me the opportunity to grow as a person
            and as an engineer. (Looking for employment opportunities in
            Software Development/Engineering).
          </h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
