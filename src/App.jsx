import { useState } from "react";
import "./App.css";

//here we import all the components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dark:bg-gray-900 bg-center">
      <Header />
      <div>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
