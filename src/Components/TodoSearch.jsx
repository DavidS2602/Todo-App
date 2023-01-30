import React, { useState } from "react";
import "../Styles/TodoSearch.css";

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