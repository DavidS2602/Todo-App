import React, {useEffect, useState} from 'react'
import {AppUI} from './AppUI'
import './App.css'

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
] */

//Hook personalizado
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)


  //Hook de carga
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))//LocalStorage vacío
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)//Actualiza el estado de la aplicación con la info del localStorage
        setLoading(false)

      } catch (error) {
        setError(error)
      }
    }, 1000)
  })

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)//Actualiza el estado de la aplicación
    } catch (error) {
      setError(error)
    }
  }
  return {
    item,
    saveItem,
    loading,
    error,
  }
}

function App() {
  const {
    item: todos, //Renombrando
    saveItem: saveTodos, //Renombrando
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')

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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  )
}

export default App
