import React, { useState, useContext } from "react";
//Components
import { TodoContext } from "./TodoContext";
import { TodoCounter } from './Components/TodoCounter'
import { TodoSearch } from './Components/TodoSearch'
import { TodoList } from './Components/TodoList'
import { TodoItem } from './Components/TodoItem'
import { CreateTodoButton } from './Components/CreateTodoButton'
import { Modal } from './modal'
import { TodoForm } from './Components/TodoForm'

import { TodosError } from "./Components/TodosError";
import { TodosLoading } from "./Components/TodosLoading";
import { EmptyTodos } from "./Components/EmptyTodos";
export function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
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
                        <TodoForm/>
                    </Modal>
                )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}