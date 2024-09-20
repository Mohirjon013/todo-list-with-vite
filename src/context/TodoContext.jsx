import { createContext, useState } from "react";

export const Context = createContext()

export const TodoContext = ({children}) => {
    const [todos, setTodos] = useState([])
    function addTodos(body){
        setTodos([...todos, body])
    }   
    function deleteTodos(id){
        const findDelete = todos.findIndex(item => item.id == id)
        todos.splice(findDelete, 1)
        setTodos([...todos])
    }

    function updateTodos(id, newValue){
        const findData = todos.find(item => item.id == id)
        console.log(findData);
        
        findData.title = newValue
        setTodos([...todos])
    }
    return (
        <Context.Provider value={{todos,setTodos, addTodos, deleteTodos, updateTodos}}>{children}</Context.Provider>
    )
}