import React, { useState } from 'react'




export default function TodoForm() {
  const handleInputChange = (event) => {
    event.preventDefault()
  }

  const [InputValue,setInputValue] = useState("");
  const handleSubmit = (event) => {
    const {value} = event.target;
    setInputValue(value);
  
  }
  
 


  return (
    <div> 


      <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            name='input' 
            type="text" 
            className='todo-input'
            value={InputValue}
            onChange={handleInputChange}  
            placeholder='Enter todo here'/>
            <button className='todo-button' type="submit"> Add a Todo</button>
            

      </form>
          
    </div>
  )
}
