import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-body">
      <Header />
    </div>
  </React.StrictMode>
);
