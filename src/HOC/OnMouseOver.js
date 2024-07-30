import React from 'react'
import WithCounter from './WithCounter';
function OnMouseOver({count,incrementValue}) {
  return (
    <h2 onMouseOver={incrementValue}>Mouse Overed {count} times</h2>
  )
}


export default WithCounter(OnMouseOver);