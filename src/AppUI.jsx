import React, { useState } from "react";
//Components
import { TodoCounter } from './Components/TodoCounter'
import { TodoSearch } from './Components/TodoSearch'
import { TodoList } from './Components/TodoList'
import { TodoItem } from './Components/TodoItem'
import { CreateTodoButton } from './Components/CreateTodoButton'

export function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
            <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            />
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            <TodoList>
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