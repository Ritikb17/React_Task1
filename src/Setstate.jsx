import React, { useState } from "react";

function Setstate() {
  const [count, SetCount] = useState(0);

  const increment = () => {
    SetCount(count + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}> increase</button>
    </>
  );
}

export default Setstate;
