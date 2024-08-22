import './App.css'
import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberallow, setNumberallow] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";

    if (numberallow) str += "01234456789"
    if (Symbol) str += "!@#$%^&*(){}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberallow, symbol, setPassword])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8'>
      <div>

        <h1>PASSWORD GENERATOR</h1>
        <input
          type="text"
          value={password}
          placeholder='password'
          readOnly />
        <button>COPY</button>
      </div>
      <div>
        <input type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => { setLength(e.target.value) }}
        />
        <label>Length: {length}</label>
      </div>
      <div>
        <input type="checkbox"
          defaultChecked={numberallow}
          onChange={() => {
            setNumberallow((prev) => !prev);
          }
          } />
        <label>Numbers</label>
        <input type="checkbox"
          defaultChecked={symbol}
          onChange={() => {
            setSymbol((prev) => !prev);
          }
          } />
        <label>Symbols</label>
      </div>
    </div>
  )
}

export default App
