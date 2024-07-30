import React, { useCallback, useEffect, useState } from "react";
import Child from "./Child";


export default function Parent() {
  const [data, setData] = useState();

  useEffect(() => {
    console.log("parent component");
  });

  function getDataFromChild(newData){
    setData(newData)
  }

  return (
    <>
    <Child passParentData={getDataFromChild}/>
      <p>Data from child component : {data}</p>
    </>
  );
}
