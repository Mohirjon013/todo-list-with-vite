import React, { useContext, useState } from 'react'
import { Context } from '../context/TodoContext'
import Modal from './Modal'

function List() {
    const {todos, deleteTodos, updateTodos} = useContext(Context)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [updateId , setUpdateId] = useState(null)
    
    function handleUpdate(e){
        setIsOpenModal(true)
        setUpdateId(e.target.id)
        const findData = todos.find(item => item.id == e.target.id)
        setInputValue(findData.title)
    }

    function handleFormSubmit(e){
        e.preventDefault()
        updateTodos(updateId, inputValue)
        setIsOpenModal(false)
    }

    function handleCompletedBtn(id){
        const findId = todos.find(item => item.id == id)
        findId.isCompleted =! findId.isCompleted
        setInputValue([...todos])
    }
    return (
        <div className="mx-auto w-[400px] mt-5  space-y-3
        ">
            {todos.map((item, index) => (
                 
                <div key={index} className={`p-2 bg-slate-300 rounded-lg flex justify-between ${item.isCompleted ? "opacity-65 line-through" : ""}`}>
                    <div  className={`flex items-center`}>
                        <strong>{index + 1}</strong>
                        <h2 className='pl-2'>{item.title}</h2>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div onClick={() => handleCompletedBtn(item.id)} className='w-[20px] h-[20px] relative cursor-pointer rounded-full border-[2px] border-black'>
                            <div className={`absolute inset-[2px] rounded-full ${item.isCompleted ? "bg-blue-500" : ""}`}></div>
                        </div>
                        <button onClick={() => deleteTodos(item.id)} className='w-[65px] rounded-lg text-white hover:opacity-50 duration-300 p-2 bg-red-500'>delete</button>
                        <button id={item.id} onClick={handleUpdate} className='w-[65px] rounded-lg text-white hover:opacity-50 duration-300 p-2 bg-green-500'>update</button>
                    </div>
                </div>
            ))}
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <form onSubmit={handleFormSubmit} className='w-[350px] mx-auto  p-2 bg-slate-600 rounded-md flex justify-between'>
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className='p-2 rounded-lg w-[75%] outline-none border-[1px] border-slate-300' type="text" placeholder='update todo'/>
                    <button type='submit' className='p-2 rounded-lg bg-green-500 w-[20%] text-white'>Update</button>
                </form>
            </Modal>
        </div>
    )
}

export default List
