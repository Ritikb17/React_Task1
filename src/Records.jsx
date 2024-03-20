import React, { useState } from "react";

function Records() {
  const ary = [
    { id: 1, Name: "Abhi", Work: "Developer" },
    { id: 1, Name: "abhi", Work: "Developer" },
    { id: 2, Name: "Sumit", Work: "social media" },
    { id: 2, Name: "sumit", Work: "social media" },
    { id: 3, Name: "Kumar", Work: "Editor" },
    { id: 3, Name: "kumar", Work: "Editor" },
    { id: 4, Name: "Ishi", Work: "designer" },
    { id: 4, Name: "ishi", Work: "designer" },
  ];

  // Initialize LookingFor with an empty string to ensure initial state is captured
  const [inputValue, setInputValue] = useState("");
  const [Name, setName] = useState("");
  const [Work, setWork] = useState("");
  const [foundData, setfounddata] = useState({});

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setfounddata("");
    setName("");
    setWork("");
    for (let i = 0; i < 4; i++) {
      if (ary[i].Name == inputValue) {
        setfounddata(ary[i]);
        setName("Name is ");
        setWork("Working as ");
      }
    }
  };
  function Clear() {
    setfounddata("");
    setName("");
    setWork("");
  }

  return (
    <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <i>
        <b>
          <u>This is the 2nd task</u>
        </b>
      </i>
      <br></br>
      <h4>Get Information</h4>
      <label>
        Search:
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={Clear}>Clear</button>
      </label>

      <p>
        {Name}
        {foundData.Name}
        <br></br>
        {Work}
        {foundData.Work}
      </p>
      <h7>
        *You can search for Abhi , Kumar ,Ishi and Sumit ,information will be
        displayed above *
      </h7>
    </div>
  );
}

export default Records;
