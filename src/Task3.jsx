import React, { useState } from "react";

function Task3() {
  const ary = [
    "anjali",
    "aarav",
    "krish",
    "naman",
    "rohit",
    "rahul",
    "keshav",
    "vinod",
    "lakshay",
  ];
  const [inputval, changeinputval] = useState("");
  const [outputval, changeoutputval] = useState([]);

  function e(event) {
    b();
    let v = event.target.value;
    v = v.toLowerCase();

    changeinputval(v); // Update the input value state
    console.log(v);
    let lst = [];
    for (let k = 0; k < ary.length; k++) {
      let s = ary[k];
      s.toLowerCase();
      if (ary[k].startsWith(v)) {
        lst.push(ary[k]);
      }
    }
    if (lst.length == 9) {
      b();
    } else {
      changeoutputval(lst);
    } // Update the output value state
  }

  function b() {
    changeoutputval([]);
  }

  return (
    <div>
      <h3>
        <b>
          THERE IS A ARRAY THAT CONTAIN MULTIPLE NAMES , SEARCH BY TYPING IN THE
          INPUT BOX
        </b>
      </h3>
      <label>
        {" "}
        Enter name here :
        <input
          type="text"
          value={inputval}
          onChange={e}
          onBlur={b}
          onblank={b}
        ></input>
      </label>
      <button onClick={b}> Remove </button>
      <h3>
        {outputval.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </h3>
    </div>
  );
}

export default Task3;
