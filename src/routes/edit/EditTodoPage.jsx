import React from 'react'
import { TodoForm } from '../../UI/TodoForm'
export function EditTodoPage() {
    return(
        <TodoForm
            label="Edita tu nuevo TODO"
            submitText="Editar"
            submitEvent={(text) => addTodos(text)}
        />
    )
}