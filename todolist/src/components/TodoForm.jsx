import React from 'react'




export default function TodoForm() {

  const handleSubmit = (event) => {
    event.preventDefault(); 
  
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
            <button type="submit"> Add a Todo</button>
            

      </form>
          
    </div>
  )
}
