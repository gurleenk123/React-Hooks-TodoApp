import React, { useState } from 'react'


//HOC is component which takes a component as parameter and returns component
//so we are getting Componennt and returning NewComponent
// for this we have to make NewComponent

export default function WithCounter(Component ) {

  function NewComponent(props) {
    const [count, setCount] = useState(0);
    function increment() {
      setCount(prevState => prevState + 1);
    }
    return (
      <Component count={count} incrementValue={increment} />
    )
  }
  return NewComponent;

}
