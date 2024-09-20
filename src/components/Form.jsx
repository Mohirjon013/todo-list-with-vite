import React, { useContext, useRef } from 'react'
import { Context } from '../context/TodoContext'

function Form() {
  const {todos,setTodos, addTodos, fixedTodo, setFixedTodo} = useContext(Context)

  const inputRef = useRef()
  const complatedWrapperRef = useRef()
  const allRef = useRef()
  const complatedRef = useRef()
  const uncomplatedRef = useRef()

  // allRef.current.textContent = todos.length
  function handleSubmit(e){
    e.preventDefault()
    const data = {
      id:todos.length + 1,
      title:inputRef.current.value,
      isCompleted:false
    }
    addTodos(data)
    e.target.reset()
  }
  // function handleCompletedClick(e){
   
    
  //   if(e.target.){
  //     setFixedTodo([...todos])
  //     // console.log([...todos]);
  //   }
  //   else if (e.target.matches(".complated-btn")) {
  //     const filteredArr = todos.filter(item => item.isCompleted == true)
  //     setTodos(filteredArr)
  //   }
  //   else if (e.target.matches(".complated-btn")) {
  //     const filteredArr = todos.filter(item => item.isCompleted == false)
  //     setTodos(filteredArr)
  //   }
  // }
  
  return (
    <>
      <form onSubmit={handleSubmit} className='w-[350px] mx-auto mt-10 p-2 bg-slate-600 rounded-md flex justify-between'>
        <input className='p-2 rounded-lg w-[75%] outline-none border-[1px] border-slate-300' ref={inputRef} type="text" placeholder='add todo'/>
        <button className='p-2 rounded-lg bg-green-500 w-[20%] text-white'>Add</button>
      </form>
      <div  ref={complatedWrapperRef} className="w-[450px] bg-slate-300 p-2 flex items-center justify-between rounded-[30px] mx-auto my-5">
        <button onClick={() => setFixedTodo([...todos])} className='all-btn p-2 rounded-[30px] bg-white w-[30%] text-[15px]'>All <span className='all-count' >{todos.length}</span></button>
        <button onClick={() => setFixedTodo(todos.filter(item => item.isCompleted))} ref={complatedRef} className='complated-btn p-2 rounded-[30px] bg-white w-[30%] text-[15px]'>Complated <span className='complated-count'>{todos.filter(item => item.isCompleted == true).length}</span></button>

        <button onClick={() => setFixedTodo(todos.filter(item => !item.isCompleted))} ref={uncomplatedRef} className='uncomplated-btn p-2 rounded-[30px] bg-white w-[30%] text-[15px]'>Uncomplated <span className='uncomplated-count'>{todos.filter(item => item.isCompleted != true).length}</span></button>
      </div>
    </>
  )
}

export default Form
