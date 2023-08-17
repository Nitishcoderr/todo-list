import { useReducer } from 'react'
import './App.css'
import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'
import TodoContext from './context/TodoContext'
import todoReducer from './reducers/todoReducer'

function App() {
  // const [list,setList]=useState([
  //   {id:1,todoData:'todo 1',finished:true},
  //   {id:2,todoData:'todo 2',finished:false},
  // ])
  const [list, dispatch] = useReducer(todoReducer,[])
  return (
 <TodoContext.Provider value={{list}}>
 <AddTodo updateList={(todo)=>{
  dispatch({type:'add_todo',payload:{todoText:todo}})
 }} />
 <TodoList/>
 </TodoContext.Provider>
  )
}

export default App
