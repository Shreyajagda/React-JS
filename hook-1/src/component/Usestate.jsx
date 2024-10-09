import React, { useState } from 'react'

export default function Usestate() {

    const[count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1)
    }
    const decrement = () =>{
        setCount(count-1)
    }

  return (
    <div className='divv1'>
        <h1> {count} </h1>
        <button className='btn' onClick={increment}> + </button>
        <button className='btn' onClick={decrement}> - </button>
    </div>
  )
}
