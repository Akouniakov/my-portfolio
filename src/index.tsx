import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "./components/Contact";
import Header from "./components/shared/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/shared/Footer";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-body">
      <Header />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>
);
