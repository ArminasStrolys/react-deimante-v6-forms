import React from 'react';
import "./fourth.css";

const Selector2 = (props) => {

  return (
    <div className="selectors" style={{textAlign:'left'}}>
      <p style={{ textAlign: "center", textTransform: "uppercase" }}>
        Font size
      </p>

      <div>
        <input type="radio" id='n20' name="size" value='20' onChange={(e)=>props.param2(e.target.value)} />
        <label htmlFor='n20'>20</label>
      </div>

      <div>
        <input type="radio" id='n30' name="size" value='30' onChange={(e)=>props.param2(e.target.value)} />
        <label htmlFor='n30'>30</label>
      </div>

      <div>
        <input type="radio" id='n40' name="size" value='40' onChange={(e)=>props.param2(e.target.value)} />
        <label htmlFor='n40'>40</label>
      </div>

      <div>
        <input type="radio" id='n50' name="size" value='50' onChange={(e)=>props.param2(e.target.value)} />
        <label htmlFor='n50'>50</label>
      </div>

      <div>
        <input type="radio" id='n60' name="size" value='60' onChange={(e)=>props.param2(e.target.value)} />
        <label htmlFor='n60'>60</label>
      </div>
    </div>
  );
};

export default Selector2;
