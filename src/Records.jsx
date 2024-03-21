import React, { useState } from "react";

function Records() {
  const ary = [
    { id: 1, Name: "Abhi", Work: "Developer" },
    { id: 1, Name: "aarav", Work: "Developer" },
    { id: 2, Name: "Sumit", Work: "social media manager" },
    { id: 2, Name: "sagar", Work: "social media manager" },
    { id: 3, Name: "Kumar", Work: "Editor" },
    { id: 3, Name: "keshav", Work: "Editor" },
    { id: 4, Name: "Ishi", Work: "designer" },
    { id: 4, Name: "vandana", Work: "manager" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [foundData, setFoundData] = useState(null);
  const [Nameis, changeNameis] = useState("");
  const [Workingas, changeWorkingas] = useState("");
  const [msg, setmsg] = useState("");

  const handleChange = (event) => {
    setFoundData(null);
    const newInputValue = event.target.value.toLowerCase();
    setInputValue(newInputValue);

    const filteredData = ary.find((item) =>
      item.Name.toLowerCase().startsWith(newInputValue)
    );

    if (filteredData) {
      setFoundData(filteredData);
      setmsg("");
      changeNameis("Name is:");
      changeWorkingas("Working as:");
    } else {
      setFoundData("No data ");
      changeNameis("");
      changeWorkingas("");
      setmsg("Not data found");
    }
  };

  const clearSearch = () => {
    setInputValue("");
    setFoundData(null);
  };

  return (
    <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <i>
        <b>
          <u>This is the 2nd task</u>
        </b>
      </i>
      <br />
      <h4>Get Information</h4>
      <label>
        Search:
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={clearSearch}>Clear</button>
      </label>
      <br></br>
      {msg}
      {foundData && ( // Conditionally render result only if foundData is not null
        <p>
          {Nameis}
          {foundData.Name}
          <br />
          {Workingas} {foundData.Work}
        </p>
      )}

      <h7>
        *You can search for Abhi, Kumar,vandana,sagar,aarav, Ishi, and Sumit.
        Information will be displayed above.*
      </h7>
    </div>
  );
}

export default Records;
