import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Localstorage from './Components/Localstorage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Localstorage/>
      {/* <Com/> */}
      
    </>
  )
}

export default App
