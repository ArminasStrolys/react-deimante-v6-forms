import React from 'react';
import "./fourth.css";

const Selector1 = (props) => {

  return (
    <div className="selectors" style={{textAlign:'left'}}>
      <p style={{ textAlign: "center", textTransform: "uppercase" }}>
        Colors
      </p>

      <div>
        <input type="radio" id='red' name="color" value='red' onChange={(e)=>props.param1(e.target.value)} />
        <label htmlFor='red'>red</label>
      </div>

      <div>
        <input type="radio" id='blue' name="color" value='blue' onChange={(e)=>props.param1(e.target.value)} />
        <label htmlFor='blue'>blue</label>
      </div>

      <div>
        <input type="radio" id='green' name="color" value='green' onChange={(e)=>props.param1(e.target.value)} />
        <label htmlFor='green'>green</label>
      </div>

      <div>
        <input type="radio" id='violet' name="color" value='violet' onChange={(e)=>props.param1(e.target.value)} />
        <label htmlFor='violet'>violet</label>
      </div>

      <div>
        <input type="radio" id='white' name="color" value='white' onChange={(e)=>props.param1(e.target.value)} />
        <label htmlFor='white'>white</label>
      </div>
    </div>
  );
};

export default Selector1;
