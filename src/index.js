import React from "react";
import a from "./App.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <HomePage />
    </Router>
  </React.StrictMode>
);
