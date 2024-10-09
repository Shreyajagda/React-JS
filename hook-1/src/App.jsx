import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './component/Usestate'
import Usestate from './component/Usestate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Usestate/>
    </>
  )
}

export default App
