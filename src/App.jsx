import { useState } from "react";
import "./App.css";

//here we import all the components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return <div className="bg-black bg-center text-white"></div>;
}

export default App;
