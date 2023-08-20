import React, { useContext, useState } from 'react'
import todoDispatchContext from '../../context/todoDispatchContext'

const AddTodo = () => {
    const [inputText, setInputText] = useState('')
    const {dispatch} = useContext(todoDispatchContext)
  return (
    <div>
     <input type="text" value={inputText} onChange={e=>setInputText(e.target.value)} placeholder='Add your todo' />
     <button onClick={()=> {
        dispatch({type:'add_todo',payload:{todoText:inputText}})
        setInputText('')
        }}>Add</button>
    </div>
  )
}

export default AddTodo
