import React, { useState } from "react";
import "./second.css";
import Lister from "./Lister";

const Second = () => {
  const [cat, setCat] = useState()
  const [catData, setCatData] = useState([
    {
      catName: "Norman",
      catWeight: 13,
    },
    {
      catName: "Hilda",
      catWeight: 11,
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(catData);
  };

  const handleChange = (e, data) => {
    const copyCatData = { ...catData };
    copyCatData[data] = e.target.value;
    setCatData(copyCatData);
  };

  return (
    <div className="catDiv">
      <h3>CatHouse</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => handleChange(e, "catName")}
        />
        {console.log(catData)}
        <input
          type="text"
          placeholder="Weight"
          onChange={(e) => handleChange(e, "catWeight")}
        />
        <button type="submit">Enter data</button>
      </form>
      <div className="catData">
        <div className="cats">
          <span style={{ float: "left" }}>Name:</span>
          <span style={{ float: "right" }}>Kg:</span>

          {catData.length > 0 &&
            catData.map((cat, i) => (
              <Lister key={i} name={cat.catName} weight={cat.catWeight} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Second;
