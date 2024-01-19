import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () =>{
    
    if(count >= 20){
      setCount(count)
      
    }else{
      setCount(++count)
      console.log(count)
    }
  };
   const removeValue = () => {
   
    if(count <= 0){
      setCount(count)
    }
    else{
      setCount(count - 1)
    }
   };
  return (
    <>
       
    <div>
       <h2>Counter App {count}</h2>
       <button onClick={addValue}>Add Value {count}</button>
       <br></br>
       <button onClick={removeValue}>Remove Value {count}</button>
    </div>
 
    </>
  )
}

export default App
