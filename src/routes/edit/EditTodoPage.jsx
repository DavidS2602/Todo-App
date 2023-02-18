import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../../UI/TodoForm'
import { useTodos } from '../useTodos'
export function EditTodoPage() {
    const location = useLocation()
    const params = useParams()
    const id =Number(params.id)
    const { editTodo } = useTodos()
    const { loading ,getTodos } = useTodos()

    let todoText = ''

    if(location.state?.todo){
        todoText = location.state.todo.text
    } else if(loading) {
        return <h1>Cargando...</h1>
    }else {
        const todo = getTodos(id)
        todoText = todo.text
    }
    


    return(
        <TodoForm
        label="Edita tu TODO"
        defaultTodoText = {todoText}
        submitText="Editar"
        submitEvent={(newText) => editTodo(id, newText)}
        />
    )
}