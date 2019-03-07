import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const MyTestComponent = ({ onTestChange }) => (
  <div>
    <h2>Fake Input thinger</h2>
    <input type="text" onChange={onTestChange} />
  </div>
);

function App() {
  const [myVal, updateMyVal] = useState("... start typing!");
  return (
    <div className="App">
      <h1>Debugging Example</h1>

      <MyTestComponent onTestChange={updateMyVal} />
      <h2>Test Value: </h2>
      <h3>{myVal}</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
