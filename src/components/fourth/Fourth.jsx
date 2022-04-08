import React, { useState } from "react";

import "./fourth.css";
import Selector1 from "./Selector1";
import Selector2 from "./Selector2";
import Selector3 from "./Selector3";

const Fourth = () => {
  const [word, setWord] = useState("");
  const [param1, setParam1] = useState("black");
  const [param2, setParam2] = useState("20px");
  const [param3, setParam3] = useState("arial");

  const radio1 = (data) => {
    setParam1(data);
  };
  const radio2 = (data) => {
    setParam2(data);
  };
  const radio3 = (data) => {
    setParam3(data);
  };

  return (
    <div className="fourth">
      <input
        style={{ display: "block", margin: "auto", marginBottom: "20px" }}
        type="text"
        onChange={(e) => setWord(e.target.value)}
      />
      <div className="fourthIn">
        <Selector1 param1={radio1} />
        <Selector2 param2={radio2} />
        <Selector3 param3={radio3} />
      </div>
      <div className="textHere">
        <span
          className="text"
          style={{
            color: `${param1}`,
            fontSize: `${param2}px`,
            fontFamily: `${param3}`,
          }}
        >
          {word}
        </span>
      </div>
    </div>
  );
};

export default Fourth;
