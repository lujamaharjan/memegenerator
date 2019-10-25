import React from "react";
import Header from "./components/Header";
import Memes from "./components/Memes";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function App() {
  return (
    <div className="card bg-danger" id="wrapper">
      <Header />
      <Memes />
    </div>
  );
}

export default App;
