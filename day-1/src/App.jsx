import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let arr = [1,2, "Shreya"]

  let arr2=[
    {name:"Shreya", Subject:"React"},
    {name:"Shreya", Subject:"React"},
  ]

  return (
    <>
     <div>
      {
        arr.map((e,i) =>{
          return <div style={{backgroundColor:"black", color:"white", border:"2px solid black", width:"150%"}} key={i}> 
              <p>{e}</p>
          </div>
        })
      }

      {
        arr2.map((element,index)=>{
          return <div style={{backgroundColor:"aqua", border:"2px solid black", width:"150%"}} key={index}> 
          <p> {element.name}</p>
          <p> {element.Subject}</p>
          </div>

        })
      }
     </div>
    </>
  )
}

export default App
