import React from 'react'
import "./Item.css"

const Item = ({data}) => {
    return (
        <div className="card__desarolladores">
            <img src={data.img}  alt="data.name"></img>
            <p><b>{data.titulo}</b></p>
            <p>{data.autor}</p>
            <p>{data.categoría}</p>
            <p><b>${data.precio}</b></p>
        </div>
    )
}

export default Item
