import React from 'react';
import './fifth.css'

const Creator = (props) => {
    return (
        <div className='cube' style={{width:`${props.width}px`, height:`${props.height}px`, backgroundColor:`${props.color}`}}>
            
        </div>
    );
}

export default Creator;
