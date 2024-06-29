import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

 const handleEdit = () => {
  
 }

 const handleAdd = () => {
  setTodos([...todos,{todo,isCompleted: false}])
  setTodo("")
}

const handleChange = (e) => {
 
  setTodo(e.target.value)
}

const handleDelete = () => {
  
}

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl  p-5  bg-violet-200 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">
            Add  a Todo
          </h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className=' bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-6 font-bold text-sm
      '>Add</button>
        </div>


        <h2 className='text-lg font-bold'>yours todos</h2>
        <div className="todos">
        {todos.map(item => {
           return <div  key={todo} className="todo flex w-1/4 my-3 justify-between">
           <input type="checkbox" value={todo.isCompleted} name="" id="" />
            <div className={item.isCompleted?"line-through" :""}>{item.todo}</div>
            <div className="buttons">
              <button  onClick={handleEdit} className=' bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 font-bold text-sm
      '>Edit</button>
              <button onClick={handleDelete} className=' bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 font-bold text-sm
      '>Delete</button>
            </div>

          </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
