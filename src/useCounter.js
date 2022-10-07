import React,{useState} from 'react'

export default function useCounter(initialValue=0,value) {
    const[count,setCounter]=useState(initialValue);

    function increment(){
        setCounter(count + value);
    }

    function decrement(){
        setCounter(count - value);
    }

    function reset(){
        setCounter(0);
    }
    return[count,increment,decrement,reset];
}
