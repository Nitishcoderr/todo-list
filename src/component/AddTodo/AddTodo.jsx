import React, {  useState } from 'react'

const AddTodo = ({addTodo}) => {

    const [inputText, setInputText] = useState('')
   
  return (
    <div>
     <input type="text" value={inputText} onChange={e=>setInputText(e.target.value)} placeholder='Add your todo' />
     <button onClick={()=> {
        addTodo({todoText:inputText})
        setInputText('')
        }}>Add</button>
    </div>
  )
}

export default AddTodo
