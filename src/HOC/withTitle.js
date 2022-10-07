import React, { useState } from "react";

export const withTitle = (Component) => (props) => {
  const [count, setCount] = useState(0);

  const title = "Custom title";
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Component increment={increment} count={count} title={title} />
    </>
  );
};
