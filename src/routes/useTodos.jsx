import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


export function useTodos() {
    const {
        item: todos, //Renombrando
        saveItem: saveTodos, //Renombrando
        loading,
        error,
        sincronizeItem: sincronizeTodos
    } = useLocalStorage('TODOS_V2', [])

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
        const id = newTodoId(todos)
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
            id,
        })
        saveTodos(newTodos)//Le enviamos los datos a la función saveTodos
    }

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)//Le enviamos los datos a la función saveTodos
    }

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)//Le enviamos los datos a la función saveTodos
    }
    return {
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
        sincronizeTodos
    }

    function newTodoId(todoList) {
        if (todoList.length === 0) {
            return 1
        } else {
            const idList = todoList.map(todo => todo.id)
            const maxId = Math.max(...idList)
            return maxId + 1
        }

    }
}

