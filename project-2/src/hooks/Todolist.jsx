import React, { useState } from 'react'
import { useRef } from 'react'

export default function Todolist() {
    const [data,setData] = useState ([]);
   const inputRef = useRef();
   const handleclick = () => {
   
    setData([...data,inputRef.current.value])

    inputRef.current.value='';
    
   }


  return (
     <div>
            <h1> Todo List </h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleclick}> Add Todo </button>

            {data.map((e, i) => (
                <div key={i}>
                    <p>{e}</p>
                </div>
            ))}
        </div>
  )
}
