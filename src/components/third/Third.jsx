import React, { useState } from 'react';
import './third.css'

const Third = () => {

const [num1, setNum1] = useState(100)
const [num2, setNum2] = useState(50)

const submitHandler = (e) => {
    e.preventDefault()
    setNum2((prev) => num1 / 2)
    setNum1((prev) => num1 * 2)
}

    return (
        <div className='third'>
            <form onSubmit={submitHandler}>
                <input type="number" placeholder='Number' value={num1} onChange={()=>setNum1()} />
                <input type="number" placeholder='Number' value={num2} onChange={()=>setNum2()} />
                <button type='submit'>Switch</button>
            </form>
        </div>
    );
}

export default Third;
