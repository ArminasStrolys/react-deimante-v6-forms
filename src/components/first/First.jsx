import React, { useState } from "react";
import Cubes from "./Cubes";

const First = () => {
  function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [number, setNumber] = useState(0);
  const [arry, setArry] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < number; i++) {
      arry.push(rndNum(100, 200));
    }
    setArry([...arry]);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter number"
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button type="submit">ENTER</button>
      </form>
      {arry.length > 0 && arry.map((arr, i) => <Cubes num={arr} key={i} />)}
    </>
  );
};

export default First;

// import React, { useState } from "react";
// import Cubes from "./Cubes";

// const First = () => {
//   const [number, setNumber] = useState(0);
//   const [num1, setNum1] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setNum1((prev) => number + prev);
//   };

//   const vary = Array.apply(null, { length: num1 });

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="enter cube number"
//           onChange={(e) => setNumber(parseInt(e.target.value))}
//         />
//         <button onSubmit={handleSubmit}>ENTER</button>
//       </form>

//       {vary.map((i) => (
//         <Cubes key={i} />
//       ))}
//     </>
//   );
// };

// export default First;
