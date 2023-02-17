import React from 'react'
import { TodoForm } from '../../UI/TodoForm'
export function NewTodosPage() {
    return(
        <TodoForm
            label="Escribe tu nuevo TODO"
            submitText="Añadir"
            submitEvent={(text) => addTodos(text)}
        />
    )
}