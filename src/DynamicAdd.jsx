import React, { useState } from "react";

function DynamicAdd() {
  const intialary = [{ First_name: "Rohan", Last_name: "Singh" }];

  const [ary, setary] = useState(intialary);
  let [info, setInfo] = useState([]);
  let [newinfo, setnewinfo] = useState([]);
  let [msg, changemsg] = useState("Click to get the data");
  const [bool, changebool] = useState(true);
  const [new_First_name, setNewFirstName] = useState("");
  const [new_Last_name, setNewLastName] = useState("");
  const [First_name, setFirst] = useState("");
  const [Last_name, setLast] = useState("");

  const handleFirstNameChange = (event) => {
    setNewFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setNewLastName(event.target.value);
  };

  const showInfo = () => {
    if (bool) {
      setInfo(ary);
      setFirst("First Name:");
      setLast("Last Name:");
      console.log(info);
      changemsg("Click to hide the data ");
      changebool(false);
    } else {
      setFirst("");
      setLast("");
      setInfo([]);
      changebool(true);
      changemsg("Click to get the data ");
    }
  };

  const remove = () => {
    setFirst("");
    setLast("");
    setInfo([]);
    console.log("final array", ary);
  };

  const AddToArray = () => {
    if (new_First_name == "" || new_Last_name == "") {
      window.alert("Invalid input");
      return 0;
    }
    const newItem = { First_name: new_First_name, Last_name: new_Last_name };
    const newArray = [...ary, newItem]; // Create a new array by adding the newItem to ary
    console.log("new array ", newArray);
    // setnewinfo(newArray);
    // console.log(info); // Update the state variable info
    setary(newArray);
    console.log("latest array ->", ary); // Update the ary variable
  };

  return (
    <div style={{ backgroundColor: "AliceBlue", padding: "10px" }}>
      <div>
        <i>
          <b>
            <u>This is the 5th task</u>
          </b>
        </i>
        <br></br>
        <label>
          {" "}
          <h4>
            <u>ADD INFORMATION DYNAMICALLY </u>
          </h4>
        </label>
        <br></br>
        <label>
          First_Name :{" "}
          <input
            type="Text"
            value={new_First_name}
            onChange={handleFirstNameChange}
          ></input>
        </label>
        <label>
          Last_name :{" "}
          <input
            type="Text"
            value={new_Last_name}
            onChange={handleLastNameChange}
          ></input>
        </label>
        <br></br>
        <label> Add to array </label> <button onClick={AddToArray}>Add</button>
      </div>
      <div>
        <br></br>

        <br></br>
        <button onClick={showInfo}>{msg} </button>

        {info.map((item, index) => (
          <div key={index}>
            <h5>
              {First_name}
              {item.First_name}
            </h5>
            <h5>
              {Last_name}
              {item.Last_name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicAdd;
