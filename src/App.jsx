import React, {useEffect, useState} from 'react'
import {AppUI} from './AppUI'
import {TodoProvider} from './TodoContext'
import './App.css'

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
] */

//Hook personalizado


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
