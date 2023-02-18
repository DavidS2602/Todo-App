import React from 'react'
import { TodoForm } from '../../UI/TodoForm'
import { useTodos } from '../useTodos'

export function NewTodosPage() {
    const { addTodos } = useTodos()
    return(
        <TodoForm
            label="Escribe tu nuevo TODO"
            submitText="Añadir"
            submitEvent={(text) => addTodos(text)}
        />
    )
}