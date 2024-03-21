import React, { useState } from "react";

function EnableDisable() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [message, setMessage] = useState("Click to Enable Next Button");
  const [msg, cgemsg] = useState("");

  const handleClick = () => {
    setIsEnabled(!isEnabled);
    cgemsg("");
    setMessage(
      isEnabled
        ? "Click to Enable secound button"
        : "Click to Disable Next Button"
    );
  };
  const seemsg = () => {
    if (isEnabled) {
      cgemsg("YOU JUST CLICKED ON THE SECOUND BUTTON");
    }
  };

  return (
    <div style={{ backgroundColor: "aquamarine", padding: "10px" }}>
      <i>
        <b>
          <u>This is the 7th task</u>
        </b>
      </i>
      <br />
      <button onClick={handleClick}>{message}</button>
      <button disabled={!isEnabled} onClick={seemsg}>
        ENABLED, CLICK ME !!
      </button>
      <p>{msg}</p>
    </div>
  );
}

export default EnableDisable;
