import React from "react";

import './TodoList.css'
export function TodoList(props) {
    const renderFunc = props.children || props.render;

    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(props.totalTodos && !props.searchedTodos.length && props.searchText) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map (renderFunc)}
            <ul>
                {props.children}
            </ul>
        </section>
    );
}