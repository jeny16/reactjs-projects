import { useState } from 'react'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("value added", Counter);
    setCounter(Counter + 1);  
  }

  const removeValue = () => {
    console.log("valur removed" , Counter);
    setCounter(Counter - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addValue}>ADD VALUE</button> <br />
      <button onClick={removeValue}>REMOVE VALUE</button>
    </>
  )
}

export default App
