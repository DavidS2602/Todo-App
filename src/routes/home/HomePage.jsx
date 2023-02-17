import React from 'react'
import '../App.css'
//Components
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../useTodos'
import { TodoHeader } from "../../UI/TodoHeader";
import { TodoCounter } from '../../UI/TodoCounter'
import { TodoSearch } from '../../UI/TodoSearch'
import { TodoList } from '../../UI/TodoList'
import { TodoItem } from '../../UI/TodoItem'
import { TodosError } from "../../UI/TodosError";
import { TodosLoading } from "../../UI/TodosLoading";
import { EmptyTodos } from "../../UI/EmptyTodos";
import { CreateTodoButton } from '../../UI/CreateTodoButton'
import { ChangeAlert } from '../../UI/ChangeAlert';

function HomePage() {
    const navigate = useNavigate()
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
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
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.id)}
                    onEdit={() => navigate(`/edit/${todo.id}`)}
                    onDelete={() => deleteTodo(todo.id)}
                    />
                )}
            />

            <CreateTodoButton
                onClick = {() => navigate('/new')}
            />

            <ChangeAlert
                sincronize={sincronizeTodos}
            />
        </React.Fragment>
    )
}

export { HomePage }
