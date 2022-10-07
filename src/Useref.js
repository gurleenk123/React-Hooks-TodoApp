import React,{useState,useRef, useEffect} from 'react'

export default function Useref() {
    const [count,setCount]=useState("");
    const value=useRef(0);
    const inputEle=useRef("");
  
    // useEffect(()=>{
    //     // setCount(count+1);
    //     value.current=value.current+1;

    // })
    function changeInput(){
        console.log('value',inputEle);
        inputEle.current.focus()
        console.log('inputelement',inputEle.current.value);
        inputEle.current.style.backgroundColor="purple";
    }
  return (
    <>
    <input type="text" ref={inputEle} value={count} onChange={(e)=>{setCount(e.target.value)}}></input>
    <button onClick={changeInput}>Click here</button>
    {/* <h2>Value using ref - {value.current}</h2> */}
    </>
  )
}
