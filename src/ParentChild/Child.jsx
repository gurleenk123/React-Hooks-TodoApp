import React from "react";
import { useEffect, useState } from "react";

export default function Child({ passParentData }) {
  const [input, setInput] = useState("");

  function passDataToParent(e) {
    passParentData(input);
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={passDataToParent}>Pass data </button>
    </>
  );
}
