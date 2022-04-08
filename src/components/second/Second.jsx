import React, { useState, useEffect } from "react";
import "./second.css";
import Lister from "./Lister";

const Second = () => {
  let sum = 0;

  const [cat, setCat] = useState({
    catName: "Henry",
    catWeight: 10,
  });

  //---------------------------
  const [catData, setCatData] = useState(
    localStorage.getItem("catData") !== null
      ? JSON.parse(localStorage.getItem("catData"))
      : null
  );
  //------may be problem here, need to add like 'cat' state for an object

  useEffect(() => {
    localStorage.setItem("catData", JSON.stringify(catData));
  }, [catData]);

  const clear = () => {
    localStorage.removeItem("catData");
    setCatData([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    catData.sort((a, b) => b.catWeight - a.catWeight);
    setCatData((prev) => [...prev, cat]);
  };

  const handleChange = (e, data) => {
    const copyCat = { ...cat };
    copyCat[data] =
      data === "catWeight" ? parseInt(e.target.value) : e.target.value;
    setCat(copyCat);
  };

  catData.map((e) =>
    typeof e.catWeight === "number" ? (sum += parseInt(e.catWeight)) : 0
  );

  return (
    <div className="catDiv">
      <h3>CatHouse</h3>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => handleChange(e, "catName")}
        />
        <input
          type="number"
          placeholder="Weight"
          onChange={(e) => handleChange(e, "catWeight")}
        />
        <button type="submit">Enter data</button>
        <button onClick={clear}>Clear</button>
      </form>

      <div className="catData">
        <div className="cats">
          <span style={{ float: "left" }}>Name:</span>
          <span style={{ float: "right" }}>Kg:</span>
          <br />
          {catData.length > 0 &&
            catData
              .sort((a, b) => b.catWeight - a.catWeight)
              .map((cat, i) => (
                <Lister key={i} name={cat.catName} weight={cat.catWeight} />
              ))}

          <hr />

          <span>Total weight: {sum}</span>
{console.log(catData)}
        </div>
      </div>
    </div>
  );
};

export default Second;
