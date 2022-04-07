import React from 'react';
import './cubes.css'

const Cubes = (props) => {
    return (
        <div className='cube'>
           <p className='nums'>{props.num}</p> 
        </div>
    );
}

export default Cubes;
