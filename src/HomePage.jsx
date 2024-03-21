import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import { BrowserRouter as Router } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  const t1 = () => {
    navigate("/task1");
  };

  const t2 = () => {
    navigate("/task2");
  };
  const t3 = () => {
    navigate("/task3");
  };

  return (
    <div id="buttons">
      <button onClick={t1}>TASK1 </button>
      <button onClick={t2}>TASK 2</button>
      <button onClick={t3}>TASK 3</button>
      {
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
      }
    </div>
  );
}

export default HomePage;
