import React, { useState } from "react";

function Cal() {
  const [val1, setVal1] = useState(0); // Initialize val1 with 9
  const [val2, setVal2] = useState(0); // Initialize val2 with 8
  const [result, changeresult] = useState(0);
  const add = () => {
    // console.log(val1 + val2);

    changeresult(val1 + val2);
  };

  const handleVal1Change = (event) => {
    setVal1(parseFloat(event.target.value)); // Update val1 using setVal1
  };

  const handleVal2Change = (event) => {
    setVal2(parseFloat(event.target.value)); // Update val2 using setVal2
  };

  return (
    <>
      <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
        <i>
          <b>
            <u>This is the 6th task</u>
          </b>
        </i>
        <br></br>
        <label>
          Value 1 <input id="v1" type="number" onChange={handleVal1Change} />
        </label>
        <label>
          Value 2 <input id="v2" type="number" onChange={handleVal2Change} />
        </label>
        <button onClick={add}>CALCULATE</button>
        <br></br>
        <label>
          Sum is : <div style={{ backgroundColor: "white" }}>{result}</div>
        </label>
      </div>
    </>
  );
}

export default Cal;
