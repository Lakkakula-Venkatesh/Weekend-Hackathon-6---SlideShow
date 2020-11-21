import React, { Component, useState } from "react";
import "../styles/App.css";
import Slidespage from "./Slidespage";

const App = ({slides}) => {

  return (
    <Slidespage array={slides} />
  );
};

export default App;
