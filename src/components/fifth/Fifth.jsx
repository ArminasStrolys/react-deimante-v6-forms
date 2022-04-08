import React, { useState } from "react";
import "./fifth.css";
import Creator from "./Creator";

const Fifth = () => {
  const [cubes, setCubes] = useState([]);
  const [visible, setVisible] = useState('none')
  //   const [height, setHeight] = useState(100);
  //   const [width, setWidth] = useState(100);
  //   const [color, setColor] = useState("black");
  const [cubez, setCubez] = useState({
      width: 100,
      height: 100,
      color: 'black'
  });
  const [cubeParams, setCubeParams] = useState([{}]);

  const handleChange = (e, data) => {
    const newCubeParams = { ...cubeParams };
    newCubeParams[data] =
      data === "color" ? e.target.value : parseInt(e.target.value);
    setCubez(newCubeParams);

    //   console.log(cubez)
  };

  const handleSave = () => {
    // setCubeParams((prev) => [...prev, cubez.height]);
    // setCubeParams((prev) => [...prev, cubez.width]);
    // setCubeParams((prev) => [...prev, cubez.col]);
    console.log('close')
    setVisible('none')
  };

  return (
    <div className="fifth">
      <div>Create me</div>
      <button onClick={() => setVisible('block')}>CREATE+</button>
        <div style={{display:`${visible}`}}>
          <div>
            <input
              type="range"
              id="height"
              name="height"
              min="10"
              max="200"
              value={cubeParams.height}
              onChange={(e) => handleChange(e, "height")}
            />
            <label htmlFor="height">HEIGHT</label>
          </div>

          <div>
            <input
              type="range"
              id="width"
              name="width"
              min="10"
              max="200"
              step="1"
              value={cubeParams.width}
              onChange={(e) => handleChange(e, "width")}
            />
            <label htmlFor="width">WIDTH</label>
          </div>

          <div>
            <input
              type="color"
              id="col"
              name="col"
              value={cubeParams.color}
              onChange={(e) => handleChange(e, "color")}
            />
            <label htmlFor="col"></label>
          </div>

          <br />
          <button onClick={handleSave}>SAVE</button>
        </div>


        <button onClick={() => setCubes((val) => [...val, "cube"])}>
          CREATE
        </button>
        {/* {console.log(cubes)}
        {console.log("params: ", cubeParams)} */}
      
      {cubes.map((cube, i) => (
        <Creator
          width={cubez.width}
          color={cubez.color}
          height={cubez.height}
          key={i}
        />
      ))}
    </div>
  );
};

export default Fifth;
