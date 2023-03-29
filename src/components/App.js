import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const button = document.getElementById("click");
  const para = document.getElementById("para");

  button.addEventListener("click", function() {
  para.classList.remove("hide");
  para.classList.add("show");
});

  return (
    <div className="App" id="main">
      // Do not alter the main div
      <button id="click">Click me</button>
      <p id="para" class="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
