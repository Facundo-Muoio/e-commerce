import React, { useContext } from 'react'
import { CartContext } from "../CartContext/CartContext"
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"



const ItemDetail = ({otro}) => {

    const { addItem } = useContext(CartContext)
    
    return (

        <div className="containerItemDescription">
            <img src={otro.img} alt={otro.titulo} width={300}/>
            <p><b>{otro.titulo}</b></p>
            <p>{otro.autor}</p>
            <p><b>$ {otro.precio} </b></p>
            <ItemCount item={otro} stock={otro.stock} initial={1} addItem={addItem} />
        </div>
    )
}

export default ItemDetail