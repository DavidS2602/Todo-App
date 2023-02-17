import React, { useContext, useState } from "react";

import './TodoForm.css'

export function TodoForm({ addTodos, setOpenModal, }) {
    const [newTodoValue, setNewTodoValue] = useState("")

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
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button-add" type="submit" >Añadir</button>
            </div>
        </form>
    )
}