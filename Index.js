import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
