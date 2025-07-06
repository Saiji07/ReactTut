import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './lottery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Lottery n={4} WinSum={20}></Lottery>
    </>
  )
}

export default App
