import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
