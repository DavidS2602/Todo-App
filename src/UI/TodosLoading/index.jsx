import React from "react";
import './TodosLoading.css'

export function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodocompleteIcon"></span>
            <p>Cargando...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}