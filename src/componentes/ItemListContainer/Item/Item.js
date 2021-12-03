import React from 'react'
import "./Item.css"

const Item = ({data}) => {
    return (
        <div className="card__desarolladores">
            <img src={data.img}  alt="data.name"></img>
            <p><b>Nombre:</b> {data.name}</p>
            <p><b>id:</b> {data.char_id}</p>
        </div>
    )
}

export default Item
