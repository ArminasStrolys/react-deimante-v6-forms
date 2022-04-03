import React, { useState } from "react";
import Lister from "./Lister";

const Second = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [dataN, setDataN] = useState([]);
  const [dataW, setDataW] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataN((val) => [...val, name]);
    setDataW((val) => [...val, weight]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Cats name: </label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />
        <label>Cats weight: </label>
        <input
          type="text"
          placeholder="Kg's"
          onChange={(e) => setWeight(parseInt(e.target.value))}
        />
        <br />
        <button onClick={handleSubmit}>Save</button>

        { <Lister names={dataN} weights={dataW} />}

      </form>
    </div>
  );
};

export default Second;