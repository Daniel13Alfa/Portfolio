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
        <div className="w-10/12 pt-2 pb-2">
          <h1 className="text-justify">
            <p className="text-center text-5xl">
              My Goal as a Software Developer
            </p>
            <br></br>I strive to utilize the tools and knowledge required for my
            profession to help companies achieve their goals and meet essential
            requirements. By contributing my skills and expertise while learning
            from others, I aim to foster a successful and mutually beneficial
            collaboration. Ultimately, my goal is to create opportunities that
            allow me to grow both personally and professionally as a software
            engineer. Currently, I am seeking employment opportunities in
            Software Development/Engineering where I can contribute to
            meaningful projects and continue to develop my skills.
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
