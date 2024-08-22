import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberallow, setNumberallow] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";
    
    if (numberallow) str += "01234456789";
    if (symbol) str += "!@#$%^&*(){}~`";
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }
    
    setPassword(pass)
    
  }, [length, numberallow, symbol, setPassword])
  
  const passwdRef = useRef(null)

  const copyPasswdToClipboard = useCallback(()=> {
    passwdRef.current?.select()
    window.navigator.clipboard.writeText(password)
    //nextjs me hamare pass yeh window object nahi hota hai
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberallow, symbol, setPassword])

  return (
    <div className='flex items-center justify-center h-screen bg-slate-800 text-white'>
      <div className='p-8 bg-gray-900 rounded-lg shadow-lg w-full max-w-md'>

        <h1 className="text-2xl mb-4">PASSWORD GENERATOR</h1>
        <div className='mb-4'>
        <input
          type="text"
          value={password}
          placeholder='password'
          readOnly 
          ref={passwdRef} 
          className="w-full p-2 mb-2 text-black rounded"/>
        <button 
        onClick={copyPasswdToClipboard}
        className='w-full bg-blue-600 p-2 rounded hover:bg-blue-700'
        >COPY</button>
      </div>
      <div className='mb-4'>
        <input type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => { setLength(parseInt(e.target.value)) }}
          className="w-full"
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex justify-between'>
        <label className='flex items-center'>
        <input type="checkbox"
          defaultChecked={numberallow}
          onChange={() => {
            setNumberallow((prev) => !prev);
          }
          }
          className='mr-2' />
          Numbers
          </label>
          <label className='flex items-center'>
        <input type="checkbox"
          defaultChecked={symbol}
          onChange={() => {
            setSymbol((prev) => !prev);
          }
          }
          className='mr-2' />
        Symbol
        </label>
      </div>
      </div>
    </div>
  )
}

export default App
