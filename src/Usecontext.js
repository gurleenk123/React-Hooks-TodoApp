import React, { useContext, useState } from "react";
const userDetails = React.createContext();
export default function Usecontext() {
  const [user, setUser] = useState({
    name: "ishu",
    age: 23,
  });

  return (
    <>
      <userDetails.Provider value={user}>
        <h1>Context Parent Component</h1>
        <ChildComponent></ChildComponent>
        {/* <ChildComponent user={user}></ChildComponent> */}
      </userDetails.Provider>
    </>
  );
}

function ChildComponent(props) {
  return (
    <>
      <h1>Context Child Component</h1>
      {/* <SubChildComponent user={props.user}></SubChildComponent> */}
      <SubChildComponent/>
    </>
  );
}

function SubChildComponent(props) {
  var contextData = React.useContext(userDetails);
  console.log('contextData',contextData);
  return (
    <>
      <h1>Context Sub Child Component</h1>
      <p>
        {/* {props.user.name} age is : {props.user.age} */}
        {contextData.name} age is : {contextData.age}
      </p>
    </>
  );
}
