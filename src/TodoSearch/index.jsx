import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "../Styles/TodoSearch.css";

export function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    return (
        <>
            <input className="TodoSearch"
            placeholder="Buscar TODO"
            value={searchValue}
            onChange={(event) => {setSearchValue(event.target.value)}}
            />
        </>
    );
}