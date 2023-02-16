import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { EditTodoPage } from './edit/EditTodoPage'
import { HomePage } from './Home/HomePage'
import { NewTodosPage } from './new/NewTodosPage'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodosPage />} />
        <Route path="/edit/:todoId" element={<EditTodoPage />} />
      </Routes>
    </HashRouter>
  )
}

export {App}
