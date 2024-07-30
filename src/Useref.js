import React, { useState, useRef, useEffect } from "react";

export default function Useref() {
  const [count, setCount] = useState("");
  const value = useRef(0);
  const inputEle = useRef("");

  useEffect(() => {
    // This block of code will run after every render
    //used to directly interact wuth DOM elements
    console.log("use effect ");
    if (inputEle.current.focus) {
      // This block of code will only run once, after the first render
      console.log("Component is mounted (equivalent to componentDidMount)");
    }
  });

  function changeInput() {
    console.log("value", inputEle);
    inputEle.current.focus();
    console.log("inputelement", inputEle.current.value);
    inputEle.current.style.backgroundColor = "purple";
    inputEle.current.value="changed"

    //as the inputEle which has ref is changing on button click but it is not causing component renders
    //if it was state it will re-render
  }

  //mainly 2 use cases of userRef:
  // 1 .accessing directly with DOM instead of using document.getElementByID , getElementByClass etc
  // 2 .persist values and not causing re-renders as state does
  return (
    <>
      <input
        type="text"
        ref={inputEle}

      ></input>
      <button onClick={changeInput}>Click here</button>
      {count}
      {/* <h2>Value using ref - {value.current}</h2> */}
    </>
  );
}
