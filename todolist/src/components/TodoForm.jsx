import React from 'react'


const handleSubmit = () => {
  console.log('teste');

}

const handleInputChange = () => {
  console.log('teste2');
}

export default function TodoForm() {
  return (
    <div> 


      <form onSubmit={handleSubmit}>
            <input name='input' type="text" onChange={handleInputChange}  className="text" />

      </form>
          
    </div>
  )
}
