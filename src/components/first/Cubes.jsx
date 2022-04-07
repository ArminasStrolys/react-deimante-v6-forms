import React from 'react';
import './cubes.css'

// function rndNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

const Cubes = (props) => {
    return (
        <div className='cube'>
           <p className='nums'>{props.num}</p> 
        </div>
    );
}

export default Cubes;
