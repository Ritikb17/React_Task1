import React, { useState } from "react";

function Task2() {
  const [count, setCount] = useState(0);

  return (
    <div id="box1">
      <h1>
        <p>Count: {count}</p>
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Task2;
