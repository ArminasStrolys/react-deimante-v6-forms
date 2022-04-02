import React, { useState } from "react";
import Cubes from "./Cubes";

const First = () => {
  const [cubes, setCubes] = useState(0);
  const [nums, setNums] = useState(0);
  const [arr, setArr] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setCubes(nums)

  };
  return (
    <>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Enter here..."
          onChange={(e) => setNums(parseInt(e.target.value))}
        />
        <button onClick={handleSubmit}>
          ADD CUBES
        </button>


      </form>
      <div style={{ marginTop: "50px" }}>
      {[...Array(cubes)].map((e) => <Cubes key={e} />)}
      </div>
    </>
  );
};

export default First;
