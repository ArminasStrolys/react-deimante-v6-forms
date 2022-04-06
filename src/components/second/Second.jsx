import React, { useState } from "react";
import "./second.css";
import Lister from "./Lister";

const Second = () => {

  const [catData, setCatData] = useState({
    catName: '',
    catWeight: ''
  })

const submitHandler = (e) => {
  e.preventDefault()
  console.log(catData)
}


  return (
    <div className="catDiv">
      <h3>CatHouse</h3>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Name" onChange={(e)=>setCatData({catName: e.target.value})} />
        <input type="text" placeholder="Weight" onChange={(e)=>setCatData({catWeight: e.target.value})} />
        <button type="submit">Enter data</button>
      </form>
      <div className="catData">
        <div className="cats">
          <span style={{ float: "left" }}>Name:</span>
          <span style={{ float: "right" }}>Kg:</span>
          <Lister />
        </div>
      </div>
    </div>
  );
};

export default Second;
