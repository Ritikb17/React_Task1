import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ShowHide from "./ShowHide";
import Content from "./Simple";
import Records from "./Records";
import DataBinding from "./Databinding";
import DynamicAdd from "./DynamicAdd";
import Cal from "./Cal";
import EnableDisable from "./EnableDisable";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//
//     <App />
//
//   </Provider>
// );

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <Records />
    <ShowHide />

    <DataBinding />
    <DynamicAdd />
    <Cal />
    <EnableDisable />
  </React.StrictMode>
);
