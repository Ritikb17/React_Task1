import React, { useState } from "react";
function DataBinding() {
  const [value, changevalue] = useState("");
  const change = (event) => {
    changevalue(event.target.value);
  };
  return (
    <>
      <i>
        <b>
          <u>This is the 4th task</u>
        </b>
      </i>
      <br></br>
      <label>
        <h4>
          <u>ENTER TEXT YOU WANT TO DISPLAY </u>:
        </h4>
        <input type="text" onChange={change}></input>
      </label>
      <br></br>
      Text will be display below:
      <h2>{value}</h2>
    </>
  );
}
export default DataBinding;
