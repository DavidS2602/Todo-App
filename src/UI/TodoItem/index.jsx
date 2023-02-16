import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import './TodoItem.css'
export function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                < AiOutlineCheck />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span onClick={props.onDelete} className="Icon Icon-delete">
                <BsTrashFill />
            </span>
        </li>
    );
}