import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Useeffect from './hooks/Useeffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Useeffect/>
    </>
  )
}

export default App
