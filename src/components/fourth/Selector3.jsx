import React from 'react';
import "./fourth.css";

const Selector3 = (props) => {

  return (
    <div className="selectors" style={{textAlign:'left'}}>
      <p style={{ textAlign: "center", textTransform: "uppercase" }}>
        Font Family
      </p>

      <div>
        <input type="radio" id='serif' name="family" value='serif' onChange={(e)=>props.param3(e.target.value)} />
        <label htmlFor='serif'>serif</label>
      </div>

      <div>
        <input type="radio" id='monospace' name="family" value='monospace' onChange={(e)=>props.param3(e.target.value)} />
        <label htmlFor='monospace'>monospace</label>
      </div>

      <div>
        <input type="radio" id='fantasy' name="family" value='fantasy' onChange={(e)=>props.param3(e.target.value)} />
        <label htmlFor='fantasy'>fantasy</label>
      </div>

      <div>
        <input type="radio" id='cursive' name="family" value='cursive' onChange={(e)=>props.param3(e.target.value)} />
        <label htmlFor='cursive'>cursive</label>
      </div>

      <div>
        <input type="radio" id='sanss' name="family" value='sansSerif' onChange={(e)=>props.param3(e.target.value)} />
        <label htmlFor='sanss'>sans-serif</label>
      </div>
    </div>
  );
};

export default Selector3;
