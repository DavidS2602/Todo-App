import React from "react";

function UseStorageListener(sincronize) {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true)
            console.log('storage change')
        }
    })

    const toggleShow = () => {
        sincronize()
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow,
    }
}



export { UseStorageListener }