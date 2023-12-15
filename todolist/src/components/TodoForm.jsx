import React from 'react'




export default function TodoForm() {

  const handleSubmit = () => {
    console.log('teste');
  
  }
  
  const handleInputChange = () => {
    console.log('teste2');
  }

  
  return (
    <div> 


      <form onSubmit={handleSubmit}>
            <input name='input' 
            type="text" 
            onChange={handleInputChange}  
            placeholder='Enter todo here'/>
            <button type="button"> Add a Todo</button>
            className="text"

      </form>
          
    </div>
  )
}
