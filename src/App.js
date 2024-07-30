import "./App.css";
// import Usestate from "./Usestate";
//import Useeffect from './UseEffect';
//import Usememo from './Usememo';
// import Usecallbacks from './Usecallbacks';
//import Usecontext from "./Usecontext";
import Useref from "./Useref";
import CustomHook from "./CustomHook";
// import Todo from "./Todo/home"
import useConstructor from "./UseConstructor";
import React from "react";
import Useeffect from "./UseEffect";
import Parent from "./ParentChild/Parent";
import Usecallbacks from "./Usecallbacks";
import Usememo from "./Usememo";
import OnClickCounter from "./HOC/OnClickCounter";
import OnMouseOver from "./HOC/OnMouseOver";
function App() {
  useConstructor(() => {
    console.log(
      "This only happens ONCE,it happens BEFORE the initial render."
    );
  });
  return (
    <React.StrictMode>
      <div className="App">
     <CustomHook/>
      </div>
    </React.StrictMode>
  );
}

export default App;
