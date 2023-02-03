import React, { useContext } from "react";
import "./TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue }) {

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