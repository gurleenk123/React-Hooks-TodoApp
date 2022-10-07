import React  from "react";
import {withTitle} from "./withTitle";
import Sample from "./sample";
function Index(props) {
 
    return (
        <>
        <Sample/>
          <h1>A component: {props.title}</h1>
          <button onMouseOver={props.increment}>Count {props.count}</button>
          </>
      );
}

export default withTitle(Index);
