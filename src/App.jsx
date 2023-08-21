import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'
import { bindActionCreators } from 'redux'
import { addTodo,todoFinished,editTodo,deleteTodo } from './slices/todoSlice'

function App() {
  const dispatch = useDispatch()
  const actions = bindActionCreators({ addTodo,deleteTodo,todoFinished,editTodo},dispatch)
  return (
 <>
 <AddTodo addTodo={actions.addTodo} />
 <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} />
 </>
  )
}

export default App
