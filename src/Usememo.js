import React, { useState, useMemo } from 'react'

export default function Usememo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function handleclick1() {
    setCount1(prevState => prevState + 1);
  }
  function handleclick2() {
    setCount2(prevState => prevState + 1);
  }

  const isEven = () => {
    console.log('hii');
    let i = 0;
    while (i < 20000000) i++;
    return count1 % 2 === 0;
  }
  
  const doubleNo = useMemo(() => {
    return slowFunc(count1);
  }, [count1]);

  function slowFunc(num) {
    console.log('slow func');
    for (let i = 0; i < 20000000; i++) {
      return num * 2;
    }
  }
  return (
    <>
    //if there is any slow function in component example which is taking more time then it will affect the other execution also
      //means it will update any other state also in delayed time
      //example doubleno is taking some 2sec to execute now if we update count2 then it will again take some time as while changing
      //state componenet will re render and doubleno again get called
      //to avoid that , to call that function when certain state changes only use usememo
      //it will memoized function value while passing dependency in array

      //IMPORTANT if function is to call without useMemo then call like normal function with paranthesis
      //isEven() not with isEven as it will not run
      //while with useMemo it memoized that value so call without paranthesis

      <p>{count1}<button onClick={handleclick1}>Click1</button> {count1} : double is : {doubleNo} </p>
      {isEven ? 'Even' : 'Odd'}
      <p>{count2}<button onClick={handleclick2}>Click2</button></p>
    </>
  )
}
