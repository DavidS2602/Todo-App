import React from "react";

import "../Styles/CreateTodoButton.css";

export function CreateTodoButton(props) {
    const onClickButton = () => {
    alert("Creando nuevo TODO...");
    };
    return (
        <button className="CreateTodoButton" onClick={onClickButton}>+</button>
    );
}