import React from 'react'
import WithCounter from './WithCounter';
function OnClickCounter({count,incrementValue}) {
  return (
    <>
    <h2>On Click</h2>
    <button onClick={incrementValue}>Clicked {count} times</button>
    </>

  )
}


export default WithCounter(OnClickCounter);