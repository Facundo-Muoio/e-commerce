import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { CardContext } from '../CardContext/CardContext'


const ItemDetail = ({otro}) => {
    const addToCart = (cantidad) =>{
        let producto;
        cantidad > 1 ? producto = "productos" : producto= "producto";
        alert(`Ingresaste ${cantidad} ${producto} al carrito de compras.`);
    }

    const [card, setCard] = useContext(CardContext);
    

    return (

        <div className="containerItemDescription">
            <img src={otro.img} alt={otro.name} width={300}/>
            <p>{otro.name}</p>
            <p>{otro.nickname}</p>
            <p>{otro.birthday}</p>
            <ItemCount  stock={5} initial={1} onAdd={addToCart} />
        </div>
    )
}

export default ItemDetail