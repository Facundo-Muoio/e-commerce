import React, { useContext } from 'react'
import CartContext from "../CardContext/CardContext"
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"



const ItemDetail = ({otro}) => {
  
    const { addItem } = useContext(CartContext)

    return (

        <div className="containerItemDescription">
            <img src={otro.img} alt={otro.name} width={300}/>
            <p>{otro.name}</p>
            <p>{otro.nickname}</p>
            <p>{otro.birthday}</p>
            <ItemCount item={otro} stock={5} initial={1} addItem={addItem} />
        </div>
    )
}

export default ItemDetail