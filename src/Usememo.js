import React , {useState,useMemo} from 'react'

export default function Usememo() {
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    function handleclick1(){
        setCount1(prevState=>prevState+1);
    }
    function handleclick2(){
        setCount2(prevState=>prevState+1);
    }

    const isEven=useMemo(()=>{
        let i=0;
        while(i < 200000000) i++;
        return count1%2 === 0;
    },[count1]);

    
  return (
    <>
    <p>{count1}<button onClick={handleclick1}>Click1</button> {isEven ? 'Even' : 'Odd'} </p>
    <p>{count2}<button onClick={handleclick2}>Click2</button></p>
    </>
  )
}
