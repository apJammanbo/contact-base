import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { registerObserver } from "react-perf-devtool";
console.log(registerObserver);
registerObserver();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
