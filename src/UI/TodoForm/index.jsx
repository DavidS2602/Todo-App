import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../routes/useTodos";

import './TodoForm.css'

export function TodoForm(props) {
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = useState("")

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        navigate('/')
    }
    const onSubmit = (event) => {
        event.preventDefault()
        navigate('/')
        props.submitEvent(newTodoValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                    >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                    >
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}