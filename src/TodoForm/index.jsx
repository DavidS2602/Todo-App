import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState("")

    const {
        addTodos,
        setOpenModal,
    } = useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        setOpenModal(false)
        addTodos(newTodoValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="buttons">
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit" >Añadir TODO</button>
            </div>
        </form>
    )
}