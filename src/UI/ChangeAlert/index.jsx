import React from 'react'
import { UseStorageListener } from './UseStorageListener';
import './styles.css'

export function ChangeAlert( { sincronize }) {
    const { show, toggleShow } = UseStorageListener( sincronize )

    if (show) {
        return (
        <div className='ChangeAlert-bg'>
            <div className='ChangeAlert-container'>
            <p>It looks like you made a modification in another browser window</p>
            <p>Do you want synchronize them?</p>
            <button className='TodoForm-button TodoForm-button--add' onClick={() => toggleShow(false)}>Yes</button>
            </div>
        </div>
        )
    } else {
        return null;
    }
}


