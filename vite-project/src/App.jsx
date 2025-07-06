import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './form'
import Comments from './Comments'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Comments></Comments>
     
    </>
  )
}

export default App
