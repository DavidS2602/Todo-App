import React from 'react'
import './App.css'

//Components
import { useTodos } from './useTodos'
import { TodoHeader } from "./TodoHeader";
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { TodosError } from "./TodosError";
import { TodosLoading } from "./TodosLoading";
import { EmptyTodos } from "./EmptyTodos";
import { TodoForm } from './TodoForm'
import { CreateTodoButton } from './CreateTodoButton'
import { Modal } from './modal'
import { ChangeAlert } from './ChangeAlert';

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
    sincronizeTodos,
} = useTodos()

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>


        <TodoList
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults = {
            (searchText) => <p>No hay resultados para {searchText} </p>
          }
          render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        />

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

        <changeAlert
          sincronizeTodos={sincronizeTodos}
        />
    </React.Fragment>
  )
}

export default App
