import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Components/Header.js";
import Nav from "./Components/NavBar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Nav />

    <Header />
    <App />
  </div>
);
