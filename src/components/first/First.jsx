import React, { useState } from "react";
import Cubes from "./Cubes";

const First = () => {
  const [number, setNumber] = useState(0);
  const [num1, setNum1] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNum1((prev) => number + prev);
    console.log(num1);
  };

  const vary = Array.apply(null, { length: num1 });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter cube number"
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onSubmit={handleSubmit}>ENTER</button>
      </form>

      {vary.map((i) => (
        <Cubes key={i} />
      ))}
    </>
  );
};

export default First;
