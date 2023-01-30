import React from "react";

import '../Styles/TodoItem.css'
export function TodoItem(props) {
    const onComplete = () => {
        alert('Completaste el TODO ' + props.text);
    }

    const onDelete = () => {
        alert('Eliminaste el TODO ' + props.text);
    }

    return (
        <li className="TodoItem">
            <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p-complete'}`}>
                {props.text}
            </p>
            <span onClick={onDelete} className="Icon Icon-delete">
                X
            </span>
        </li>
    );
}