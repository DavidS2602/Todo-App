import React, { useState, useContext } from "react";
//Components
import { TodoContext } from "./TodoContext";
import { TodoCounter } from './Components/TodoCounter'
import { TodoSearch } from './Components/TodoSearch'
import { TodoList } from './Components/TodoList'
import { TodoItem } from './Components/TodoItem'
import { CreateTodoButton } from './Components/CreateTodoButton'

export function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
                <TodoList>
                    {error && <p>Ups, hubo un error...</p>}
                    {loading && <p>Cargando...</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
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
            <CreateTodoButton />
        </React.Fragment>
    )
}