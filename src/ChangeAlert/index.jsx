import React from 'react'
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
        <div>
            <p>Hay cambios en la aplicación</p>
            <button onClick={() => toggleShow(false)}>Cerrar</button>
        </div>
        )
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }