import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-body">
      <Header />
      <Home />
      <Presentation />
      <Projects />
    </div>
  </React.StrictMode>
);
