import React, { useEffect, useState } from 'react'

export default function Useeffect() {

  const[num, setNum] = useState(0)
  useEffect(()=> {
    return console.log("Mounting");
    
  })

  return (
    <div>
      
      <h1> UseEffect </h1>
      <h1> {num} </h1>
      <button onClick={()=>setNum(num+1)}> + </button>
    </div>
  )
}
