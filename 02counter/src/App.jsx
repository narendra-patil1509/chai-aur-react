import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState hooks
  let [counter, setCounter] = useState(15);

  // let counter = 15;
   const addValue = () => {
    // Interview
    // These setCounter send as  a callback function to update the state value and send as complete batch because same setCounter calling
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // These prevCounter send as the previous state of the counter to make sure it  is not affected by other re-renders and consider as seperate call
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
   }

   const removeValue = () => {
    setCounter(counter - 1);
   }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button> <br />
     <button onClick={removeValue}>Remove Value {counter}</button> <br />
     <p>footer: {counter}</p>
    </>
  )
}

export default App
