import React, { useState } from "react";
import Cubes from "./Cubes";

const First = () => {
  const [number, setNumber] = useState(0);
  const [arry, setArry] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(number);
    for (let i = 0; i < number; i++){
      setArry(arry.push(i))
      console.log(arry)
    }
  };



  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter number" onChange={(e)=>setNumber(parseInt(e.target.value))} />
        <button type="submit">ENTER</button>
      </form>
      {arry.length > 1 && arry.map((arr, i) => <Cubes />)}
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
