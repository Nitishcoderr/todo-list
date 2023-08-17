import { useContext } from 'react'
import TodoContext from '../../context/TodoContext'
import Todo from '../Todo/Todo'
TodoContext
const TodoList = () => {

    const {list,setList} = useContext(TodoContext)

    function onFinished(todo,isFinished){
        const updateList = list.map(t=>{
            if(t.id == todo.id){
                todo.finished = isFinished
            }
            return t;
        })
        setList(updateList);
    }

    function onDelete(todo){
        const updateList = list.filter(t=>t.id!=todo.id)
        setList(updateList)
    }

    function onEdit(todo,todoText){
        const updateList = list.map(t=>{
            if(t.id == todo.id){
                todo.todoData = todoText
            }
            return t;
        })
        setList(updateList);
    }

  return (
    <div>
    {
        list.length > 0 && list.map(todo => <Todo key={todo.id} id={todo.id} todoData={todo.todoData} isFinished={todo.finished}
        changeFinished={(isFinished)=>onFinished(todo,isFinished)}
        onDelete={()=>onDelete(todo)}
        onEdit={(todoText)=>onEdit(todo,todoText)} 
        
        />)
    }
    </div>
  )
}

export default TodoList
