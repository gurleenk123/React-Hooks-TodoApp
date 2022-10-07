import React , {useState} from 'react'

// function useStateFunc(){
//     console.log('inside use state hook');
//     return 0;
// }
export default function Usestate() {
    const [count,setCount] =useState(0);
    const [state,setState]=useState({theme:'blue',number:0});

    function handleclick(){
        setState((prevState)=>{

            //return { number : prevState.number +1}; // it will render only number and will not display theme state in ui
            // because in setState it overwrites the value not update only desired value

            return {...prevState, number:prevState.number+1};

        })
    }

    function increment(){
       
       setCount(prevState=>prevState+1);
       setCount((state)=>{
        console.log('count value',state);
        return state;
       })
    }

    function decrement(){
        console.log('count in decrement before',count);
        setCount(prevState=>prevState-1);
        console.log('count in decrement after',count);
    }
  return (
    <>
    <button onClick={increment}>Increment</button>
    <p>{count}</p>
    <button onClick={decrement}>Decrement</button>

    <h3>{state.theme}</h3>
    <h3>{state.number}</h3>
    <button onClick={handleclick}>Click Me</button>

    </>

  )
}
