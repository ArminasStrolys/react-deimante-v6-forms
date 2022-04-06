import React from "react";

const Lister = (props) => {
  return (
    <div><br />
      <span>{props.name}</span>
      <span style={{float:'right'}}>{props.weight}</span>
    </div>
  );
};

export default Lister;
