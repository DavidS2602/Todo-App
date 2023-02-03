import React, {useEffect, useState, useContext} from 'react'
import { useTodos } from './useTodos'
import './App.css'

//Components
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import { Modal } from './modal'
import { TodoForm } from './TodoForm'
import { TodoHeader } from "./TodoHeader";
import { TodosError } from "./TodosError";
import { TodosLoading } from "./TodosLoading";
import { EmptyTodos } from "./EmptyTodos";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodos,
} = useTodos()

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        </TodoHeader>

        <TodoList>
          {error && <TodosError/>}
          {loading && <TodosLoading/>}
          {(!loading && !searchedTodos.length) && <EmptyTodos/>}
          {searchedTodos.map (todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete = {() => completeTodo (todo.text)}
              onDelete = {() => deleteTodo (todo.text)}
            />
          ))}
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm
              addTodos={addTodos}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
    </React.Fragment>
  )
}

export default App
