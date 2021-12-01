import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({data}) => {
    return (
        <div className="containerItemDescription">
            <img src={data.thumbnail} alt={data.title} width={300}/>
            <h2>{data.price}</h2>
            <h3>{data.title}</h3>
        </div>
    )
}

export default ItemDetail