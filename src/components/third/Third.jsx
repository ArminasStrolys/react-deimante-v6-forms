import React, { useState } from "react";
import "./third.css";

const Third = () => {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(50);

  const changeHandler1 = (e) => {
    setNum2(2 * parseInt(e.target.value));
    setNum1(parseInt(e.target.value));
    console.log(num1);
  };
  const changeHandler2 = (e) => {
    setNum1(2 * parseInt(e.target.value));
    setNum2(parseInt(e.target.value));
    console.log(num2);
  };

  return (
    <div className="third">
      <form>
        <input
          type="number"
          placeholder="Number"
          value={num1}
          onChange={(e) => changeHandler1(e)}
        />
        <input
          type="number"
          placeholder="Number"
          value={num2}
          onChange={(e) => changeHandler2(e)}
        />
      </form>
    </div>
  );
};

export default Third;
