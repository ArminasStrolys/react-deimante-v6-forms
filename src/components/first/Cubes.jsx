import React from 'react';
import './cubes.css'

function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const Cubes = () => {
    return (
        <div className='cube'>
           <p className='nums'>{rndNum(100, 200)}</p> 
        </div>
    );
}

export default Cubes;
