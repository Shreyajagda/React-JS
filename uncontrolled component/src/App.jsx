import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Uncontrolledcom from './hooks/Uncontrolledcom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Uncontrolledcom/>
    </>
  )
}

export default App
