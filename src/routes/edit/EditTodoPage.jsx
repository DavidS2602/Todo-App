import React from 'react'
import { useParams } from 'react-router-dom'
import { TodoForm } from '../../UI/TodoForm'
import { useTodos } from '../useTodos'
export function EditTodoPage() {
    const params = useParams()
    const id =Number(params.id)
    const { editTodo } = useTodos()
    return(
        <TodoForm
        label="Edita tu TODO"
        submitText="Editar"
        submitEvent={(newText) => editTodo(id, newText)}
        />
    )
}