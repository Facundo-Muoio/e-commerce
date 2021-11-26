import React from 'react'
import "./Item.css"

const Item = ({data}) => {
    return (
        <div className="card__desarolladores">
            <h2>Nombre: {data.name}</h2>
            <h2>Usuario: {data.username}</h2>
            <p>Email: {data.email}</p>
            <p>Ciudad: {data.address.city}</p>
            <p>Teléfono: {data.phone}</p>
        </div>
    )
}

export default Item
