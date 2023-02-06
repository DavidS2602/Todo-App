import React, { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue)

    //Hook de carga
    useEffect(() => {
        setTimeout(() => {
            try {
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue))//LocalStorage vacío
                parsedItem = []
            } else {
                parsedItem = JSON.parse(localStorageItem)
            }

            setItem(parsedItem)//Actualiza el estado de la aplicación con la info del localStorage
            setLoading(false)

            } catch (error) {
            setError(error)
            }
        }, 1000)
    }, [])

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem)//Actualiza el estado de la aplicación
        } catch (error) {
            setError(error)
        }
    }
    return {
        item,
        saveItem,
        loading,
        error,
    }
}