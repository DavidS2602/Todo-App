import React from "react";

export function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue)
    const [sincronizedItem, setSincronizedItem] = React.useState(true)

    //Hook de carga
    React.useEffect(() => {
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
            setSincronizedItem(true)
            } catch (error) {
            setError(error)
            }
        }, 3000)
    }, [sincronizedItem])

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem)//Actualiza el estado de la aplicación
        } catch (error) {
            setError(error)
        }
    }

    const sincronizeItem = () => {
        setLoading(true)
        setSincronizedItem(false)
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem
    }
}