import "./App.css";
// import Usestate from "./Usestate";
// import Useeffect from './UseEffect';
// import Usememo from './Usememo';
// import Usecallbacks from './Usecallbacks';
// import Usecontext from "./Usecontext";
// import Useref from "./Useref";
// import CustomHook from "./CustomHook";
// import Todo from "./Todo/home"
import HOC from "./HOC/index";
import React from "react";
function App() {
  return (
    <React.StrictMode>
      <div className="App">
       <HOC/>
      </div>
    </React.StrictMode>
  );
}

export default App;
