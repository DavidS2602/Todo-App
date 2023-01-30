import React from "react";
import "../Styles/TodoSearch.css";

export function TodoSearch() {
    const onsSearchValueChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <input className="TodoSearch" placeholder="Buscar TODO"
            onChange={onsSearchValueChange}
            />
        </>
    );
}