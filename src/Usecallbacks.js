import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";

export default function Usecallbacks() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  //useCallback is primarily used to optimize the performance of components that receive callback functions as props,
  // which can include both parent and child components.
  //When passing callback functions to child components as props, using useCallback can prevent unnecessary re-renders of
  //those child components. This is because useCallback memoizes the function, ensuring that it remains the same between
  //re-renders as long as its dependencies haven't changed.


  return (
    <div>
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
