import React, { useState } from "react";

function EnableDisable() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [message, setMessage] = useState("Click to Enable Next Button");

  const handleClick = () => {
    setIsEnabled(!isEnabled);
    setMessage(
      isEnabled
        ? "Click to disable secound button"
        : "Click to Enable Next Button"
    );
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
      <button
        disabled={!isEnabled}
        style={{ display: !isEnabled ? "none" : "block" }}
      >
        This is the second button
      </button>
    </div>
  );
}

export default EnableDisable;
