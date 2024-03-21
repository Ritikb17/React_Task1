import React, { useState } from "react";

function ShowHide() {
  const status = false;
  const [isShowing, setIsShowing] = useState(status); // Use descriptive variable names
  const [buttonmsg, changebuttonmsg] = useState("CLICK ME TO SEE MESSAGE ");
  const handleEnable = () => {
    setIsShowing(!isShowing);
    if (!isShowing) {
      changebuttonmsg("CLICK ME TO HIDE MESSAGE ");
    } else {
      changebuttonmsg("CLICK ME TO SEE MESSAGE ");
    }
  };

  const message = "NOW YOU CAN SEE ME!"; // Use a constant for the message

  return (
    <div style={{ backgroundColor: "AliceBlue", padding: "10px" }}>
      <i>
        <b>
          <u>This is the 3rd task</u>
        </b>
      </i>
      <br></br>
      {isShowing && <p>{message}</p>} {/* Concise conditional rendering */}
      <button onClick={handleEnable}>{buttonmsg}</button>
    </div>
  );
}

export default ShowHide;
