import React, { useState, useEffect } from "react";

export default function Useeffect() {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Function component");
  function handleclick() {
    setMessage("Changed component")
  }
  useEffect(() => {
    console.log('component mounted or updated');
  })

  useEffect(() => {
    console.log('Time updated');
    // The return statement is for componentWillUnmount
    return () => console.log('component will unmount')
  }, [time]);

  useEffect(() => {
    console.log('componentDidUpdate');  // will work once initially only
  }, []);


  
  function timechange() {
    setTime(new Date().toString());
  }
  //always return will run first
  return (

    <>
      <h1>{message}</h1>
      <button onClick={handleclick}>Click Button</button>
      <p>{time}</p>
      <button onClick={timechange}>Change Time</button>
    </>

  )

}
