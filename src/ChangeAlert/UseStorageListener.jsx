import React from "react";

function UseStorageListener(sincronizeTodos) {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true)
            console.log('storage change')
        }
    })

    const toggleShow = (value) => {
        sincronizeTodos()
        setStorageChange(false)
    }

    return {
        show,
        toggleShow,
    }
}



export { UseStorageListener }