import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Components/Header.js";
import Nav from "./Components/NavBar.js";

/*Here Create a Root is a #root Id From the Index.html */
const root = ReactDOM.createRoot(document.getElementById("root"));
/*Here Control & Manege The Roots */
root.render(
  <div>
    <Nav />
    <Header />
    <App />
  </div>
);
