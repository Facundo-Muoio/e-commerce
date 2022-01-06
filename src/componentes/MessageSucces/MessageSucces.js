import React from 'react'
import "./MessageSucces.css"

export const MessageSucces = ({id}) => {
    return (
        <div className="containerMessage">
            <h3>Su transacción se completo con éxito su id es : {id}</h3>
        </div>
    )
}
