import React from "react";

const Lister = (props) => {
  return (
    <div>
      <div style={{width:'200px', height:'500px'}}>
        <p>Name: {props.names}</p>
      </div>
      <div style={{width:'200px', height:'500px', marginLeft:'200px', marginTop:'-516px'}}>
        <p>Kg: {props.weights}</p>
      </div>
    </div>
  );
};

export default Lister;
