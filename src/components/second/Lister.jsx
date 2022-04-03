import React from "react";

const Lister = (props) => {
  return (
    <div>
      <div style={{width:'200px', height:'500px'}}>
        <p>Name: {props.name}</p>
      </div>
      <div style={{width:'200px', height:'500px', marginLeft:'200px', marginTop:'-516px'}}>
        <p>Kg: {props.weight}</p>
      </div>
    </div>
  );
};

export default Lister;
