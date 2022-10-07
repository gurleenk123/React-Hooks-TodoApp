import React,{useState} from 'react'
import useDocumentTitle from './useDocumentTitle'
import useCounter from './useCounter'

export default function CustomHook() {
    // const [count,setCount]=useState(0);
    // useDocumentTitle(count);
    const [count , increment , decrement , reset]=useCounter(0,5);


  return (
    <>
    {/* <h1>Count-{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click to increase count</button> */}
    <h1>Count:{count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}
