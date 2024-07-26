import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Test from './components/Test'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Nav /><Test /></>  
  )
}

export default App
