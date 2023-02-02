import React, { useState, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext()

function TodoProvider(props) {
    const {
        item: todos, //Renombrando
        saveItem: saveTodos, //Renombrando
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length

    let searchedTodos = []

    if (!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const addTodos = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos)//Le enviamos los datos a la función saveTodos
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)//Le enviamos los datos a la función saveTodos
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)//Le enviamos los datos a la función saveTodos
    }
    return (
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    }}>
        {props.children}
    </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
