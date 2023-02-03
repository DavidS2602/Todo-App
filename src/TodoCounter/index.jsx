import React, { useContext } from 'react';
//Styles
import './TodoCounter.css'
export function TodoCounter( { totalTodos, completedTodos }) {
    return (
        <>
            <h2 className='TodoCounter'>
                Has completado {completedTodos} de {totalTodos} TODOs
            </h2>
        </>
    );
}