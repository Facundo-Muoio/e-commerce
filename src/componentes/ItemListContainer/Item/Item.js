import React from 'react'
import "./Item.css"

const Item = ({data}) => {

    

    return (
        <div className="card__desarolladores">
            <img src={data.img}  alt="data.name"></img>
            <p><b>{data.titulo.toUpperCase()}</b></p>
            <p className="colorAutorCategoría">{data.autor.toUpperCase()}</p>
            <p className="colorAutorCategoría">{data.categoría.toUpperCase()}</p>
            <p className="precio"><b>${data.precio}</b></p>
        </div>
    )
}

export default Item
