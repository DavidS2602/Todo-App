import React from "react";

import '../Styles/TodoItem.css'
export function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p-complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    );
}