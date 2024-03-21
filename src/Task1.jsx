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
function Task1() {
  return (
    <>
      <App />

      <Records />
      <ShowHide />

      <DataBinding />
      <DynamicAdd />
      <Cal />
      <EnableDisable />
    </>
  );
}
export default Task1;
