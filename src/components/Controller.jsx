import React, { useState } from "react";

const Controller = () => {
  const [passwords, setPasswords] = useState([]);

  const addPassword = () => {
    const channel = new BroadcastChannel("password_panel");
    setCounter(counter + 1);
    channel.postMessage(counter);
  };

  return (
    <>
      <button onClick={addPassword}>+1</button>
    </>
  );
};

export default Controller;
