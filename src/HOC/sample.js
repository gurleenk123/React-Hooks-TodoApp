import React  from "react";
import {withTitle} from "./withTitle";
function Sample(props) {
 
    return (
        <>
        <p>Sample component</p>
          <h1>A component: {props.title}</h1>
          <button onClick={props.increment}>Count {props.count}</button>
          </>
      );
}

export default withTitle(Sample);
